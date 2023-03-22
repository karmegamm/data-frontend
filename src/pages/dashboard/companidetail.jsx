import React from "react";
import {
  Typography,
  Avatar,
} from "@material-tailwind/react";
import {
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { NavLink,Routes,Route } from "react-router-dom";
// import Financials from "@/companydata";
// import People from "@/companydata";
// import Technologies from "@/companydata";


export function CompanyDetail({value,info}) {
  console.log(info);
  return (
    <div className="mt-0  ">
          <div className="flex flex-row justify-start">
            <Avatar src="/img/team-1.jpeg" className="mr-2 md:shadow-xl md:hover:drop-shadow-2xl  mt-5 lg:w-36 lg:h-36 md:ml-5 md:mt-9 md:z-10">
            </Avatar>          
              <Typography variant="paragraph" className="mt-7 ml-6 hidden md:block " >
                <ArrowUpIcon strokeWidth={2} className="h-4 inline-block mr-2 w-4 text-inherit"/>
                {value.title}
              </Typography> 
              <Typography variant="h2" className='ml-20 mt-3  md:-ml-16 md:mt-14   '> 
                {value.title}
              </Typography>
          </div> 
          <div className="md:-mt-48 md:ml-80 "> 
              <ul className="flex p-5 gap-8 overflow-x-auto justify-start bg-bule-gray-50/50 md:-ml-32 text-xl md:mt-24 ">
              {info.map(({name,path})=>{
                return <NavLink to={name==='Summary'?'':path} className="md:focus:bg-blue-gray-100 md:rounded-xl">
                        <li className="px-2 pt-2 w-auto text-xs rounded-xl hover:underline-offset-4 md:text-xl md:drop-shadow-lg md:hover:bg-blue-gray-100 md:hover:z-0 md:p-5 cursor-pointer">
                          {name}  
                        </li>
                      </NavLink>
              })}
              </ul>
          </div>
          <div className="h-full drop-shadow-md rounded-xl z-10 w-full  md:-mt-7 bg-blue-gray-100">
          <Routes>
          {info.map(({path,element})=>{
                return <Route path={path} element={element}/>
              })}
          </Routes>
          </div>
    </div>)}

export default CompanyDetail;