"use client";
type Pose="intro"|"goals"|"setup"|"tones"|"results";
export default function AudiologistAvatar({pose="intro",speaking=false}:{pose?:Pose;speaking?:boolean}){
 const headset=pose==="tones";
 const point=pose==="setup"||pose==="goals";
 const celebrate=pose==="results";
 return <div className={`ht-avatar-figure ht-avatar-${pose}${speaking?" is-speaking":""}`} role="img" aria-label={`Vriendelijke getekende audicien ${headset?"met koptelefoon":celebrate?"die uw resultaat presenteert":point?"die uitleg geeft":"die u welkom heet"}`}>
 <svg viewBox="0 0 300 290" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
 <defs>
 <linearGradient id="avatar-bg" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#eff9f3"/><stop offset="1" stopColor="#cce9d7"/></linearGradient>
 <radialGradient id="avatar-skin" cx=".3" cy=".22" r=".85"><stop stopColor="#ffe4ce"/><stop offset=".65" stopColor="#e9a87d"/><stop offset="1" stopColor="#c47a55"/></radialGradient>
 <linearGradient id="avatar-hair" x1="0" x2="1" y1="0" y2=".5"><stop stopColor="#4b251a"/><stop offset=".42" stopColor="#91502d"/><stop offset=".8" stopColor="#54291d"/><stop offset="1" stopColor="#351d19"/></linearGradient>
 <linearGradient id="avatar-shirt" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#fff"/><stop offset=".65" stopColor="#f0f5ef"/><stop offset="1" stopColor="#ccd9d0"/></linearGradient>
 <radialGradient id="avatar-eye"><stop stopColor="#493125"/><stop offset=".7" stopColor="#2e211b"/><stop offset="1" stopColor="#100f10"/></radialGradient>
 <filter id="avatar-shadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#173b29" floodOpacity=".2"/></filter>
 </defs>
 <ellipse cx="149" cy="272" rx="125" ry="15" fill="#6d9d80" opacity=".15"/>
 <circle cx="150" cy="136" r="130" fill="url(#avatar-bg)" opacity=".64"/>
 {/* raised hand, different poses */}
 {point?<g filter="url(#avatar-shadow)"><path d="M222 243 Q244 209 244 166 L245 121 Q248 110 255 118 L260 166 Q264 183 274 174 L284 162 Q294 155 296 164 Q295 182 278 207 L269 254Z" fill="url(#avatar-skin)"/><path d="M224 250 Q246 222 264 232 L279 281 L222 281Z" fill="url(#avatar-shirt)"/></g>:celebrate?<g filter="url(#avatar-shadow)"><path d="M222 252 Q246 227 259 205 L273 179 Q284 167 288 177 L277 203 Q295 195 298 205 Q298 217 276 235 L265 282Z" fill="url(#avatar-skin)"/><path d="M226 248 Q248 234 268 247 L277 285 L226 285Z" fill="url(#avatar-shirt)"/></g>:<g filter="url(#avatar-shadow)"><path d="M57 245 Q28 216 26 182 L24 150 Q24 139 31 141 L36 172 L39 128 Q41 118 48 126 L49 165 L57 121 Q63 114 67 125 L62 170 L73 144 Q81 138 83 148 L71 187 Q70 208 80 227Z" fill="url(#avatar-skin)"/><path d="M48 220 Q69 209 84 232 L91 281 L37 281Z" fill="url(#avatar-shirt)"/></g>}
 {/* body and neck */}
 <path d="M105 198 Q115 185 116 168 L181 169 Q185 194 197 202 L224 215 Q248 232 258 286 L46 286 Q51 230 82 215Z" fill="url(#avatar-shirt)" stroke="#cadbd0" strokeWidth="2" filter="url(#avatar-shadow)"/>
 <path d="M123 171 L121 201 Q149 228 177 199 L175 170" fill="url(#avatar-skin)"/>
 <path d="M121 194 L147 221 L118 241 L102 207 M177 194 L150 221 L179 242 L197 207" fill="#fff" stroke="#c5d7cc" strokeWidth="2"/>
 <path d="M149 223 L149 285" stroke="#147c57" strokeWidth="4"/>
 <path d="M145 246 L153 246" stroke="#147c57" strokeWidth="3"/>
 <circle cx="203" cy="238" r="12" fill="#b3d67a"/><path d="M198 238 Q203 230 209 238 Q204 248 198 238" fill="#1a6947"/>
 {/* bun and hair volume */}
 <path d="M103 72 Q89 44 109 30 Q126 14 154 25 Q180 12 194 34 Q217 46 198 77" fill="url(#avatar-hair)"/>
 <circle cx="167" cy="28" r="29" fill="url(#avatar-hair)"/><path d="M150 19 Q166 7 183 24 M148 31 Q164 14 186 34" stroke="#b77648" strokeWidth="5" opacity=".65" fill="none"/>
 <path d="M84 104 Q77 60 108 50 Q147 25 188 55 Q217 76 208 135 L197 157 L91 149Z" fill="url(#avatar-hair)" filter="url(#avatar-shadow)"/>
 {/* ears */}
 <ellipse cx="90" cy="131" rx="12" ry="17" fill="url(#avatar-skin)"/><ellipse cx="207" cy="131" rx="12" ry="17" fill="url(#avatar-skin)"/>
 {/* face */}
 <path d="M99 92 Q103 66 149 66 Q196 65 201 99 L198 152 Q191 189 149 195 Q110 189 101 151Z" fill="url(#avatar-skin)" stroke="#d58e66" strokeWidth="1"/>
 <path d="M101 94 Q110 58 150 61 Q186 59 199 88 Q176 86 162 72 Q137 95 101 94" fill="url(#avatar-hair)"/>
 <path d="M112 116 Q124 108 138 116 M161 116 Q175 108 189 117" stroke="#603c2a" strokeWidth="4" strokeLinecap="round" fill="none"/>
 <ellipse cx="125" cy="130" rx="13" ry="15" fill="#fff"/><ellipse cx="176" cy="130" rx="13" ry="15" fill="#fff"/>
 <ellipse cx="128" cy="132" rx="7" ry="10" fill="url(#avatar-eye)"/><ellipse cx="173" cy="132" rx="7" ry="10" fill="url(#avatar-eye)"/>
 <circle cx="131" cy="127" r="3.5" fill="#fff"/><circle cx="176" cy="127" r="3.5" fill="#fff"/>
 <path d="M148 134 Q140 151 150 152 L156 150" fill="none" stroke="#c88463" strokeWidth="2.5" strokeLinecap="round"/>
 <ellipse cx="115" cy="153" rx="14" ry="6" fill="#d78078" opacity=".3"/><ellipse cx="185" cy="153" rx="14" ry="6" fill="#d78078" opacity=".3"/>
 <path d="M132 167 Q150 185 169 166 Q153 170 132 167" fill="#fff" stroke="#a6534e" strokeWidth="2.5" strokeLinejoin="round"/>
 <path d="M134 166 Q150 173 169 166" fill="none" stroke="#b76262" strokeWidth="2"/>
 {headset&&<g><path d="M91 131 Q80 62 151 59 Q218 62 208 132" stroke="#29483c" strokeWidth="14" fill="none" strokeLinecap="round"/><rect x="77" y="119" width="23" height="47" rx="10" fill="#1e5846" stroke="#91c6a6" strokeWidth="4"/><rect x="201" y="119" width="23" height="47" rx="10" fill="#1e5846" stroke="#91c6a6" strokeWidth="4"/><path d="M215 159 Q221 186 181 188" fill="none" stroke="#245b48" strokeWidth="4"/><circle cx="178" cy="188" r="5" fill="#245b48"/></g>}
 {celebrate&&<g><path d="M235 85 L240 98 L254 100 L243 110 L245 124 L233 117 L221 124 L224 109 L214 100 L229 98Z" fill="#f2b745"/><circle cx="252" cy="70" r="4" fill="#6fb77c"/><circle cx="271" cy="122" r="5" fill="#d89e49"/></g>}
 </svg></div>;
}
