import HeroSlider, { Slide, SideNav } from "hero-slider";
import dubrovnik from "../../src/assets/img/dubrovnik.jpg";
import drinks from "../../src/assets/img/drinks.jpg";
import sunset from "../../src/assets/img/sunset.jpg";
import food from "../../src/assets/img/food.jpg";
import lopud from "../../src/assets/img/lopud.jpg";

function Header() {
  const headerImg = [
    [sunset, "Sail the Adriatic sea"],
    [dubrovnik, "Uncover the Dubrovnik wonders"],
    [lopud, "Escape to an island paradise"],
    [food, "Savor local cuisine delicacies"],
    [drinks, "Party on the Dalmatia waves"],
  ];

  return (
    <header className="h-screen w-full relative">
      <div className="h-full flex items-start justify-center">
        <div className="w-full  h-screen relative z-20 ">
          <div className="w-full h-full relative z-50">
            <HeroSlider
              height="100vh"
              autoplay={{
                autoplayDuration: "3000",
              }}
              controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 150,
              }}
              settings={{
                shouldDisplayButtons: true,
                height: "100vh",
              }}
              slidingAnimation="top_to_bottom"
              orientation="horizontal"
              onBeforeChange={(previousSlide, nextSlide) =>
                console.log("onBeforeChange", previousSlide, nextSlide)
              }
              onChange={(nextSlide) => console.log("onChange", nextSlide)}
              onAfterChange={(nextSlide) =>
                console.log("onAfterChange", nextSlide)
              }
              style={{
                backgroundColor: "#000",
              }}
            >
              {headerImg.map(([img, title], i) => {
                return (
                  <Slide
                    shouldRenderMask
                    key={title + i}
                    background={{
                      backgroundImageSrc: img,
                    }}
                  >
                    <div className="mt-28">
                      <h1
                        className={`title w-[100px] lg:w-[500px] font-black text-[3rem] sm:text-5xl lg:text-9xl tracking-widest ml-8 lg:ml-28`}
                      >
                        {title}
                      </h1>

                      <div className="absolute bottom-[1rem] md:right-40 flex gap-4 mt-28 z-50">
                        <button
                          onClick={() => window.open("tel:+385989004143")}
                          className="btn__header btn__header__2"
                        >
                          Call us
                        </button>
                        <a
                          href="#contact"
                          className="btn__header btn__header__1"
                        >
                          Book now
                        </a>
                      </div>
                    </div>
                  </Slide>
                );
              })}

              <SideNav
                position={{
                  top: 100,
                  right: 0,
                }}
              />
            </HeroSlider>
          </div>

          {/* <div className="absolute inset-0 py-[7rem] px-4 lg:px-8 lg:py-[8rem] h-full z-20">
            <div>
              <h1
                className={`title w-[100px] font-black text-[4rem] sm:text-8xl lg:text-9xl  tracking-wide`}
              >
                Party on <br /> Dalmatia waves
              </h1>
            </div>
            <div className="absolute bottom-[1rem] md:right-40 flex gap-4 mt-28 z-50">
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
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
