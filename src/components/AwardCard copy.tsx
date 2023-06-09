import { motion } from "framer-motion";
import { ReactNode } from "react";
import FlatShadowCard from "./FlatShadowCard";

export interface IAwardCard {
  title: string;
  placement: string;
  date: string;
  icon: ReactNode;
}

const AwardCard: React.FC<IAwardCard> = ({ title, placement, date, icon }) => {
  return (
    <>
      <FlatShadowCard
        interactivity={{
          flatOnMouseDown: true,
          flatOnMouseUp: false,
          flatOnMouseEnter: false,
          flatOnMouseLeave: true,
        }}
        className="hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:-translate-y-2 hover:scale-105 hover:cursor-pointer"
      >
        <div className="flex flex-col min-w-[200px] w-[330px] p-8 gap-y-2 group">
          {/* <div className="flex flex-col min-w-[200px] w-96 p-8 gap-y-4 border-2 border-yellow-500 rounded-md group hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:shadow-lg hover:shadow-slate-400 hover:-translate-y-2 hover:scale-110 hover:border-0"> */}
          {/* <div className="flex relative w-[105px] h-[70px]">{icon}</div> */}
          <div className="flex flex-col gap-y-2 items-start ">
            <p className="text-yellow-500 font-bold group-hover:text-white">
              {placement}
            </p>
            <p className="text-yellow-500 font-semibold text-sm text-start group-hover:text-white">
              {title}
            </p>
            <p className="text-yellow-500 font-light text-sm group-hover:text-white">
              {date}
            </p>
          </div>
        </div>
      </FlatShadowCard>
    </>
  );
};

export default AwardCard;
