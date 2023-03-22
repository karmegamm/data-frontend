import {ChartBarIcon} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: ChartBarIcon,
    title: "Conversational Ai",
    value: "55 Cr",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last 5 Year",
    },
  },
  {
    color: "pink",
    icon: ChartBarIcon,
    title: "Yellow Ai",
    value: "35 Cr",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last Year",
    },
  },
  {
    color: "green",
    icon: ChartBarIcon,
    title: "FineTech Ai",
    value: "40 Cr",
    footer: {
      color: "text-green-500",
      value: "+2%",
      label: "than last month",
    },
  },
];

export default statisticsCardsData;
