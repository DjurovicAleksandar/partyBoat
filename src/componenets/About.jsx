import { useEffect } from "react";
import CountUpSection from "./aboutComponenets/CountUpSection";
import Services from "./aboutComponenets/Services";

function About({ visible }) {
  return (
    <div className="w-[90%] mx-auto relative">
      {/* Main box */}
      <div className="w-full h-full z-30 text-black font-semibold px-4 lg:px-8">
        {/**/}
        <div className="py-28 text-[#f24603e0] sm:py-16">
          <div className="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col lg:flex-row">
              {/* Count up section */}
              <div className="my-10 text-center lg:text-left md:w-[300px] mx-auto lg:mx-0 ">
                <p className="text-sm  uppercase font-black text__container">
                  Numbers don't lie
                </p>
                <h2 className="text__container2 text-2xl font-black">
                  <i>
                    Ideal for exclusive island tours and private parties, with
                    endless options for personalization.
                  </i>
                </h2>
              </div>
              <div className="mx-auto mt-8 grid grid-cols-1 gap-6 sm:grid-cols-4 md:gap-8 lg:mt-16 lg:mr-0">
                {visible && <CountUpSection visible={visible} />}
              </div>
            </div>
          </div>
        </div>
        {/* Services section */}
        <div className="">
          <h2 className="mt-10 mb-3 text-center text-2xl font-black lg:w-[1000px] mx-auto text__container">
            Experience the ultimate adventure on our private party boat. Enjoy
            drinks, food, and transportation while exploring the hidden gems of
            Dalmatia.
            <br /> Fully customizable to fit your needs and more.
            <br /> Come aboard and let's make memories.
          </h2>
          <hr className="mx-auto mb-10 h-2 w-20 transform border-y-2 border-y-blue-900/30" />
          {/* Services */}
          <div className="mx-auto grid grid-cols-1 grid-rows-2 gap-5 px-10 text-center md:grid-cols-2 xl:grid-cols-3 md:max-w-screen-lg md:px-0 text-white mb-20">
            {visible && <Services />}
          </div>
        </div>
      </div>
      {/* Background */}
      <div className=" w-full h-full z-0 flex items-end">
        <h2 className="text-5xl lg:text-7xl text-center font-black opacity-80 text__container">
          Why go on a regular cruise when you can go on a customized adventure
          <br />
          with us?
        </h2>
      </div>
    </div>
  );
}

export default About;
