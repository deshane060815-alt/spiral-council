import Linkink from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-5xl font-bold mb-6 tracking-wide">
        Spiral Council
      </h1>
      <p className="text-lg text-center max-w-xl mb-8">
        A mythic system of identity, ritual, and transformation. Begin your induction. Choose your path.
      </p>
      <div className="flex gap-6">
        <button className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
          Begin Ritual
        </button>
        <button className="px-6 py-3 border border-white font-semibold rounded hover:bg-white hover:text-black transition">
          Learn More
        </button>
      </div>
    </main>
  );
}
<Link href="/ritual">Begin Ritual</Link>
<Link href="/page"><button className="your-button-styles">Go</button></Link>
  <button className="px-6 py-3 bg-indigo-600 text-white rounded shadow">
    Begin Ritual
  </button>
</Link>
