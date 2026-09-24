import heroDesktop from "../../assets/img/bg-intro-desktop.svg";
import heroMobile from "../../assets/img/bg-intro-mobile.svg";
import mockups from "../../assets/img/image-mockups.png";

import { MainButton } from "../common/MainButton";

export const Hero = () => {
  return (
    <section className="grid bg-gray-50 lg:grid-cols-2">
      <div className="mx-auto flex w-9/10 flex-col gap-5 text-center lg:mr-0 lg:max-w-150 lg:justify-center lg:pr-10 lg:text-start">
        <h1 className="text-4xl text-blue-950 xl:text-5xl">
          Next generation digital banking
        </h1>
        <p className="leading-snug tracking-tight">
          Take your financial life online. Your Digitalbank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <MainButton className="self-center lg:self-start" />
      </div>
      <div className="relative row-start-1 lg:col-start-2">
        <picture>
          <source media="(min-width:768px)" srcSet={heroDesktop} />
          <img className="w-full" src={heroMobile} alt="" />
        </picture>
        <img
          className="absolute bottom-0 w-full lg:-bottom-20"
          src={mockups}
          alt=""
        />
      </div>
    </section>
  );
};
