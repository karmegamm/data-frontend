import { ChartBarIcon } from "@heroicons/react/24/solid";
import {Summary,People,Technologies,Financials} from "@/companydata";

export const cvData ={
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
          title: "Microsoft",
          value: "55 Cr",
          path : "/microsoft",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
      {
          color: "green",
          icon: ChartBarIcon,
          title: "Borsch",
          value: "55 Cr",
          path : "/borsh",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
      {
          color: "gray",
          icon: ChartBarIcon,
          title: "Apple",
          value: "55 Cr",
          path : "/apple",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
  ]
}
