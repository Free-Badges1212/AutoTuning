import React from "react";
import MyRedButton from "./ui/button/red-button";

const News = () => {
  return (
    <div className="max-w-[1280px] mx-auto flex flex-col gap-y-6 md:gap-y-16">
      <p className="w-full text-center font-medium font-montserrat text-[28px] md:text-[40px]">
        Новости
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-6 mb-20">
        {news?.map((c, idx) => (
          <div key={idx} className="flex flex-col gap-y-4">
            <img src={c.img} alt="" className="md:h-[369px] h-[300px]" />
            <div className="h-[145px] space-y-3">
              <p className="text-secondRed font-montserrat font-medium text-[18px] md:text-[20px] w-[80%]">
                {c.title}
              </p>
              <p className="line-clamp-3 pr-3">{c.subtitle}</p>
            </div>
            <MyRedButton title={"Читать дальше"} class1={"mr-auto w-[182px] font-montserrat"}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

const news = [
  {
    id: 1,
    img: "/images/new1.png",
    title: "F30 20d N47 изготовление DOWNPIPE",
    subtitle: "В работе BMW 320d, в кузове F30, 2013 года выпуска.",
  },
  {
    id: 2,
    img: "/images/new2.png",
    title: "G30 20d Stage1",
    subtitle: "В работе BMW 320d, в кузове F30, 2013 года выпуска.",
  },
  {
    id: 3,
    img: "/images/new3.png",
    title: "FSanta Fe 2.2 CRDI Stage 1",
    subtitle:
      "В работе наших корейских дилеров автомобиль Hyundai Santa Fe IV, 2020 года выпуска.",
  },
];
