import { useEffect, useState } from "react";
import Header from "./componenets/Header";
import About from "./componenets/About";
import Galery from "./componenets/Galery";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import { InView } from "react-intersection-observer";
import BarLoader from "react-spinners/BarLoader";
import Nav from "./componenets/Nav";
import partyBoat2 from "../src/assets/video/partyBoat2.mp4";

import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <Nav />
          <Header />
          {/*Video*/}
          <div className="flex flex-col gap-2">
            <video
              className="w-[310px] sm:w-[600px] lg:w-[800px] h-auto object-cover mx-auto mt-28"
              src={partyBoat2}
              alt="party boat video"
              autoPlay
              muted
              loop
            />
            <div>
              <ModalVideo
                channel="youtube" // Set the video source (e.g., 'youtube', 'vimeo', 'dailymotion')
                isOpen={isOpen}
                videoId="YFxW_K_6xxk" // Replace with the ID or URL of your video
                onClose={() => setIsOpen(false)}
              />
              <button className="btn__glow mx-auto mt-2" onClick={openModal}>
                Full screen
              </button>
            </div>
          </div>
          <div className="galery">
            <div className=" w-full h-full backdrop-blur-[1px] bg-white/40">
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
        <div className="galery w-full h-screen flex flex-col items-center justify-center gap-4 bg-blue-400/10">
          <h1 className="text-4xl lg:text-8xl text__container">
            Party boat | DUBROVNIK
          </h1>
          <h2 className="font-bold text-2xl lg:text-4xl title">WELCOME</h2>
          <BarLoader color="#36d7b7" size={200} />
        </div>
      )}
    </>
  );
}

export default App;
