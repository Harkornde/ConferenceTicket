import Avatar from "./Avatar";
import Logo from "./Logo";

function App() {
  return (
    <>
      <div className="bg-layered bg-cover bg-center h-screen">
        {/* Logo section */}
        <Logo />

        {/* Body(before avatar) part */}
        <h1 className="text-3xl md:mx-8 px-3 md:text-5xl text-center">
          <b>
            Your Journey to Coding Conf
            <br className="hidden md:block" /> 2025 Starts Here!
          </b>
        </h1>
        <p className="text-center px-5 my-5 text-xl font-normal">
          Secure your spot at next year's biggest coding conference
        </p>

        {/* Avatar menu(for uploading pictures) */}
        <Avatar />
      </div>
    </>
  );
}

export default App;
// style={{ display: "none" }}
