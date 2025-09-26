import React from "react";
import Logo from "../Logo";

const Ticketcard = () => {
  return (
    <>
      <div className="px-3">
        <div className="bg-[url(/images/pattern-ticket.svg)] p-5 md:p-5 bg-no-repeat md:w-[600px] m-auto bg-contain bg-center">
          <div className="flex">
            <img src="images/logo-mark.svg" className="w-[40px]" />
            <div className="mx-2 leading-[normal]">
              <h1 className="text-2xl font-bold">Coding Conf</h1>
              <p className="text-sm">Jan 31, 2025 / Austin, TX</p>
            </div>
          </div>

          <div className="mt-8 flex items-center">
            <img
              src="images/image-avatar.jpg"
              className="w-[50px] h-[50px] rounded-lg"
            />
            <div className="mx-2">
              <h1 className="text-2xl">Jonatan Kristof</h1>
              <p>
                <img
                  className="inline w-4 mb-[3px]"
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
