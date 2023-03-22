import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home,Companies } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import {caiData,cvData,faiData} from "@/data";



const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      }
    ],
  },
  {
    title : "Organizations",
    layout: "organization",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "conversational ai",
        path: "/cai/*",
        element: <Companies data={caiData} />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "Fintech Ai",
        path: "/fai/*",
        element:<Companies data={faiData} />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "computer vison",
        path: "/cv/*",
        element: <Companies data={cvData} />,
      },
    ],
    data:[
      {
        name:"cai",
        values:caiData
      },
      {
        name:"fai",
        values:faiData
      },
      {
        name:"cv",
        values:cvData
      },
    ]
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
