import CountUp from "react-countup";

function CountUpSection() {
  const countUp = [
    { number: 2000, sign: "+", text: "Hours" },
    { number: 500, sign: "+", text: "Excursions" },
    { number: 800, sign: "+", text: "Clients" },
    { number: 99, sign: "%", text: "Happy customers" },
  ];

  return (
    <>
      {countUp.map(({ number, sign, text }, i) => {
        return (
          <div key={i} className="px-6 py-10">
            <div className="flex items-center">
              <h3 className="relative ml-2 inline-block text-3xl font-bold leading-none ">
                <span className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-blue-200"></span>
                <span className="relative">
                  <CountUp start={0} end={number} duration={2} />
                  {sign}
                </span>
              </h3>
              <span className="ml-3 text-base font-medium capitalize z-10">
                {text}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CountUpSection;
