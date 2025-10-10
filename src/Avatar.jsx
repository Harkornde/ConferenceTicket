import { useState } from "react";

export default function Avatar({ image, setImage, fileName, setFileName }) {
  const [error, setError] = useState();

  function checkUpload({ target: { files } }) {
    const imageDetails = files[0];
    imageDetails && setFileName(imageDetails.name);

    if (imageDetails) {
      setImage(URL.createObjectURL(imageDetails));
      setError();
    }

    // Checking for size error
    if (imageDetails.size > 500 * 1024) {
      setError("File too large! Please upload an image under 500 KB.");
      setImage(null);
      setFileName("No selected file name");
      return;
    }

    console.log(URL.createObjectURL(imageDetails));
    console.log(files[0].name);
  }

  return (
    <>
      <div className="md:w-[40em] m-auto">
        <form>
          <div
            htmlFor="avatar-upload"
            className="text-xl mx-7 font-medium block"
          >
            Upload Avatar
          </div>

          <label
            htmlFor="avatar-upload"
            className="cursor-pointer block border p-4 mt-[10px] text-center border-dashed rounded-xl text-lg w-6/7 md:w-5/6 mx-7"
          >
            {image ? (
              <img src={image} alt={fileName} />
            ) : (
              <img
                src="/images/icon-upload.svg"
                className="m-auto mb-2 mt-[5px] p-[5px] border rounded-md border-[hsl(252, 6%, 83%)]"
              />
            )}
            <span className="mt-[8px] inline-block">
              {image ? "" : "Drag and drop or click to upload"}
            </span>
          </label>
          <input
            type="file"
            id="avatar-upload"
            className="hidden"
            accept="image/*"
            onChange={(e) => checkUpload(e)}
          />
        </form>
      </div>

      <div className="items-end md:w-[40em] m-auto">
        <img src="/images/icon-info.svg" className="inline-block mr-1 mx-7" />
        {error ? (
          <p className=" mt-2 md:text-sm text-xs inline-block">{error}</p>
        ) : (
          <p className=" mt-2 md:text-sm text-xs inline-block">
            Upload your photo (JPG or PNG, max size: 500kb )
          </p>
        )}
      </div>
    </>
  );
}
//on active use transform scale 0.5
