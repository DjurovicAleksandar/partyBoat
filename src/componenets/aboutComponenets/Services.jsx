import party from "../../assets/img/services/party.jpg";
import audio from "../../assets/img/services/audio.jpg";
import crew from "../../assets/img/services/crew.jpg";
import food from "../../assets/img/services/food.jpg";
import route from "../../assets/img/services/route.jpg";
import scene from "../../assets/img/services/scene.jpg";

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
      party,
    ],
    [
      "Onboard entertainment",
      "A high-quality sound system to enhance the party experience.",
      audio,
    ],
    [
      "Food & drinks",
      "Catering and customizable menus for private events, specialty cocktails, extensive wine and beer selection.",
      food,
    ],
    [
      "Scenic routes",
      "We can take guests on scenic routes, including hidden coves and secluded beaches.",
      scene,
    ],
    [
      "Transportation",
      "We can provide transportation services for guests, including pickup and drop-off at a designated location.",
      route,
    ],
  ];

  return (
    <>
      {services.map(([title, text, pic], i) => {
        return (
          <div
            key={i}
            className="group flex flex-col items-center justify-center gap-4 shadow-xl relative overflow-hidden rounded-lg"
          >
            <img
              className="w-full rounded-lg group-hover:scale-125 ease-linear duration-300"
              src={pic}
              alt={title}
            />
            <div className="absolute inset-0 w-full h-full bg-black/30 rounded-lg group-hover:backdrop-blur-[2px]">
              <h2 className="text-2xl lg:text-3xl sfont-black tracking-wide mt-10 px-6">
                {title}
              </h2>
              <p className="opacity-0 text-xs sm:text-base w-[200px] mx-auto mt-3 lg:mt-[12rem] group-hover:opacity-100 ease-linear duration-300">
                {text}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Services;
