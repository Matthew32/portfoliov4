import React from "react";

export default function gameIframe() {
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full md:w-1/2 mx-auto md:text-left lg:p-20 pb-40 aspect-w-16 aspect-h-9 ">
        <iframe src="/battle" width="960" height="1600" allowFullScreen></iframe>
      </div></div>
  );
}