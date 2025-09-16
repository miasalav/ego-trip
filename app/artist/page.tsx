import Link from "next/link";

export default function ArtistPage() {
    return (
      <main className="flex justify-center min-h-screen bg-[#dfddcf]">
        <div className="container py-20">
            <Link href="/" className="hover:italic hover:font-bold transition-all duration-100 text-gray-900">{"<<"} back to home</Link>
            <h1 className="text-4xl font-bold mb-4">Artist</h1>
            <p className="text-gray-700">This is the artist page.</p>
        </div>
      </main>
    );
  }
  