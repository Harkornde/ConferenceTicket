export default function Logo() {
  return (
    <>
      <img
        className="absolute top-16 right-0 md:w-[450px] w-[250px]"
        src="/images/pattern-squiggly-line-top.svg"
      />
      <img
        className="absolute bottom-0 hidden md:block"
        src="/images/pattern-squiggly-line-bottom-desktop.svg"
      />{" "}
      <img
        className="absolute bottom-0 md:hidden"
        src="/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
      />
      <div>
        <img className="block py-9 m-auto" src="/images/logo-full.svg" />
      </div>
    </>
  );
}