import { useEffect, useState } from "react";
import Header from "./componenets/Header";
import About from "./componenets/About";
import Galery from "./componenets/Galery";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import { InView } from "react-intersection-observer";
import BarLoader from "react-spinners/BarLoader";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <Header />
          <div className="galery">
            <div className=" w-full h-full backdrop-blur-[2px] bg-white/30">
              <InView triggerOnce="true">
                {({ inView, ref }) => {
                  return (
                    <div
                      className={`fade-in-bottom ${inView && "is-visible"}`}
                      ref={ref}
                    >
                      <About visible={InView} />
                    </div>
                  );
                }}
              </InView>
              <InView triggerOnce="true">
                {({ inView, ref }) => {
                  return (
                    <div
                      className={`fade-in-bottom ${inView && "is-visible"}`}
                      ref={ref}
                    >
                      <Galery />
                    </div>
                  );
                }}
              </InView>
              <InView triggerOnce="true">
                {({ inView, ref }) => {
                  return (
                    <div
                      className={`fade-in-bottom ${inView && "is-visible"}`}
                      ref={ref}
                    >
                      <Contact />
                      <Footer />
                    </div>
                  );
                }}
              </InView>
            </div>
          </div>{" "}
        </>
      ) : (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-blue-400/10">
          <h1 className="title text-4xl lg:text-8xl">Party boat | DUBROVNIK</h1>
          <h2 className="font-bold text-2xl lg:text-4xl title">WELCOME</h2>
          <BarLoader color="#36d7b7" size={200} />
        </div>
      )}
    </>
  );
}

export default App;
