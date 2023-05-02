import { FC } from "react";

type LinkProps = {
  text: string;
  link: string;
};

const Link: FC<LinkProps> = ({ text, link }) => {
  return (
    <li>
      <a href={link}>
        <p className="hover:text-[#71A89E]">{text}</p>
      </a>
    </li>
  );
};

export const Menu = () => {
  const menuItems = [
    { id: 0, text: "Features", link: "#" },
    { id: 1, text: "Pricing", link: "#" },
    { id: 2, text: "Why Gravity", link: "#" },
    { id: 3, text: "Sign In", link: "#" },
  ];

  return (
    <div className="hidden mobile:block">
      <nav>
        <ul className="flex justify-between w-[413px]">
          {menuItems.map((link) => {
            return <Link key={link.id} {...link} />;
          })}
        </ul>
      </nav>
    </div>
  );
};
