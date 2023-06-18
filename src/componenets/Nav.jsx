import { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import fratija from "../assets/img/fratija.png";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-[#f24603e0]">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-black tracking-wider nav__btn "
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-black tracking-wider nav__btn"
      >
        <a href="#about" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-black tracking-wider nav__btn"
      >
        <a href="#galery" className="flex items-center">
          Galery
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-black tracking-wider nav__btn"
      >
        <a href="#contact" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="backdrop-blur-[5px]  fixed top-0  z-30 mx-auto w-full py-2 px-4 lg:px-8 lg:py-4 text-dark font-bold  border-0">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-black tracking-wider"
        >
          <img className="w-10" src={fratija} />
          <span className="font-black tracking-wide text-base sm:text-lg lg:text-2xl text__container">
            Party Boat | DUBROVNIK
          </span>
        </Typography>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="#f24603e0"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="#f24603e0"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="mb-2 ">
            <a href="#contact" className="btn__glow mx-auto">
              BOOK NOW
            </a>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
}
