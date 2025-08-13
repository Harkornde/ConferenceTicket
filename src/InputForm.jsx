export default function InputForm({ detail }) {
  return (
    <>
      <div className="mx-7 mt-6 text-[20px]">
        <label className="block">{detail}</label>

        <input
          type="text"
          placeholder="thing"
          className="border mt-1 h-12 text-2xl rounded-xl px-2 w-6/6 md:w-11/12"
        />
      </div>
    </>
  );
}
