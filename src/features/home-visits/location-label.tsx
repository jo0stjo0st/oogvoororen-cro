import { homeVisitLocation } from "./content";

type HomeVisitLocationLabelProps = {
  locationName?: string;
  otherLocationCount?: number;
};

// A future GeoIP lookup can pass a suggested name without changing this layout.
export function HomeVisitLocationLabel({
  locationName = homeVisitLocation.name,
  otherLocationCount = homeVisitLocation.otherLocationCount,
}: HomeVisitLocationLabelProps) {
  return (
    <strong className="cro-house-location-label">
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
      <span>
        <span data-location-name>{locationName}</span> en{" "}
        <span data-other-location-count>{otherLocationCount}</span> andere locaties
      </span>
    </strong>
  );
}
