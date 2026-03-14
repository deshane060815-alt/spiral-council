import Link from "next/link";

const DEFAULT_SITE_URL = "http://localhost:3000";

function getRitualUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;

  try {
    return new URL("/r1", siteUrl).toString();
  } catch {
    return `${DEFAULT_SITE_URL}/r1`;
  }
}

export default function Home() {
  const ritualUrl = getRitualUrl();

  return (
    <main>
      <button className="px-6 py-3">Begin Ritual</button>
      <button className="">Learn More</button>
      <Link href={ritualUrl}>Go to Ritual: {ritualUrl}</Link>
    </main>
  );
}