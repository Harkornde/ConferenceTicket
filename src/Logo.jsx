export default function Logo() {
  return (
    <>
      <img
        className="absolute top-16 right-0 md:w-[350px] w-[250px]"
        src="/images/pattern-squiggly-line-top.svg"
      />
      <img
        className="absolute bottom-0 hidden lg:block w-[600px]"
        src="/images/pattern-squiggly-line-bottom-desktop.svg"
      />{" "}
      <img
        className="absolute bottom-0 lg:hidden w-[330px]"
        src="/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
      />
      <div>
        <img className="block py-9 m-auto" src="/images/logo-full.svg" />
      </div>
    </>
  );
}