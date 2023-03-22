import { ChartBarIcon } from "@heroicons/react/24/solid";
import {Summary,People,Technologies,Financials} from "@/companydata";

export const caiData ={
  infoHead:[
    {
      name:"Summary",
      path:"",
      element: <Summary/>
    },{
      name:"Financials",
      path:'financials',
      element: <Financials/>
    },{
      name:"People",
      path:'people',
      element: <People/>
    },{
      name:"Technology",
      path:'technology',
      element: <Technologies/>
    }],
  companies:[
      {
          color: "blue",
          icon: ChartBarIcon,
          title: "Gnani Ai",
          value: "55 Cr",
          path : "/gnaniai",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          }
      },
      {
          color: "green",
          icon: ChartBarIcon,
          title: "Yellow Ai",
          value: "55 Cr",
          path : "/yellowai",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      }, 
      {
          color: "gray",
          icon: ChartBarIcon,
          title: "Senseforth",
          value: "55 Cr",
          path : "/senseforth",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
      {
          color: "gray",
          icon: ChartBarIcon,
          title: "ORAI Robotics",
          value: "55 Cr",
          path : "/orairobotics",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
      {
          color: "gray",
          icon: ChartBarIcon,
          title: "SAARTHI AI",
          value: "55 Cr",
          path : "/saarthiai",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
      {
          color: "gray",
          icon: ChartBarIcon,
          title: "SKIT",
          value: "55 Cr",
          path : "/skit",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
      {
          color: "gray",
          icon: ChartBarIcon,
          title: "JIO Haptik",
          value: "55 Cr",
          path : "/jiohaptik",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
      {
          color: "gray",
          icon: ChartBarIcon,
          title: "UBONA",
          value: "55 Cr",
          path : "/ubona",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
      {
          color: "gray",
          icon: ChartBarIcon,
          title: "CoRover",
          value: "55 Cr",
          path : "/corover",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
  ]
}
