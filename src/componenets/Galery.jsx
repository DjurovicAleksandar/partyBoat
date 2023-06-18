import { useState } from "react";
import pic1 from "../assets/img/galery/1.jpg";
import pic2 from "../assets/img/galery/2.jpg";
import pic3 from "../assets/img/galery/3.jpg";
import pic4 from "../assets/img/galery/4.jpg";
import pic5 from "../assets/img/galery/5.jpg";
import pic6 from "../assets/img/galery/6.jpg";
import pic7 from "../assets/img/galery/7.jpg";
import pic8 from "../assets/img/galery/8.jpg";
import pic9 from "../assets/img/galery/9.jpg";
import pic11 from "../assets/img/galery/11.jpg";
import pic12 from "../assets/img/galery/12.jpg";
import pic13 from "../assets/img/galery/13.jpg";
import pic14 from "../assets/img/galery/14.jpg";
import pic15 from "../assets/img/galery/15.jpg";
import pic16 from "../assets/img/galery/16.jpg";
import pic17 from "../assets/img/galery/17.jpg";
import pic18 from "../assets/img/galery/18.jpg";
import pic19 from "../assets/img/galery/19.jpg";
import pic20 from "../assets/img/galery/20.jpg";
import pic21 from "../assets/img/galery/21.jpg";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Galery() {
  // To open the lightbox change the value of the "toggler" prop.
  const [open, setOpen] = useState(false);

  const images = [
    [pic1, pic2, pic14],
    [pic4, pic7, pic6],
    [pic11, pic5, pic13],
  ];

  return (
    <div className="w-[90%] mx-auto flex flex-col items-center justify-center ">
      <div>
        <button
          className="btn__glow bg-[#f24603e0] my-10"
          type="button"
          onClick={() => setOpen(true)}
        >
          Open Galery
        </button>

        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            { src: pic1, alt: "Picture 1" },
            { src: pic2, alt: "Picture 2" },
            { src: pic3, alt: "Picture 3" },
            { src: pic4, alt: "Picture 4" },
            { src: pic5, alt: "Picture 5" },
            { src: pic6, alt: "Picture 6" },
            { src: pic7, alt: "Picture 7" },
            { src: pic8, alt: "Picture 8" },
            { src: pic9, alt: "Picture 9" },
            { src: pic11, alt: "Picture 11" },
            { src: pic12, alt: "Picture 12" },
            { src: pic13, alt: "Picture 13" },
            { src: pic14, alt: "Picture 14" },
            { src: pic15, alt: "Picture 15" },
            { src: pic16, alt: "Picture 16" },
            { src: pic17, alt: "Picture 17" },
            { src: pic18, alt: "Picture 18" },
            { src: pic19, alt: "Picture 19" },
            { src: pic20, alt: "Picture 20" },
            { src: pic21, alt: "Picture 21" },
          ]}
        />
      </div>
      <div className="md:grid md:grid-cols-3 gap-4">
        <div className="grid gap-4">
          {images[0].map((img, i) => {
            return (
              <div key={i}>
                <img
                  className="aspect-square w-[320px]  md:w-[16rem] max-w-full rounded-lg opacity-80 hover:opacity-100 ease-in duration-50  shadow-xl"
                  src={img}
                  alt={`imgNumber${i}`}
                  style={{
                    height: screen.width >= 600 && i === 1 ? "260px" : "192px",
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="grid gap-4 my-4 md:my-0">
          {images[1].map((img, i) => {
            return (
              <div key={i}>
                <img
                  className="aspect-square w-[320px]  md:w-[16rem] max-w-full rounded-lg opacity-80 hover:opacity-100 ease-in duration-50 shadow-xl"
                  src={img}
                  alt={`imgNumber${i}`}
                  style={{
                    height: screen.width >= 600 && i === 0 ? "260px" : "192px",
                  }}
                />
              </div>
            );
          })}
        </div>
        <div className="grid gap-4">
          {images[2].map((img, i) => {
            return (
              <div key={i}>
                <img
                  className="aspect-square w-[320px]  md:w-[16rem] max-w-full rounded-lg opacity-80 hover:opacity-100 ease-in duration-50 shadow-xl"
                  src={img}
                  alt={`imgNumber${i}`}
                  style={{
                    height: screen.width >= 600 && i === 2 ? "260px" : "192px",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Galery;
