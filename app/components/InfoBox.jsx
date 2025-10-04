import React, { useEffect, useRef, useState } from 'react'
import { FaFly } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const InfoBox = () => {
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
                <h2 className="text-xl text-center font-bold flex justify-center">Before Your Trip <FaFly className="ml-2" /></h2>
                <h3 className="text-lg font-bold">The 5 W's</h3>
                <ul className='pl-4 text-sm'>
                    <li><strong>What:</strong> Ego Trip</li>
                    <li><strong>Who:</strong> Gi Gi will take us on an 8-hour set</li>
                    <li><strong>When:</strong> Sunday, October 19th, 2pm - 10pm</li>
                    <li><strong>Where:</strong> Parquette - 1345 Bellechasse </li>
                    <li><strong>Why:</strong> It’ll be beautiful ‘n fun :)  </li>
                </ul>
            </div>
            <div className='mb-4'>
                <h3 className="text-lg font-bold">What should I expect?</h3>
                <p className='text-sm mb-2'>Seems like your ego deserves to trip. Start with a question and find your answer, get really silly and laugh ‘til you cry, fall in love with he or she or they or you, maybeeee feel how good it feels to be in this part of the simulation where the October sky in Montreal is so so beautiful, beautiful, & blue, remember BOOT, remember who you wanted to be when you were 7 and be that, play, cuddle, dream, and then do all three in reverse. It’s that sort of vibe - y’know? </p>
                <p className='text-sm mb-2'>Wanna know about the music? It’s gonna be fucking beautiful, special, and full of feeling. Gi Gi has 8 hours to earn your trust, but I think it’s prolly gonna take just 8-minutes. The build will be slow and gentle. Be patient. Take your time. Settle in. Don’t pressure yourself to dance too hard or listen too closely or shazam…. Just be. It will be easier than you think, I promise. He has a sound that you just wanna be in a room with.</p>
                <p className='text-sm mb-2'>Come early if you can. There’s lots to take in on your journey:</p>
                <ul className='pl-4 list-disc mt-2 text-sm'>
                    <li>Music by GiGi from 2pm-10pm</li>
                    <li>Movement by Body Time from 2pm - 3pm (register) (credit to the fabulous <a className='underline mx-2' href="https://instagram.com/arriverflush" target='_blank'>@arriverflush</a> for this lovely idea!) </li>
                    <li>Food by Elo <a href="https://instagram.com/lesoupersuper" target='_blank'>IG</a></li>
                    <li>Tarot by Yaku Chaska
                        <a className='underline mx-2' href="https://instagram.com/lesoupersuper" target='_blank'>@lesoupersuper</a>
                        <a className='underline mr-2' href="https://xhslink.com/m/5K30IH9H63l" target='_blank'>Rednote</a>
                        <a className='underline mr-2' href="https://www.yakuchaska.com/" target='_blank'>Web</a>
                    </li>
                    <li>Lighting by Steffi <a className='underline' href="https://www.instagram.com/crustybyduffy/" target='_blank'>@crustybyduffy</a></li>
                    <li>Games by (insert name) throughout</li>
                </ul>
            </div>
            <div className='mb-4'>
                <h3 className="text-lg font-bold">What should I expect?</h3>
                <ul className='pl-4 text-sm list-disc'>
                    <li>Psychedelics - not required but definitely recommended</li>
                    <li>{`Boos, baes, & besties - anyone you might wanna snuggle & explore with <3`}</li>
                </ul>
            </div>
            <div className='mb-4'>
                <h3 className="text-lg font-bold">Will there be food?</h3>
                <ul className='pl-4 text-sm list-disc'>
                    <li>Yes! You can pay for a full menu and wine pairing when you buy your <a href="#" target='_blank'>ticket</a> (or after).
                    <br></br> 
                        <span className='text-xs italic'>We won’t be able to guarantee availability of the full menu during the event, so please pay for the food ticket in advance if that’s something you’re interested in. </span>
                    </li>
                    <li>Trip treats will also be available a la carte. </li>
                </ul>
            </div>
            <div className='mb-4'>
                <h3 className="text-lg font-bold">Is there anything else I need to know?</h3>
                <ul className='pl-4 list-disc text-sm'>
                    <li>{'No phones on the dancefloor - we aren’t going to take or sticker your phones. But we hope you’ll intuitively notice when being on a screen isn’t the vibe <3'}</li>
                    <li>Lie, sit, trip, skip, kiss, hug, cry on the dancefloor, but please try to keep big convos to a minimum (we got lots of chill out zones for chat!).  </li>
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

export default InfoBox
