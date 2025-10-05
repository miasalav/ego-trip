import Link from "next/link";
import Image from "next/image";

export default function ArtistPage() {
    return (
      <main className="flex justify-center min-h-screen bg-[#f6f5ef] relative">
        <video
        src="/artist-loop.mp4"
        autoPlay
        muted
        playsInline
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />
        <div className="container py-20 flex justify-center items-center z-10">
          <div className="page-content max-w-[1100px] text-font-color">
          <Link
            href="/"
            className="
              inline-block
              transform transition-all duration-200
              text-font-color
              hover:translate-x-1.5
              hover:italic
              hover:font-bold
            "
          ><strong>
            {"<<"} back to home
            </strong>
          </Link>

            <div className="flex flex-wrap mt-16">
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <Image
                  src="/images/gigi-artist-image.jpg"   // must be in /public/images/
                  alt="Gigi"
                  width={400}
                  height={400}
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-16 flex flex-col justify-end items-start">
                <h2 className="text-6xl mb-6 font-bold -tracking-[1px]">who is Gi Gi?</h2>
                <h3 className="italic font-bold mb-6 text-2xl">beautiful bliss spiller.</h3>
                <p className="text-sm">utilizing a collage-based approach that takes in a wide swath of source material, Gi Gi produces a peculiar strain of ambient dance music equally at home in headphones or the back rooms of a club. As a DJ, the introspection that characterizes his music echoes throughout, but the net is cast wider. The energy oftentimes inches upwards, and styles that trace contours in his productions present themselves more directly. Bringing nuance and warmth to his DJing, Gi Gi nudges dancers towards reflection and loungers towards movement.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-start mt-16 flex-col">
                <h2 className="text-4xl mb-6 font-bold max-w-[250px]">mixes</h2>
                <ol className="font-bold list-decimal pl-4">
                  <li className="transform transition-all duration-200 hover:translate-x-1.5 hover:underline">
                    <Link href="https://soundcloud.com/pipipigroup/gi-gi-79-cloudy" target="_blank">Pi Pi PI - 79 Degrees Cloudy Gi Gi</Link>
                  </li>
                  <li className="transform transition-all duration-200 hover:translate-x-1.5 hover:underline">
                    <Link href="https://soundcloud.com/goodmorningtapes/gi-gi-wonderwhirl-mixtape-side-a" target="_blank">Wonderwhirl Mixtape (Side A)</Link>
                  </li>
                  <li className="transform transition-all duration-200 hover:translate-x-1.5 hover:underline">
                    <Link href="https://soundcloud.com/esenciamx/esencia-090-gi-gi" target="_blank">Esencia 090 - Gi Gi</Link>
                  </li>
                  <li className="transform transition-all duration-200 hover:translate-x-1.5 hover:underline">
                    <Link href="https://soundcloud.com/refugeworldwide/dizzying-gi-gi-30-oct-2025" target="_blank">Refuge Worldwide - Dizzying, Gi Gi </Link>
                  </li>
                </ol>
              </div>
              <div className="w-full md:w-1/2 flex justify-start mt-16 flex-col">
                <h2 className="text-4xl mb-6 font-bold max-w-[250px]">interviews</h2>
                <ol className="font-bold list-decimal pl-4">
                  <li className="transform transition-all duration-200 hover:translate-x-1.5 hover:underline">
                    <Link href="https://www.lowendtheorists.com/theory-therapy-mixes/theory-therapy-19-gi-gi" target="_blank">Low End Theorists</Link>
                  </li>
                  <li className="transform transition-all duration-200 hover:translate-x-1.5 hover:underline">
                    <Link href="https://pipipi.life/mix/79%CB%9A-cloudy/" target="_blank">Pipipi</Link>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  