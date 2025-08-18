import { useState } from "react";

export default function InputForm({ detail, placeholder, type }) {
  const [inputValue, setInputValue] = useState("");

  function getInputValue(e) {
    const val = e.target.value;
    setInputValue(val);
    console.log(val);
  }

  return (
    <>
      <div className="mx-7 mt-6 text-[20px]">
        <label className="block">{detail}</label>

        <input
          onChange={(e) => getInputValue(e)}
          type={type}
          value={inputValue}
          placeholder={placeholder}
          className="border mt-1 h-12 text-xl rounded-xl px-2 w-6/6 md:w-11/12"
        />
      </div>
    </>
  );
}
