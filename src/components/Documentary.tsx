import React from "react";
import mobile from "../img/test/Mobile.jpg";
import desktop from "../img/test/Desktop.jpg";

export const Documentary = () => {
  const link = "#";

  return (
    <>
      <div className="box_doc">
        <a className="button_popup_doc" href="#popup1_doc">
          Documantation
        </a>
      </div>

      <div id="popup1_doc" className="overlay_doc">
        <div className="popup_doc">
          <h2 className="text-green-400 inline">Techologies: </h2>
          <h2 className="text-pink-500 inline">
            TypeScript, React, Tailwind, CSS, HTML
          </h2>
          <h2>Responsive Layout: NO</h2>
          <h2>Adaptive Layout: 1440px, 375px</h2>
          <h2 className="text-yellow-700">
            GitHub:
            <a
              href="https://thecapncoder.github.io/gravity/"
              className="text-blue-600"
              rel="noreferrer"
              target="_blank"
            >
              https://thecapncoder.github.io/gravity/
            </a>
          </h2>
          <h2 className="text-yellow-500 inline">Figma:</h2>
          <a
            className="text-purple-600"
            target="_blank"
            rel="noreferrer"
            href="https://www.figma.com/file/HL5OHKgu4Od5UAWqx8CM7P/%5BPublished%5D%5BEN%5D-%C2%ABGravity%C2%BB?node-id=0-1&t=QHe2IcFSbPXw8vJb-0"
          >
            https://www.figma.com/file/HL5OHKgu4Od5UAWqx8CM7P/%5BPublished%5D%5BEN%5D-%C2%ABGravity%C2%BB?node-id=0-1&t=QHe2IcFSbPXw8vJb-0
          </a>
          <a className="close_doc" href={link}>
            &times;
          </a>
          <div className="content_doc">
            <img src={desktop} alt="test 2" />
            <div className="h-6 my-3 bg-purple-700"></div>
            <img src={mobile} alt="test 1" />
          </div>
        </div>
      </div>
    </>
  );
};
