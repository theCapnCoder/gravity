import React from "react";
import { Dots } from "../img/dots";

export const MenuButton = () => {
  return (
    <div className="mobile:hidden">
      <button className="py-[9px] px-[22px] button_shadow border border-black rounded-lg text_button">
        <Dots className="mr-[12px]"/>
        <span className="">Menu</span>
      </button>
    </div>
  );
};
