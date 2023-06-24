import contactBg from "../assets/img/contact/contactBg.png";
import ContactOptions from "./contactComponents/ContactOptions";

function Contact() {
  return (
    <div id="contact" className="my-10">
      <section className="py-6 text-gray-50">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="w-full relative">
            <div className="aspect-square flex flex-col items-center justify-center mr-4 p-4 absolute inset-0 w-full h-full z-50 font-bold">
              <h2 className="text-xl md:text-4xl font-bold text-[#f24603e0] bg-black/70 py-2 px-4 rounded-md">
                Get in touch
              </h2>
              <ContactOptions />
            </div>
            <div className="relative">
              <div className="absolute inset-0 backdrop-blur-sm hidden lg:block bg-[#f24603e0]/60 w-[20rem]"></div>
              <img
                src={contactBg}
                alt="phone"
                className="lg:-translate-y-[5rem] lg:-translate-x-[18rem] z-0 translate-x-2 -translate-y-[13rem]"
              />
            </div>
          </div>
          <form
            action="https://formsubmit.co/t.bogdan@live.com"
            method="POST"
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <h2 className="pt-2 pb-4 text-[#f24603e0]  bg-black/70 py-1 px-2 rounded-md text-xl text-center font-bold">
              Fill in the form to start a conversation
            </h2>
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                name="Full name"
                placeholder="Enter your name"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-800 px-4 py-2"
                required
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                name="Email"
                placeholder="Enter your email address"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-800 px-4 py-2"
                required
              />
            </label>
            <label className="block">
              <span className="mb-1">Phone number (optional)</span>
              <input
                type="number"
                name="Phone number"
                placeholder="Enter your phone number"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-800 px-4 py-2"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                name="Message"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400 dark:bg-gray-800 px-4 py-2 resize-none h-[10rem]"
                data-gramm="false"
                wt-ignore-input="true"
                placeholder="Enter your message..."
              ></textarea>
            </label>
            <input
              type="submit"
              className="self-center btn__glow cursor-pointer"
              value="Book now"
            />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
