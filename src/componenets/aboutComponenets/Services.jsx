import audio from "../../assets/img/services/audio.png";
import catering from "../../assets/img/services/catering.png";
import crew from "../../assets/img/services/crew.png";
import custom from "../../assets/img/services/custom.png";
import tour from "../../assets/img/services/tour.png";
import transport from "../../assets/img/services/transport.png";

function Services() {
  const services = [
    [
      "Professional crew",
      "A trained and experienced crew to ensure the safety and enjoyment of your party.",
      crew,
    ],
    [
      "Special occasions",
      "The boat can be customized for special occasions such as weddings, bachelor/bachelorette parties, and birthdays.",
      custom,
    ],
    [
      "Onboard entertainment",
      "A high-quality sound system to enhance the party experience.",
      audio,
    ],
    [
      "Food & drinks",
      "Catering and customizable menus for private events, specialty cocktails, extensive wine and beer selection.",
      catering,
    ],
    [
      "Scenic routes",
      "We can take guests on scenic routes, including hidden coves and secluded beaches.",
      tour,
    ],
    [
      "Transportation",
      "We can provide transportation services for guests, including pickup and drop-off at a designated location.",
      transport,
    ],
  ];

  return (
    <>
      {services.map(([title, text, pic], i) => {
        return (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-4  bg-blue-400/30 hover:bg-blue-400 shadow-xl rounded-full py-16 px-10"
          >
            <h3 className="text-xl sm:text-3xl font-semibold">{title}</h3>
            <img width="50px" src={pic} />
            <span className="text-sm font-light">{text}</span>
          </div>
        );
      })}
    </>
  );
}

export default Services;
