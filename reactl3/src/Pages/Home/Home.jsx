import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import GamesRank from "../../components/GamesRank";
import Testimonials from "../../components/Testimonials";
import PlanCard from "../../components/PlanCard";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["THE JOURNEY", "THE VISION", "THE SOCIETY"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center  items-center mx-auto lg:px-6 ">
        <h1 className="text-3xl lg:mr-auto  font-palanquin font-bold mt-6 text-primary  ">
          <span>WELCOME TO</span>
          <span>{texts[textIndex]}</span>
        </h1>
        <span className=" text-2xl lg:text-4xl lg:mr-auto font-bold text-one">
          YOUR GAMING JOURNEY STARTS HERE.
        </span>
      </div>
      <div className="w-full px-6 lg:w-[70%]">
        <Carousel />
      </div>

      <GamesRank />
      <PlanCard />
      <Testimonials />
    </div>
  );
};

export default Home;
