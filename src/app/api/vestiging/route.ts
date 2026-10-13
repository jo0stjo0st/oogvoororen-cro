import { branches, nearestBranch } from "@/features/locations/branches";
export function GET(request: Request) {
  const reply = (id: string | null, source: "geoip" | "selected" | "unknown") =>
    Response.json(
      { id, source },
      { headers: { "Cache-Control": "private, no-store" } },
    );
  const selected = new URL(request.url).searchParams.get("vestiging");
  if (selected) {
    const branch = branches.find((b) => b.id === selected);
    return reply(branch?.id || null, branch ? "selected" : "unknown");
  }
  const country = request.headers.get("x-vercel-ip-country");
  const rawLat = request.headers.get("x-vercel-ip-latitude");
  const rawLon = request.headers.get("x-vercel-ip-longitude");
  if (country !== "BE" || !rawLat || !rawLon) return reply(null, "unknown");
  const lat = Number(rawLat),
    lon = Number(rawLon);
  if (
    !Number.isFinite(lat) ||
    !Number.isFinite(lon) ||
    lat < 49.5 ||
    lat > 51.6 ||
    lon < 2.4 ||
    lon > 6.5
  )
    return reply(null, "unknown");
  return reply(nearestBranch(lat, lon).id, "geoip");
}
