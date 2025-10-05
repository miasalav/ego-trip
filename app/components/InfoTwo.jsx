import React, { useEffect, useRef, useState } from 'react'
import { FaFly } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const InfoTwo = () => {
    const scrollRef = useRef(null);
    const [showArrow, setShowArrow] = useState(false);
  
    useEffect(() => {
      const el = scrollRef.current;
  
      if (!el) return;
  
      const checkScroll = () => {
        // check if there's overflow
        const hasOverflow = el.scrollHeight > el.clientHeight;
        // check if scrolled to bottom
        const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;
        setShowArrow(hasOverflow && !atBottom);
      };
  
      checkScroll(); // run on mount
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll); // handle resizes
  
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }, []);

  return (
    <>
    <div className='relative'>
        <section ref={scrollRef}  className="w-full flex flex-wrap justify-left text-font-color overflow-y-scroll h-[400px] scrollbar-thin scrollbar-thumb-font scrollbar-track-transparent px-3">
            <div className='mb-4 w-full'>
                <h2 className="text-xl text-center font-bold flex justify-center uppercase tracking-[1px]">Before You Fly</h2>
            </div>
            <div className='mb-4 text-xxs'>
                <p className='text-xs mb-6'>seems like your ego deserves to trip...</p>
                <p className='text-xs mb-2'>start with a question and find your answer, get really silly and laugh ‘til you cry, fall in love with he or she or they or you, maybeeee feel how good it feels to be in this part of the simulation where the October sky in Montreal is so so beautiful, beautiful, & blue, remember BOOT, remember who you wanted to be when you were 7 and be that, play, cuddle, dream, and then do all three in reverse. It’s that sort of vibe - y’know? </p>
                <p className='text-xs mb-2'>wanna know about the music? It’s gonna be fucking beautiful, special, and full of feeling. Gi Gi has 8 hours to earn your trust, but I think it’s prolly gonna take just 8-minutes. The build will be slow and gentle. Be patient. Take your time. Settle in. Don’t pressure yourself to dance too hard or listen too closely or shazam…. Just be. It will be easier than you think, I promise. He has a sound that you just wanna be in a room with.</p>
                <p className='text-xs mb-2'>come early if you can. There’s lots to take in on your journey:</p>
            </div>
        </section>
    {/* Down arrow indicator */}
    {showArrow && (
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-font-color animate-bounce">
            <MdKeyboardDoubleArrowDown size={18} />
            </div>
        )}
    </div>
    </>
  )
}

export default InfoTwo
