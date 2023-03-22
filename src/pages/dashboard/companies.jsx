import React from 'react'
import { StatisticsCard} from "@/widgets/cards";
import {Typography} from "@material-tailwind/react";
import {Link,useLocation,useNavigate } from 'react-router-dom';

export const Companies = ({data}) => {
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== ""); 
  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-3 md:grid-rows-3">
        {data.companies.map(({ icon, title,path, footer, ...rest }) => {
        return <Link to={`/${layout}/${page}${path}`}> 
            <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white"
            })}
            footer={<Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>} />
          </Link>
      })}   
    </div>
  </div>
  )
}
