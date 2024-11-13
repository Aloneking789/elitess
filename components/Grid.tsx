"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { TMembers } from "@/data";
import { PinContainer } from "./ui/Pin";
import { TechMembers } from "@/data";
import { socialMediaMembers } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <div className="py-20">
        <h1 className="heading">
          Core <span className="text-purple">Team Members</span>
        </h1>
        <div className="flex flex-wrap gap-8 justify-center p-4 mt-10">
          {TMembers.map((item) => (
            <div
              className="flex-none w-[20rem] h-[32.5rem] flex items-center justify-center"
              key={item.id}
            >
              <PinContainer title="Elite" href="https://twitter.com">
                <div className="relative flex items-center justify-center overflow-hidden h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[38vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 object-cover"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex lg:text-xl md:text-xs text-sm text-purple hover:underline"
                    >
                      Linkedin
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20">
        <h1 className="heading">
          Tech <span className="text-purple">Team Members</span>
        </h1>
        <div className="flex flex-wrap gap-8 justify-center p-4 mt-10">
          {TechMembers.map((item) => (
            <div
              className="flex-none w-[20rem] h-[32.5rem] flex items-center justify-center"
              key={item.id}
            >
              <PinContainer title="Elite" href="https://twitter.com">
                <div className="relative flex items-center justify-center overflow-hidden h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[38vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute object-cover"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex lg:text-xl md:text-xs text-sm text-purple hover:underline"
                    >
                      Linkedin
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20">
        <h1 className="heading">
          Social Media <span className="text-purple">Team</span>
        </h1>
        <div className="flex flex-wrap gap-8 justify-center p-4 mt-10">
          {socialMediaMembers.map((item) => (
            <div
              className="flex-none w-[20rem] h-[32.5rem] flex items-center justify-center"
              key={item.id}
            >
              <PinContainer title="Elite" href="https://twitter.com">
                <div className="relative flex items-center justify-center overflow-hidden h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[38vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 object-cover"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex lg:text-xl md:text-xs text-sm text-purple hover:underline"
                    >
                      Linkedin
                    </a>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
