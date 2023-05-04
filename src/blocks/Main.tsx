import mainImg from "../img/main.jpg";
import { Button } from "../components/Button";

export const Main = () => {
  return (
    <div className="container pt-[30px] mobile:pt-[97px]">
      <div className="mobile:flex">
        <div className="max-w-[308px] mb-[30px] mobile:order-2 mobile:max-w-none">
          <img src={mainImg} className="" alt="" />
        </div>
        <div className="mobile:order-1 mobile:max-w-[551px] mobile:pt-[153px] mobile:mr-[32px]">
          <h2 className="mb-[16px] mobile:mb-[25px]">
            Simple time tracking. Powerful reporting.
          </h2>
          <h3 className="mb-[24px] mobile:mb-[22px]">
            Turn your team on to productivity with Gravity the time tracker.
          </h3>
          <Button />
        </div>
      </div>
    </div>
  );
};
