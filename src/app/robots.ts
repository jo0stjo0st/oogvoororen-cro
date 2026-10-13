import type { MetadataRoute } from "next";
// Allow compliant crawlers to read the sitewide noindex,nofollow meta tag.
// This is not access control; protect the deployment with authentication for privacy.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" } };
}
