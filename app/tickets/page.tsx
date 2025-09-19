import Link from "next/link";
import FormEmbed from "./FormEmbed";
export default function TicketsPage() {
    return (
      <main className="flex justify-center min-h-screen bg-[#dfddcf]">
        <div className="container py-20">
            <Link href="/" className="hover:italic hover:font-bold transition-all duration-100 text-gray-900">{"<<"} back to home</Link>
            <h1 className="text-4xl font-bold mb-4">Tickets</h1>
            <p className="text-fontColor">This is the tickets page.</p>
            <FormEmbed></FormEmbed>
        </div>
      </main>
    );
  }
  