"use client";
import {useCallback,useEffect,useRef,useState} from "react";
import Link from "next/link";
import Image from "next/image";

type Mode="speaker"|"headphones";
type Ear="beide"|"links"|"rechts";
type Phase="intro"|"goals"|"setup"|"tones"|"results";
type Trial={ear:Ear;frequency:number;level:number;heard:boolean};
type Point={ear:Ear;frequency:number;level:number|null};
type RecognitionEvent={results:ArrayLike<ArrayLike<{transcript:string}>>};
type BrowserRecognition={lang:string;continuous:boolean;interimResults:boolean;onresult:((e:RecognitionEvent)=>void)|null;onerror:((e:{error:string})=>void)|null;onend:(()=>void)|null;start:()=>void;stop:()=>void;abort:()=>void};
type RecognitionConstructor=new()=>BrowserRecognition;
function getRecognition():RecognitionConstructor|undefined{
 if(typeof window==="undefined")return undefined;
 const w=window as typeof window & {SpeechRecognition?:RecognitionConstructor;webkitSpeechRecognition?:RecognitionConstructor};
 return w.SpeechRecognition||w.webkitSpeechRecognition;
}
const FREQUENCIES=[250,500,1000,2000,4000,8000];
const TEST_ORDER=[1000,2000,4000,8000,1000,500,250];
const LEVELS=[-60,-50,-40,-30,-20];
const SUGGESTIONS=["Gesprekken met familie of vrienden","Een gesprek in een druk restaurant","Televisie of radio op normaal volume","Een gesprek met meerdere personen","Telefoneren","Een vergadering of bijeenkomst","De deurbel of andere signalen horen","Anders, namelijk…"];
const hz=(f:number)=>f>=1000?`${f/1000}k`:`${f}`;
function Audiogram({points,mode}:{points:Point[];mode:Mode}){
 const left=60,top=28,w=600,h=258;
 const x=(f:number)=>left+(FREQUENCIES.indexOf(f)/(FREQUENCIES.length-1))*w;
 const y=(l:number)=>top+((l+60)/40)*h;
 const series:(Ear[]) = mode==="speaker"?["beide"]:["rechts","links"];
 const colors:Record<Ear,string>={links:"#2574b8",rechts:"#db614a",beide:"#07866a"};
 return <div className="ht-graph-wrap"><svg className="ht-audiogram" viewBox="0 0 720 350" role="img" aria-label="Grafiek met per frequentie het zachtste hoorbare niveau op dit apparaat; geen klinisch audiogram in dB HL">
  <rect x={left} y={top} width={w} height={h} rx="5" fill="#f9fcf9"/>
  {LEVELS.map(l=><g key={l}><line x1={left} x2={left+w} y1={y(l)} y2={y(l)} stroke="#dbe7de"/><text x={left-11} y={y(l)+5} textAnchor="end" fontSize="13" fill="#627568">{l}</text></g>)}
  {FREQUENCIES.map(f=><g key={f}><line x1={x(f)} x2={x(f)} y1={top} y2={top+h} stroke="#e4ece6"/><text x={x(f)} y={top+h+23} textAnchor="middle" fontSize="14" fill="#385643">{hz(f)}</text></g>)}
  <text x={left+w/2} y="345" textAnchor="middle" fontSize="13" fill="#627568">Frequentie (Hz)</text>
  <text transform="translate(15 164) rotate(-90)" textAnchor="middle" fontSize="12" fill="#627568">Relatief signaalniveau (dBFS)</text>
  {series.map(ear=>{const values=FREQUENCIES.map(f=>points.find(p=>p.ear===ear&&p.frequency===f)).filter((p):p is Point=>Boolean(p));const valid=values.filter(p=>p.level!==null);return <g key={ear}>{valid.length>1&&<polyline fill="none" stroke={colors[ear]} strokeWidth="3" strokeLinejoin="round" points={valid.map(p=>`${x(p.frequency)},${y(p.level!)}`).join(" ")}/>}
  {valid.map(p=><g key={p.frequency}><circle cx={x(p.frequency)} cy={y(p.level!)} r="7" fill="#fff" stroke={colors[ear]} strokeWidth="3"/>{ear==="links"&&<line x1={x(p.frequency)-5} y1={y(p.level!)-5} x2={x(p.frequency)+5} y2={y(p.level!)+5} stroke={colors[ear]} strokeWidth="2"/>}</g>)}
  {values.filter(p=>p.level===null).map(p=><text key={p.frequency} x={x(p.frequency)} y={top+h-5} fontSize="21" fontWeight="bold" textAnchor="middle" fill={colors[ear]}>↓</text>)}</g>})}
 </svg><div className="ht-legend">{series.map(ear=><span key={ear}><i style={{background:colors[ear]}}/>{ear==="beide"?"Beide oren samen (speaker)":ear==="links"?"Linkeroor":"Rechteroor"}</span>)}</div><p className="ht-chart-note">Dit is een <strong>relatieve toonrespons-grafiek</strong>, geen medisch audiogram. De verticale as toont het digitale signaalniveau (dBFS), niet het gehoorverlies in dB HL. Lager in de grafiek betekent dat voor die toon een harder signaal nodig was. Een pijl betekent: niet gehoord binnen de ingestelde testgrens. De 1.000 Hz-meting wordt ter controle herhaald.</p></div>;
}
export default function OnlineHearingTest(){
 const [phase,setPhase]=useState<Phase>("intro");
 const [goals,setGoals]=useState<string[]>([]);
 const [customGoal,setCustomGoal]=useState("");
 const [mode,setMode]=useState<Mode>("speaker");
 const [calibrated,setCalibrated]=useState(false);
 const [volumeOk,setVolumeOk]=useState(false);
 const [frequencyIndex,setFrequencyIndex]=useState(0);
 const [earIndex,setEarIndex]=useState(0);
 const [signalDb,setSignalDb]=useState(-35);
 const [direction,setDirection]=useState<"start"|"down"|"up">("start");
 const [hits,setHits]=useState<Record<string,number>>({});
 const [attempts,setAttempts]=useState(0);
 const [lastHeard,setLastHeard]=useState<number|null>(null);
 const [points,setPoints]=useState<Point[]>([]);
 const [trials,setTrials]=useState<Trial[]>([]);
 const [playing,setPlaying]=useState(false);
 const [waiting,setWaiting]=useState(false);
 const [paused,setPaused]=useState(false);
 const [audioError,setAudioError]=useState("");
 const [voiceOn,setVoiceOn]=useState(false);
 const [voiceBusy,setVoiceBusy]=useState(false);
 const [voiceStatus,setVoiceStatus]=useState("Schakel de gesproken begeleiding in om te beginnen.");
 const [voiceError,setVoiceError]=useState("");
 const [voiceAvailable,setVoiceAvailable]=useState(false);
 const recognitionRef=useRef<BrowserRecognition|null>(null);
 const voiceTimerRef=useRef<ReturnType<typeof setTimeout>|null>(null);
 const voiceSessionRef=useRef(0);
 const voiceModeRef=useRef(false);
 const respondRef=useRef<(heard:boolean)=>void>(()=>{});
 const playRef=useRef<(f:number,db:number,ear:Ear,cal?:boolean)=>Promise<void>>(async()=>{});
 const voiceStepRef=useRef({frequency:1000,level:-35,ear:"beide" as Ear});

 const ctxRef=useRef<AudioContext|null>(null);
 const oscRef=useRef<OscillatorNode|null>(null);
 const timeoutRef=useRef<ReturnType<typeof setTimeout>|null>(null);
 const pendingRef=useRef(false);
 const ears:Ear[]=mode==="speaker"?["beide"]:["rechts","links"];
 const ear=ears[earIndex];
 const frequency=TEST_ORDER[frequencyIndex];
 const level=signalDb;
 const total=TEST_ORDER.length*ears.length;
 const completed=points.length;
 useEffect(()=>{setVoiceAvailable(typeof window!=="undefined"&&"speechSynthesis" in window)},[]);
 const cancelVoice=useCallback(()=>{
  voiceSessionRef.current+=1;
  if(voiceTimerRef.current){clearTimeout(voiceTimerRef.current);voiceTimerRef.current=null}
  if(typeof window!=="undefined"&&"speechSynthesis" in window)window.speechSynthesis.cancel();
  const recognition=recognitionRef.current;recognitionRef.current=null;
  if(recognition){recognition.onend=null;recognition.onerror=null;recognition.onresult=null;try{recognition.abort()}catch{}}
  setVoiceBusy(false);
 },[]);
 const stop=useCallback(()=>{if(timeoutRef.current){clearTimeout(timeoutRef.current);timeoutRef.current=null;}try{oscRef.current?.stop()}catch{}oscRef.current=null;pendingRef.current=false;setPlaying(false)},[]);
 useEffect(()=>()=>{if(timeoutRef.current)clearTimeout(timeoutRef.current);try{oscRef.current?.stop()}catch{}void ctxRef.current?.close();ctxRef.current=null;if(voiceTimerRef.current)clearTimeout(voiceTimerRef.current);if(typeof window!=="undefined"&&"speechSynthesis" in window)window.speechSynthesis.cancel();try{recognitionRef.current?.abort()}catch{}},[]);
 const play=useCallback(async(f:number,db:number,channel:Ear,calibration=false)=>{
  if(pendingRef.current)return;
  pendingRef.current=true;setWaiting(false);setPlaying(true);setAudioError("");
  try{
   const Ctx=window.AudioContext;
   if(!Ctx)throw new Error("Uw browser ondersteunt geen Web Audio.");
   if(!ctxRef.current)ctxRef.current=new Ctx();
   const ctx=ctxRef.current;await ctx.resume();
   if(ctx.state!=="running")throw new Error("Geluid kon niet worden gestart. Controleer de geluidsinstellingen.");
   const osc=ctx.createOscillator();osc.type="sine";osc.frequency.setValueAtTime(f,ctx.currentTime);
   const gain=ctx.createGain();const amplitude=Math.pow(10,db/20);
   const start=ctx.currentTime+0.025,duration=calibration?1.1:.75;
   gain.gain.setValueAtTime(0,start-.02);gain.gain.linearRampToValueAtTime(amplitude,start+.05);gain.gain.setValueAtTime(amplitude,start+duration-.07);gain.gain.linearRampToValueAtTime(0,start+duration);
   osc.connect(gain);
   if(channel==="beide"){gain.connect(ctx.destination)}
   else{const pan=ctx.createStereoPanner();pan.pan.value=channel==="links"?-1:1;gain.connect(pan);pan.connect(ctx.destination)}
   oscRef.current=osc;osc.start(start);osc.stop(start+duration+.02);if(calibration)setCalibrated(true);
   timeoutRef.current=setTimeout(()=>{oscRef.current=null;pendingRef.current=false;setPlaying(false);if(!calibration)setWaiting(true)},Math.ceil((duration+.12)*1000));
  }catch(e){pendingRef.current=false;setPlaying(false);setWaiting(false);setAudioError(e instanceof Error?e.message:"Geluid afspelen is niet gelukt.")}
 },[]);
 playRef.current=play;
 const currentGoal=(s:string)=>s==="Anders, namelijk…"?customGoal.trim():s;
 const addGoal=(s:string)=>{const g=currentGoal(s);if(!g||goals.includes(g)||goals.length>=5)return;setGoals(v=>[...v,g]);if(s==="Anders, namelijk…")setCustomGoal("")};
 const resetSearch=()=>{setSignalDb(-35);setDirection("start");setHits({});setAttempts(0);setLastHeard(null);setWaiting(false)};
 const next=(newPoint:Point)=>{
  const updated=[...points,newPoint];setPoints(updated);resetSearch();
  if(frequencyIndex<TEST_ORDER.length-1){setFrequencyIndex(v=>v+1)}
  else if(earIndex<ears.length-1){setEarIndex(v=>v+1);setFrequencyIndex(0)}
  else{setPhase("results");setPaused(false)}
 };
 const respond=(heard:boolean)=>{
  if(!waiting||playing||paused)return;
  setWaiting(false);setTrials(v=>[...v,{ear,frequency,level,heard}]);
  const n=attempts+1;setAttempts(n);
  const finish=(threshold:number|null)=>next({ear,frequency,level:threshold});
  const adjust=(db:number,dir:"start"|"down"|"up")=>{setSignalDb(Math.max(-60,Math.min(-20,db)));setDirection(dir)};
  if(direction==="start"){
   if(heard){setLastHeard(level);adjust(level-10,"down")}
   else if(level>=-20)finish(null);
   else adjust(level+5,"start");
   return;
  }
  if(direction==="down"){
   if(heard){setLastHeard(level);if(level<=-60)adjust(level,"up");else adjust(level-10,"down")}
   else adjust(level+5,"up");
   return;
  }
  if(heard){
   setLastHeard(level);
   const count=(hits[String(level)]||0)+1;
   setHits(v=>({...v,[String(level)]:count}));
   if(count>=2){finish(level);return}
   if(level<=-60){adjust(level,"up");return}
   adjust(level-10,"down");
  }else{
   if(level>=-20){finish(null);return}
   if(n>=24){finish(lastHeard);return}
   adjust(level+5,"up");
  }
 };
 respondRef.current=respond;
 const restart=()=>{cancelVoice();setVoiceOn(false);voiceModeRef.current=false;stop();setPhase("intro");setGoals([]);setCustomGoal("");setMode("speaker");setCalibrated(false);setVolumeOk(false);setFrequencyIndex(0);setEarIndex(0);resetSearch();setPoints([]);setTrials([]);setPaused(false);setAudioError("")};

 const listenForAnswer=useCallback((session:number)=>{
  if(voiceSessionRef.current!==session||!voiceModeRef.current)return;
  const Recognition=getRecognition();
  if(!Recognition){setVoiceStatus("Gebruik de knoppen Ja of Nee om te antwoorden. Uw browser ondersteunt geen spraakherkenning.");setVoiceBusy(false);return}
  try{
   const rec=new Recognition();rec.lang="nl-NL";rec.continuous=false;rec.interimResults=false;
   recognitionRef.current=rec;
   setVoiceStatus("Ik luister. Zeg 'ja' als u de toon hoorde, of 'nee' als u niets hoorde.");
   rec.onresult=e=>{
    if(voiceSessionRef.current!==session)return;
    const spoken=Array.from(e.results).map(v=>v[0]?.transcript||"").join(" ").toLowerCase().trim();
    const no=/\\b(nee|neen|niet|niks|niets|nope|no)\\b/.test(spoken);
    const yes=/\\b(ja|jazeker|zeker|gehoord|hoorde|yes|jawel)\\b/.test(spoken);
    if(!yes&&!no){setVoiceStatus(`Ik hoorde: "${spoken}". Gebruik Ja of Nee hieronder, of probeer het opnieuw.`);setVoiceBusy(false);return}
    recognitionRef.current=null;rec.onend=null;try{rec.stop()}catch{}
    setVoiceStatus(no?"Dank u. Ik pas de toon aan.":"Dank u. We gaan verder.");
    setVoiceBusy(false);
    respondRef.current(!no);
   };
   rec.onerror=e=>{
    if(voiceSessionRef.current!==session)return;
    setVoiceBusy(false);
    setVoiceStatus(e.error==="not-allowed"?"Microfoon niet toegestaan. Gebruik de knoppen Ja en Nee.":"Ik kon uw antwoord niet verstaan. Gebruik Ja of Nee of probeer opnieuw.");
    if(e.error==="not-allowed")setVoiceError("Geef eventueel microfoontoegang in uw browserinstellingen.");
   };
   rec.onend=()=>{if(voiceSessionRef.current===session){recognitionRef.current=null;setVoiceBusy(false)}};
   rec.start();
  }catch{setVoiceBusy(false);setVoiceStatus("Spraakherkenning is hier niet beschikbaar. Gebruik de knoppen Ja en Nee.")}
 },[]);
 const speakAndPlay=useCallback((intro:boolean)=>{
  if(!voiceModeRef.current||paused||phase!=="tones")return;
  cancelVoice();
  const session=voiceSessionRef.current;
  const step=voiceStepRef.current;
  setVoiceBusy(true);setWaiting(false);setVoiceError("");
  const isSpeaker=step.ear==="beide";
  const message=intro
   ?"Welkom. Ik begeleid u door de hoortest. U hoort zo een korte pieptoon. Daarna vraagt ik of u die hoorde. U kunt gewoon ja of nee zeggen. U mag ook op de knoppen drukken. Houd het volume tijdens de test gelijk. We beginnen."
   :step.level===-35?"We gaan naar de volgende toon. Luister maar.":"Luister nog eens goed naar de volgende toon.";
  setVoiceStatus("Uw begeleider spreekt…");
  const startTone=()=>{
   if(voiceSessionRef.current!==session||!voiceModeRef.current)return;
   setVoiceStatus("Luister naar de pieptoon…");
   void playRef.current(step.frequency,step.level,step.ear).then(()=>{
    voiceTimerRef.current=setTimeout(()=>{if(voiceSessionRef.current===session&&voiceModeRef.current)listenForAnswer(session)},1250);
   });
  };
  if(!("speechSynthesis" in window)){startTone();return}
  const u=new SpeechSynthesisUtterance(message.replace("Daarna vraagt ik","Daarna vraag ik"));
  u.lang="nl-NL";u.rate=.94;u.pitch=1;u.volume=1;
  const voices=window.speechSynthesis.getVoices();
  const dutch=voices.find(v=>v.lang.toLowerCase()==="nl-nl"&&v.localService)||voices.find(v=>v.lang.toLowerCase().startsWith("nl"));
  if(dutch)u.voice=dutch;
  let started=false;
  const done=()=>{if(started)return;started=true;startTone()};
  u.onend=done;u.onerror=done;
  window.speechSynthesis.speak(u);
 },[cancelVoice,listenForAnswer,paused,phase]);
 voiceStepRef.current={frequency,level,ear};
 const voiceStepKey=`${phase}:${ear}:${frequencyIndex}:${signalDb}:${attempts}`;
 const lastVoiceStepRef=useRef("");
 useEffect(()=>{
  if(!voiceOn||phase!=="tones"||paused)return;
  if(lastVoiceStepRef.current===voiceStepKey)return;
  const first=lastVoiceStepRef.current==="";
  lastVoiceStepRef.current=voiceStepKey;
  const t=setTimeout(()=>speakAndPlay(first),first?250:650);
  return()=>clearTimeout(t);
 },[voiceOn,voiceStepKey,phase,paused,speakAndPlay]);
 const toggleVoice=()=>{
  if(voiceOn){voiceModeRef.current=false;setVoiceOn(false);cancelVoice();setVoiceStatus("Gesproken begeleiding uitgeschakeld.");return}
  if(!voiceAvailable)return;
  voiceModeRef.current=true;lastVoiceStepRef.current="";setVoiceOn(true);
  setVoiceStatus("De begeleider begint zo. U kunt ook de knoppen blijven gebruiken.");
 };
 const avg=(ps:Point[])=>{const v=ps.filter(p=>p.level!==null).map(p=>p.level!);return v.length?v.reduce((a,b)=>a+b,0)/v.length:null};
 const highs=points.filter(p=>p.frequency>=2000);
 const lows=points.filter(p=>p.frequency<=1000);
 const highAvg=avg(highs),lowAvg=avg(lows);
 const missing=points.filter(p=>p.level===null).length;
 const first1000=points.find(p=>p.frequency===1000&&p.ear===ears[0]);
 const repeat1000=points.filter(p=>p.frequency===1000&&p.ear===ears[0])[1];
 const repeatDiff=first1000?.level!=null&&repeat1000?.level!=null?Math.abs(first1000.level-repeat1000.level):null;
 const disparity=mode==="headphones"?Math.max(...FREQUENCIES.map(f=>{const l=points.find(p=>p.ear==="links"&&p.frequency===f)?.level;const r=points.find(p=>p.ear==="rechts"&&p.frequency===f)?.level;return l===null||r===null?0:l!==undefined&&r!==undefined?Math.abs(l-r):0})):0;
 const indication=(repeatDiff!==null&&repeatDiff>10)||missing>0||highAvg!==null&&lowAvg!==null&&highAvg-lowAvg>=12||disparity>=12;
 return <div className="ht-page"><header className="ht-header"><div className="wide ht-header-inner"><Link href="/" aria-label="Terug naar de CRO-werkplaats"><Image src="/assets/logo-white.svg" alt="Oogvoororen" width={195} height={47} priority/></Link><span>Online hoortest</span><a href="tel:+31854863743">☎ <span>085 - 486 37 43</span></a></div></header><main id="main-content">
  <section className="ht-hero"><div className="wide"><div className="ht-kicker">OOGVOOROREN · ONLINE HOORCHECK</div><h1>Hoe goed <em>hoort u?</em></h1><p>Ontdek welke geluiden u op uw eigen apparaat kunt waarnemen en in welke situaties u graag beter zou willen horen.</p><div className="ht-hero-pills"><span>✓ Gratis</span><span>✓ Met of zonder koptelefoon</span><span>✓ Direct uw persoonlijke uitslag</span></div></div></section>
  <div className="wide ht-main-layout"><div className="ht-main-card"><div className="ht-progress"><div><strong>{phase==="intro"?"Welkom":phase==="goals"?"Uw luisterwensen":phase==="setup"?"Geluid instellen":phase==="tones"?"De toontest":"Uw uitslag"}</strong><span>{phase==="intro"?"Stap 1 van 4":phase==="goals"?"Stap 2 van 4":phase==="setup"?"Stap 3 van 4":phase==="tones"?"Stap 4 van 4":"Afgerond"}</span></div><div className="ht-progress-track"><div style={{width:phase==="intro"?"12%":phase==="goals"?"33%":phase==="setup"?"60%":phase==="tones"?`${60+(completed/total)*40}%`:"100%"}}/></div></div>
  {phase==="intro"&&<div className="ht-panel"><div className="ht-step-number">01 / 04</div><h2>Een eerste indruk van uw gehoor</h2><p>Deze online check bestaat uit twee onderdelen: uw persoonlijke luisterwensen en een reeks zachte pieptonen. U krijgt daarna een grafiek en een passend vervolgadvies.</p><div className="ht-notice"><strong>Belangrijk om te weten</strong><p>Een telefoon, laptop of koptelefoon is niet medisch gekalibreerd. Daarom meten we <strong>geen gehoorverlies in dB HL</strong> en kan deze check een hoortest bij een audicien niet vervangen. Via een speaker meten we beide oren samen; voor links en rechts apart is een koptelefoon nodig.</p></div><div className="ht-intro-tiles"><div><b>1</b><strong>Uw luisterdoelen</strong><small>Wat wilt u beter kunnen horen?</small></div><div><b>2</b><strong>De pieptonen</strong><small>Op uw eigen apparaat</small></div><div><b>3</b><strong>Uw resultaat</strong><small>Grafiek en persoonlijk advies</small></div></div><button className="ht-primary" onClick={()=>setPhase("goals")}>Start mijn hoortest <span>→</span></button></div>}
  {phase==="goals"&&<div className="ht-panel"><div className="ht-step-number">02 / 04 · COSI-LUISTERDOELEN</div><h2>Wat zou u graag beter willen horen?</h2><p>De COSI-methode begint bij uw eigen wensen. Kies maximaal vijf <strong>concrete situaties</strong>, op volgorde van belangrijkheid. Uw belangrijkste wens staat bovenaan. Dit zijn doelen voor een eventueel adviesgesprek, geen diagnosevragen.</p><div className="ht-goal-suggestions">{SUGGESTIONS.filter(s=>s!=="Anders, namelijk…").map(s=><button type="button" key={s} disabled={goals.length>=5||goals.includes(s)} onClick={()=>addGoal(s)}><span>{goals.includes(s)?"✓":"+"}</span>{s}</button>)}</div><div className="ht-custom-goal"><label htmlFor="ht-own-goal">Uw eigen situatie toevoegen</label><div><input id="ht-own-goal" value={customGoal} onChange={e=>setCustomGoal(e.target.value)} maxLength={150} placeholder="Bijv. mijn kleinkind verstaan tijdens het eten"/><button type="button" onClick={()=>addGoal("Anders, namelijk…")} disabled={!customGoal.trim()||goals.length>=5}>Toevoegen</button></div></div><div className="ht-goal-list"><strong>Uw doelen ({goals.length}/5)</strong>{goals.length===0?<p>Nog geen situaties gekozen. Begin met wat voor u het belangrijkst is.</p>:<ol>{goals.map((g,i)=><li key={g}><span>{i+1}</span><p>{g}</p><button type="button" aria-label={`Verwijder ${g}`} onClick={()=>setGoals(v=>v.filter(x=>x!==g))}>×</button></li>)}</ol>}</div><div className="ht-panel-actions"><button className="ht-back" onClick={()=>setPhase("intro")}>← Terug</button><button className="ht-primary" disabled={!goals.length} onClick={()=>setPhase("setup")}>Verder naar de toontest →</button></div></div>}
  {phase==="setup"&&<div className="ht-panel"><div className="ht-step-number">03 / 04</div><h2>Stel uw geluid goed in</h2><p>Ga in een stille ruimte zitten en kies hoe u wilt luisteren. Gebruik bij voorkeur een koptelefoon. U kunt ook gewoon de speaker van uw telefoon of computer gebruiken.</p><div className="ht-device-options"><button className={mode==="speaker"?"selected":""} onClick={()=>{setMode("speaker");setCalibrated(false)}}><span className="ht-device-icon">◖))</span><strong>Speaker</strong><small>Beide oren tegelijk · minder betrouwbaar</small></button><button className={mode==="headphones"?"selected":""} onClick={()=>{setMode("headphones");setCalibrated(false)}}><span className="ht-device-icon">◉</span><strong>Koptelefoon</strong><small>Linker- en rechteroor afzonderlijk</small></button></div><div className="ht-calibration"><h3>Controleer het volume</h3><ol><li>Zet het apparaatvolume eerst <strong>laag</strong> (ongeveer 20–30%).</li><li>Speel de voorbeeldtoon af en verhoog alleen indien nodig iets, tot deze <strong>comfortabel en duidelijk, maar niet hard</strong> hoorbaar is.</li><li>Laat het volume tijdens de rest van de test ongewijzigd.</li></ol><button className="ht-sound-button" disabled={playing} onClick={()=>{setCalibrated(false);void play(1000,-20,"beide",true)}}>{playing?"♪ Voorbeeldtoon speelt…":"▶ Speel voorbeeldtoon (1.000 Hz)"}</button>{audioError&&<p className="ht-error" role="alert">{audioError}</p>}<label className="ht-checkbox"><input type="checkbox" checked={volumeOk} onChange={e=>setVolumeOk(e.target.checked)}/> <span>De voorbeeldtoon is het hardste testsignaal en klinkt prettig en niet hard. Ik houd het volume gelijk en stop als geluid oncomfortabel wordt.</span></label></div><div className="ht-notice ht-soft"><strong>{mode==="speaker"?"Test via speaker":"Test met koptelefoon"}</strong><p>{mode==="speaker"?"We kunnen met een speaker niet bepalen welk oor een toon hoort. Uw resultaat toont daarom één gecombineerde lijn en is alleen een grove indicatie.":"De tonen worden naar het linker- of rechterkanaal gestuurd. Controleer of uw koptelefoon goed zit en of mono-audio, ruimtelijke audio en geluidsverbetering uitstaan."}</p></div><div className="ht-panel-actions"><button className="ht-back" onClick={()=>setPhase("goals")}>← Terug</button><button className="ht-primary" disabled={!calibrated||!volumeOk||playing||Boolean(audioError)} onClick={()=>{setPhase("tones");setPaused(false);setWaiting(false)}}>Start de pieptonen →</button></div></div>}
  {phase==="tones"&&<div className="ht-panel ht-tones-panel"><div className="ht-step-number">04 / 04 · TOONMETING</div><h2>Hoort u de pieptoon?</h2><p>Luister aandachtig. Speel de toon af en geef aan of u hem hebt gehoord. Sommige tonen zijn heel zacht. <strong>Verander het volume niet.</strong></p><div className="ht-voice-guide"><div className="ht-voice-guide-top"><div className="ht-voice-avatar" aria-hidden="true">♫</div><div><strong>Gesproken begeleiding</strong><p>Uw begeleider speelt de tonen af. U kunt met ja of nee antwoorden of de knoppen gebruiken.</p></div></div><button type="button" className="ht-voice-toggle" onClick={toggleVoice}>{voiceOn?"Stop gesproken begeleiding":"Start gesproken begeleiding"}</button><p className="ht-voice-status">{voiceStatus}</p></div><div className="ht-test-meter"><div><span>Voortgang</span><strong>{completed} van {total} metingen</strong></div><div className="ht-test-meter-track"><div style={{width:`${(completed/total)*100}%`}}/></div></div><div className="ht-tone-card"><div className="ht-ear-label">{ear==="beide"?"◖))  Via de speaker":ear==="links"?"◉  Linkeroor":"◉  Rechteroor"}</div><div className="ht-frequency">{hz(frequency)} <small>Hz</small></div><p>{playing?"De toon wordt nu afgespeeld…":waiting?"Heeft u de toon gehoord?":attempts>0?"Goed bezig. Luister naar de volgende toon.":"Klik op de knop om de toon af te spelen."}</p><div className={playing?"ht-sound-pulse active":"ht-sound-pulse"} aria-hidden="true">♫</div><button className="ht-play-tone" disabled={playing||paused} onClick={()=>void play(frequency,level,ear)}>{playing?"♪ Toon speelt…":waiting?"↻ Nogmaals luisteren":"▶ Speel de toon af"}</button><div className="ht-response-buttons"><button className="ht-heard" disabled={!waiting||playing||paused} onClick={()=>respond(true)}>✓ Ja, gehoord</button><button className="ht-not-heard" disabled={!waiting||playing||paused} onClick={()=>respond(false)}>Nee, niet gehoord</button></div></div><p className="ht-tone-hint">We zoeken de zachtst hoorbare toon met de 10 dB omlaag / 5 dB omhoog-methode. Na twee bevestigde reacties bij een stijgende aanbieding gaan we automatisch naar de volgende frequentie. Het signaal kan dus ook zachter worden. Verander het apparaatvolume niet.</p><div className="ht-panel-actions"><button className="ht-back" onClick={()=>{stop();setWaiting(false);setPaused(v=>!v)}}>{paused?"▶ Hervat test":"Ⅱ Pauzeer"}</button><button className="ht-secondary" onClick={()=>{stop();setWaiting(false);setPhase("setup");setFrequencyIndex(0);setEarIndex(0);resetSearch();setPoints([]);setTrials([]);setCalibrated(false);setVolumeOk(false)}}>Opnieuw instellen</button></div>{audioError&&<p className="ht-error" role="alert">{audioError}</p>}{paused&&<p className="ht-paused">Test gepauzeerd. U kunt straks verdergaan.</p>}</div>}
  {phase==="results"&&<div className="ht-panel ht-results"><div className="ht-step-number">UW PERSOONLIJKE UITSLAG</div><h2>Dit is uw gehoorcheck</h2><p>U hebt de toontest afgerond. Hieronder ziet u hoe zacht een signaal op <strong>dit apparaat</strong> nog hoorbaar was. De uitkomst is niet te vergelijken met een klinische hoortest.</p><div className="ht-result-banner"><span aria-hidden="true">♡</span><div><strong>{indication?"Een professionele hoortest is verstandig":"Uw online check is afgerond"}</strong><p>{indication?"U hoorde enkele tonen pas bij een sterker signaal of niet binnen de testgrens. Dit kan door uw gehoor, apparaat, speaker of omgevingsgeluid komen.":"Op basis van deze beperkte thuistest kunnen we geen gehoorverlies bevestigen of uitsluiten. Uw luisterwensen blijven belangrijk."}</p></div></div><Audiogram points={points} mode={mode}/>{repeatDiff!==null&&<p className="ht-repeat-note">Controle op 1.000 Hz: verschil van {repeatDiff} dB in digitaal signaalniveau. {repeatDiff>10?"Dit verschil is groot; de meting is mogelijk niet consistent.":"De twee metingen liggen dicht bij elkaar."}</p>}<div className="ht-result-details"><div><span>Luistermethode</span><strong>{mode==="speaker"?"Speaker (beide oren samen)":"Koptelefoon (links en rechts)"}</strong></div><div><span>Frequenties</span><strong>250 – 8.000 Hz</strong></div><div><span>Niet gehoord binnen testgrens</span><strong>{missing} van {points.length}</strong></div></div><div className="ht-advice"><h3>Ons advies</h3><p>{mode==="speaker"?"U hebt via een speaker getest. Daarmee kunnen we geen verschil tussen uw oren meten. Wilt u nauwkeuriger vergelijken, herhaal de test met een koptelefoon. ":""}{indication?"Maak een afspraak bij een audicien voor een echte gehoormeting in dB HL en persoonlijk advies.":"Als u moeite hebt met gesprekken, televisie of telefoneren, maak dan alsnog een afspraak bij een audicien. Een online test kan gehoorproblemen missen."}</p><p>Bij <strong>plotseling gehoorverlies</strong>, een duidelijk nieuw verschil tussen beide oren of bijkomende klachten: neem snel contact op met uw huisarts. Wacht dan niet op een online test.</p></div><div className="ht-your-goals"><h3>Uw persoonlijke luisterdoelen (COSI)</h3><p>Neem deze wensen mee naar een gesprek met de audicien, in deze volgorde:</p><ol>{goals.map(g=><li key={g}>{g}</li>)}</ol></div><div className="ht-result-actions"><a className="ht-primary" href="https://oogvoororen.nl/afspraak">Maak een afspraak voor een echte hoortest →</a><button className="ht-secondary" onClick={()=>window.print()}>↧ Uitslag bewaren / afdrukken</button><button className="ht-back" onClick={restart}>↻ Opnieuw testen</button></div><p className="ht-privacy">De resultaten worden alleen op uw apparaat verwerkt en niet naar een server verstuurd.</p></div>}
  </div><aside className="ht-aside"><div className="ht-aside-box"><span className="ht-aside-icon">✳</span><h3>Goed om te weten</h3><p>Een online hoortest geeft een eerste indruk. Alleen met gekalibreerde apparatuur kan een audicien uw gehoordrempel betrouwbaar vaststellen.</p><a href="https://oogvoororen.nl/afspraak">Plan een professionele hoortest →</a></div><div className="ht-aside-small"><strong>Een paar handige tips</strong><p>Zoek een rustige ruimte, zet meldingen uit en neem de tijd. Er is geen haast.</p></div></aside></div>
 </main><footer className="ht-footer"><div className="wide"><span>© Oogvoororen · Online gehoorcheck</span><span>Indicatieve zelftest · Geen medische diagnose</span><Link href="/">CRO-werkplaats</Link></div></footer></div>;
}
