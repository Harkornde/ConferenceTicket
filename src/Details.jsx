import InputForm from "./InputForm";

export default function Details({
  fullName,
  setFullName,
  email,
  setEmail,
  github,
  setGithub,
}) {
  function getSubmitedData(e) {
    e.preventDefault();
    console.log(fullName, email, github);
  }

  return (
    <>
      <div className="md:w-[40em] m-auto">
        <form action="">
          {/* Form input */}
          <InputForm
            detail="Full Name"
            placeholder="Full Name"
            type="text"
            setInputValue={setFullName}
            inputValue={fullName}
          />
          <InputForm
            detail="Email Address"
            placeholder="example@gmail.com"
            type="email"
            setInputValue={setEmail}
            inputValue={email}
          />
          <InputForm
            detail="GitHub Username"
            placeholder="@yourusername"
            type="text"
            setInputValue={setGithub}
            inputValue={github}
          />

          {/* ticket button */}
          <button
            onClick={getSubmitedData}
            className="relative z-1 cursor-pointer block bg-[hsl(7,86%,67%)] mx-7 my-6 border text-xl h-12 rounded-xl px-2 w-6/7 md:w-10/12"
          >
            Generate My Ticket
          </button>
        </form>
      </div>
    </>
  );
}
