import React from "react";
import Logo from "../Logo";
import Ticketcard from "./Ticketcard";

const Ticket = () => {
  return (
    <>
      <div className="bg-layered bg-cover bg-center">
        <Logo />

        <h1 className="text-3xl lg:text-6xl/16 lg:tracking-wider md:mx-8 px-10 md:text-5xl text-center">
          <b>
            Congrats,
            <span className="bg-linear-to-r from-[hsl(7,86%,67%)] from-30% to-[hsl(252,6%,83%)] text-transparent bg-clip-text">
              Jonatan Kristof!
            </span>
            <br className="hidden md:block" /> Your ticket is ready.
          </b>
        </h1>

        <p className="text-center px-5 my-7 md:text-2xl text-xl font-normal lg:tracking-wider">
          We've emailed your ticket to <br className="hidden md:block" />
          <span className="bg-linear-to-r from-[hsl(7,86%,67%)] from-30% to-[hsl(252,6%,83%)] text-transparent bg-clip-text">
            Jonatan@gmail.com
          </span>{" "}
          and will send updates in<br className="hidden md:block"/> the run up to the event.
        </p>
        <Ticketcard />
      </div>
    </>
  );
};

export default Ticket;
