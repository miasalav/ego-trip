import React, { useEffect, useRef, useState } from 'react'
import { FaFly } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const InfoOne = () => {
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
        <section ref={scrollRef}  className="w-full flex flex-wrap justify-left items-center text-font-color overflow-y-scroll h-[400px] scrollbar-thin scrollbar-thumb-font scrollbar-track-transparent px-8">
            <div className='mb-4'>
                <h3 className="text-2xl text-center mb-4 -tracking-[1px]">✦ inflight entertainment ✦</h3>
                <ul className='pl-4 mt-2 text-xs'>
                    <li className='leading-5 mb-5'><strong className='border py-1 px-2 rounded-2xl mr-1'>music by</strong><a className='underline' href="https://www.instagram.com/gi____gi_____/" target='_blank'>Gi Gi</a> from 4pm-12am</li>
                    <li className='leading-5 mb-5'><strong className='border py-1 px-2 rounded-2xl'>movement by</strong> body time will lead a movement workshop from 2pm - 3pm (register) (credit to the fabulous <a className='underline mx-2' href="https://instagram.com/arriverflush" target='_blank'>@arriverflush</a> for this lovely idea!) </li>
                    <li className='leading-5 mb-5'><strong className='border py-1 px-2 rounded-2xl'>food by</strong> Elo <a className="underline" href="https://instagram.com/lesoupersuper" target='_blank'>IG</a></li>
                    <li className='leading-5 mb-5'><strong className='border py-1 px-2 rounded-2xl'>tarot by</strong> Yaku Chaska
                        <a className='underline mx-2' href="https://instagram.com/lesoupersuper" target='_blank'>@lesoupersuper</a>
                        <a className='underline mr-2' href="https://xhslink.com/m/5K30IH9H63l" target='_blank'>Rednote</a>
                        <a className='underline mr-2' href="https://www.yakuchaska.com/" target='_blank'>Web</a>
                    </li>
                    <li className='leading-5 mb-5'><strong className='border py-1 px-2 rounded-2xl'>lighting by</strong> Steffi <a className='underline' href="https://www.instagram.com/crustybyduffy/" target='_blank'>@crustybyduffy</a></li>
                    <li className='leading-5 mb-5'><strong className='border py-1 px-2 rounded-2xl'>games curated by</strong> <a className='underline'href='https://www.instagram.com/c_sidecollective' target='_blank'>C-Side</a> </li>
                </ul>
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

export default InfoOne
