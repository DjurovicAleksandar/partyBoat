import { useEffect } from "react";
import CountUp from "react-countup";
import { InView, useInView } from "react-intersection-observer";
import numberBg from "../../assets/img/numbers/numberBg.png";

function CountUpSection() {
  const countUp = [
    { number: 2000, sign: "+", text: "Hours" },
    { number: 500, sign: "+", text: "Excursions" },
    { number: 800, sign: "+", text: "Clients" },
    { number: 99, sign: "%", text: "Happy clients" },
  ];

  return (
    <>
      {countUp.map(({ number, sign, text }, i) => {
        return (
          <div key={i} className="w-[13rem] text-3xl font-bold relative">
            <img alt="windwow picture background" src={numberBg} />
            <div className="absolute inset-0 w-[120px] h-full flex flex-col items-center justify-center ">
              <div className="relative z-50">
                <InView triggerOnce="true">
                  {({ inView, ref }) => {
                    return (
                      <div ref={ref}>
                        <CountUp start="0" end={number} duration={3}>
                          {({ countUpRef, start }) => {
                            if (inView) start();

                            return (
                              <div>
                                {sign} <span ref={countUpRef} />
                              </div>
                            );
                          }}
                        </CountUp>
                      </div>
                    );
                  }}
                </InView>
              </div>
              <p className="ml-3 text-base font-medium capitalize z-10 ">
                {text}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CountUpSection;
