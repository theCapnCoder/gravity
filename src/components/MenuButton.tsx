import { Dots } from "../img/dots";

export const MenuButton = () => {
  return (
    <div className="mobile:hidden">
      <button className="py-[9px] px-[22px] flex items-center button_shadow border border-black rounded-lg text_button">
        <Dots className="mr-[12px]" />
        <span className="text_button_sm">Menu</span>
      </button>
    </div>
  );
};
