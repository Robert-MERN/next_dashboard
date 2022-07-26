import React from 'react'
import BrandingCard from '../components/BrandingCard';
import helpbrand1 from "../public/images/helpbrand1.png";
import helpbrand2 from "../public/images/helpbrand2.png";
import helpbrand3 from "../public/images/helpbrand3.png";
import helpbrand4 from "../public/images/helpbrand4.png";
import helpbrand5 from "../public/images/helpbrand5.png";

const LandingSectionFive = ({ bgColor, half }) => {
    const PF = process.env.NEXT_APP_PUBLIC_FOLDER;
    return (
        <>
            <div style={{ backgroundColor: bgColor }} className="w-full h-auto flex justify-center py-20 px-8"  >
                <div className='w-full lg:w-800 xl:w-1000 2xl:w-1400 flex flex-col items-center' >
                    {!half &&
                        <p className='text-38 md:text-55 text-center my-7 leading-50' >
                            Helping Brands Outperform With Custom Web Design
                        </p>}
                    {!half &&
                        <p className='text-24 font-sans font-semibold text-center my-7' >
                            We are committed towards providing professional web designs tailored to your brand's culture, core values & distinction. We take a strategic approach to creating unique brand identities. Working with the best designers in the industry, we create immaculate designs that speak for themselves
                        </p>}
                    <div className='w-full flex-wrap flex justify-center xl:flex-row flex-col my-7 items-center' >
                        <BrandingCard
                            text="Constant Client Coordination"
                            bgColor="hover:bg-red-300"
                            icon={helpbrand1}
                        />
                        <BrandingCard
                            text="Supreme Customer Satisfaction"
                            bgColor="hover:bg-teal-200"
                            icon={helpbrand2}
                        />
                        <BrandingCard
                            text="100% Ownership Rights"
                            bgColor="hover:bg-green-300"
                            icon={helpbrand3}
                        />
                        <BrandingCard
                            text="Secure Money Back Guarantee"
                            bgColor="hover:bg-pink-400"
                            icon={helpbrand4}
                        />
                        <BrandingCard
                            text="Industry Proven Professionals"
                            bgColor="hover:bg-gray-300"
                            icon={helpbrand5}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingSectionFive