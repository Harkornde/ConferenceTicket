// import { useState } from "react";

export default function InputForm({
  detail,
  placeholder,
  type,
  setInputValue,
  inputValue,
  error,
}) {
  function getInputValue(e) {
    const val = e.target.value;

    setInputValue(() => {
      return val;
    });
  }

  return (
    <>
      <div className="mx-7 mt-6 text-[20px]">
        <label htmlFor={detail} className="block">
          {detail}
        </label>

        <input
          id={detail}
          onChange={(e) => getInputValue(e)}
          type={type}
          value={inputValue}
          placeholder={placeholder}
          className={`relative z-1 border mt-1 h-12 text-xl rounded-xl px-2 w-full md:w-11/12 ${
            error
              ? "border-[hsl(7,86%,67%)]"
              : "border-gray-300 focus:border-[hsl(245, 19%, 35%)]"
          } focus:outline-none focus:ring-2 focus:ring-[hsl(245,15%,58%)] transition`}
        />
        {error ? (
          <p className="text-[hsl(7,86%,67%)] text-base">{error}</p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
