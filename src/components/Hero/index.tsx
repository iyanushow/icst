import React from "react";
import Button from "../atoms/Button";

function HeroSection() {
  return (
    <section className="w-full flex shadow-main mb-[25px]">
      <div className="basis-1/2">
        <img src="images/hero.jpeg" alt="hero" className="w-full h-[382px]" />
      </div>
      <div className="basis-1/2">
        <div className="flex flex-col pl-[90px] pt-[60px] w-[80%] xl:w-[70%] h-full gap-4">
          <h2 className="text-[34px] leading-10 font-bold text-primary text-shadow">
            Accelerate your quest, learn anywhere, anytime
          </h2>
          <p className="text-lg leading-[21px] font-normal">
            Acquire new knowledge and skills, train for certification diplomas
            and degrees from world-class instituitions at your own pace and
            space.
          </p>
          <div className="flex gap-[11px]">
            <Button variant="outline" className="border-black text-black">
              Log In
            </Button>
            <Button className="bg-teal">Sign up</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
