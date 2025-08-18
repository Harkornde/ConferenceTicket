import InputForm from "./InputForm";

export default function Details() {
  return (
    <>
      <div className="md:w-[40em] m-auto">
        <form action="">
          {/* Form input */}
          <InputForm detail="Full Name" placeholder="Full Name" type="text" />
          <InputForm
            detail="Email Address"
            placeholder="example@gmail.com"
            type="email"
          />
          <InputForm
            detail="GitHub Username"
            placeholder="@yourusername"
            type="text"
          />

          {/* tick */}
          <button
            onClick={(e) => {
              e.preventDefault;
            }}
            className="cursor-pointer block bg-[hsl(7,86%,67%)] mx-7 mt-6 border text-xl h-12 rounded-xl px-2 w-6/7 md:w-10/12"
          >
            Generate My Ticket
          </button>
        </form>
      </div>
    </>
  );
}
