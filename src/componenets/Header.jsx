import Nav from "./Nav";

import bgVideo from "../assets/video/videoBG.mp4";

//

function Header() {
  return (
    <header className="h-screen w-full relative">
      <div className="h-full flex items-start justify-center">
        <div className="w-full  h-screen relative z-20 ">
          <Nav />
          <div className="w-full h-full relative">
            <video
              className="w-full h-full object-cover"
              src={bgVideo}
              alt="party boat video"
              autoPlay
              muted
              loop
            />
          </div>

          <div className="absolute inset-0 py-[7rem] px-4 lg:px-8 lg:py-[8rem] h-full z-20">
            <div>
              <h1 className="title w-[100px] font-black text-5xl sm:text-8xl lg:text-9xl tracking-wider">
                Party on <br /> Dalmatia waves
              </h1>
            </div>
            <div className="absolute bottom-[1rem] md:right-40 flex gap-4 mt-28 ">
              <button
                onClick={() => window.open("tel:+385989004143")}
                className="btn__header btn__header__2"
              >
                Call us
              </button>
              <a href="#contact" className="btn__header btn__header__1">
                Book now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
