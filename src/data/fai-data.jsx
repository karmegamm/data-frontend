import { ChartBarIcon } from "@heroicons/react/24/solid";
import {Summary,People,Technologies,Financials} from "@/companydata";

export const faiData ={
  infoHead:[
    {
      name:"Summary",
      path:'',
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
          title: "Cisco",
          value: "55 Cr",
          path : "/cisco",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
      {
          color: "green",
          icon: ChartBarIcon,
          title: "Wipro",
          value: "55 Cr",
          path : "/vipro",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
      {
          color: "gray",
          icon: ChartBarIcon,
          title: "Cloud SCS",
          value: "55 Cr",
          path : "/cloudcs",
          footer: {
            color: "text-green-500",
            value: "+55%",
            label: "than last 5 Year",
          },
      },
  ]
}
