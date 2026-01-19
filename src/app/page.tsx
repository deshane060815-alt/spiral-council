import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <button className="px-6 py-3">Begin Ritual</button>
      <button className="">Learn More</button>
      <Link href="/r1">Go to Ritual</Link>
    </main>
  );
}