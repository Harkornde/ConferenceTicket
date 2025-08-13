import InputForm from "./InputForm";

export default function Details() {
  return (
    <>
      <div className="md:w-[40em] m-auto">
        <form action="">
          <InputForm detail="Full Name"/>
          <InputForm detail="Email Address"/>
          <InputForm detail="GitHub Username"/>
          <button className="block bg-[hsl(7,86%,67%)] mx-7 mt-6 text-xl h-12 border rounded-xl px-2 w-6/7 md:w-10/12">
            Generate My Ticket
          </button>
        </form>
      </div>
    </>
  );
}
