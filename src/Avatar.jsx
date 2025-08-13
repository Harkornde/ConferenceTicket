// import { useState } from "react";

export default function Avatar() {
  // const [files, setfiles] = useState();

  return (
    <>
      <div className="md:w-[40em] m-auto">
        <form>
          <label htmlFor="avatar-upload" className="text-xl mx-7 font-medium block">
            Upload Avatar
          </label>

          <label
            htmlFor="avatar-upload"
            className="cursor-pointer block border p-4 mt-[10px] text-center border-dashed rounded-xl text-lg w-5/6 mx-7"
          >
            <img
              src="/images/icon-upload.svg"
              className="m-auto mb-2 w-[40px] p-[5px] border rounded-md border-[hsl(252, 6%, 83%)]"
            />
            Drag and drop or click to upload
          </label>
          <input type="file" id="avatar-upload" className="hidden" />
        </form>
      </div>

      <div className="items-end md:w-[40em] m-auto">
        <img src="/images/icon-info.svg" className="inline-block mr-1 mx-7" />
        <p className=" mt-2 md:text-sm text-xs inline-block">
          Upload your photo (JPG or PNG, max size: 500kb )
        </p>
      </div>
    </>
  );
}
//on active use transform scale 0.5
