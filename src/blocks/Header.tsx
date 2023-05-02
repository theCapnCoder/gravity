import React from "react";
import { Logo } from "../img/logo";
import { MenuButton } from "../components/MenuButton";
import { Menu } from "../components/Menu";

export const Header = () => {
  return (
    <header>
      <div className="container pt-[60px]">
        <div className="flex justify-between items-center">
          <a href="#">
            <Logo className="mobile:w-[138px] mobile:h-[43px]" />
          </a>
          <Menu />
          <MenuButton />
        </div>
      </div>
    </header>
  );
};
