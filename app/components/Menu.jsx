import React from 'react'
import { GiMushroomHouse } from "react-icons/gi";

const Menu = () => {

  return (
    <>
    <section className="w-full flex flex-wrap justify-center text-font-color overflow-y-scroll h-[400px] scrollbar-thin scrollbar-thumb-font scrollbar-track-transparent px-3">
        <h2 className="flex text-xl text-center font-bold mb-4">Trip Treats <GiMushroomHouse className="ml-2" /></h2>
        <div className='mb-4 w-full'>
            <h3 className="text-lg text-center underline">Ego Trip Menu - A la carte</h3>
            <h4 className='text-md'><strong>Food (Savory)</strong></h4>
            <ul className='pl-4 text-sm list-disc mb-4'>
                <li>Waffle sandwich filled with chicken, slaw, fried shallots and delicious sauce (tofu available) <strong className='italic'>12$</strong></li>
                <li>Tofu cake on skewers served in warm broth with tokyo turnips <strong className='italic'>$9</strong></li>
            </ul>
            <h4 className='text-md'><strong>Food (Savory)</strong></h4>
            <ul className='pl-4 text-sm list-disc mb-4'>
                <li>Gem Candy (Jade, Quartz, Amethyst, Onyx)  <strong className='italic'>3$</strong></li>
                <li>Dark Chocolate Cake on a Stick <strong className='italic'>$6</strong></li>
            </ul>
            <h4 className='text-md'><strong>Drinks (for 150ml each)</strong>)</h4>
            <ul className='pl-4 text-sm list-disc mb-4'>
                <li>Roasted oat milk chai shroom tea <strong className='italic'>$3</strong></li>
                <li>Cranberry and rose slushie <strong className='italic'>$5</strong></li>
                <li>Orangesicle (orange and tonka bean) mocktail <strong className='italic'>$6</strong></li>
            </ul>
        </div>
        
        <div className='mb-4'>
            <h3 className="text-lg text-center underline mb-4">Ego Trip Menu - A la carte</h3>
            <p className='text-sm mb-3'>To open the sensations through the mouth, tongue should feel softly 
                <br></br>
                <span className='ml-4 italic'>Crunchy outside, gooey inside, fascinating gem</span>
            </p>
            <p className='text-sm mb-3'>Energy is needed for the going about a full round of an ego trip
                <br></br>
                <span className='ml-4 italic'>Nostalgic vessel for vibrant energy </span>
            </p>
            <p className='text-sm mb-3'>Time to slow down, let the body be calmed by comforting broth
                <br></br>
                <span className='ml-4 italic'> Flavorful hot broth to go back to</span>
            </p>
            <p className='text-sm mb-3'>A sweet treat to finish off dreaming and to appease the heart 
                <br></br>
                <span className='ml-4 italic'> Decadent and homely, holded in hands</span>
            </p>
        </div>
        <div className='mb-4'>
            <h3 className="text-lg mb-3 text-center">Food by Elo <a className='underline hover:font-bold' href='https://instagram.com/lesoupersuper' target='_blank'>@lesoupersuper</a></h3>
            <p className='text-sm'>Elo has been curating tastes for quite some time now. Mostly liquid at Restaurant Limbo. Mostly solid at Souper Super.</p>
        </div>
    </section>
    </>
  )
}

export default Menu
