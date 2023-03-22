import React, { useEffect, useState } from "react";
import {
  Typography,
  Avatar,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { MessageCard, StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
} from "@/data";


export function Home() {
  const arr = ["Team" , "Sales", "Business", "Revenue"]
  const [state,setState]=useState(0)
  useEffect(()=>{
    let i=0
    let timeId=setInterval(()=>{
      setState(i%arr.length)
      i++;
    },2000)
    return ()=>clearInterval(timeId);
  },[])
  console.log(state);
  return (
    <div className="mt-5 gap-8 p-3 rounded-lg flex flex-wrap flex-col md:grid md:grid-cols-2">
      <div>
      <Typography className="md:block text-3xl md:text-5xl font-bold text-gray-900 py-8">
        Search Less🔎
      </Typography>
      <Typography className="md:block  text-3xl md:text-5xl font-bold text-gray-900 ml-16">
        👁️‍🗨️Close More...
      </Typography>
      <Typography variant="h4" className="mt-14">
        Grow your <span className="animate-pulse delay-100 text-blue-400">{arr[state]}</span> with all-in-one prospecting 
      </Typography>
      <Typography variant="h4">
        solutions powered by the leader in private-company data.
      </Typography>
      </div>
      <Avatar src="/img/dashboard.png" alt="avatar" className="w-full sm:w-auto md:h-96 h-full object-fill flex"/>
    </div>
  );
}

export default Home;
