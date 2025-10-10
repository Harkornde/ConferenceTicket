import React from "react";
import Logo from "../Logo";

const Ticketcard = () => {
  return (
    <>
      <div className="px-3 mt-18 md:mt-24">
        <div className="bg-[url(/images/pattern-ticket.svg)] p-5 md:px-5 bg-no-repeat md:w-[600px] md:h-[260px] m-auto bg-contain bg-center">
          <div className="flex md:mx-6">
            <img src="images/logo-mark.svg" className="w-[38px]" />
            <div className="mx-2 leading-[normal]">
              <h1 className="text-2xl font-bold md:text-4xl">Coding Conf</h1>
              <p className="text-sm md:text-xl">Jan 31, 2025 / Austin, TX</p>
            </div>
          </div>

          <div className="mt-8 flex items-center md:mx-6 md:mt-18">
            <img
              src="images/image-avatar.jpg"
              className="w-[50px] h-[50px] md:w-[75px] md:h-[75px] rounded-lg"
            />
            <div className="mx-2">
              <h1 className="text-2xl font-bold">Jonatan Kristof</h1>
              <p className="text-lg">
                <img
                  className="inline w-4 mb-[3px] md:w-5"
                  src="images/icon-github.svg"
                />{" "}
                @jonatankristof0101
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticketcard;
