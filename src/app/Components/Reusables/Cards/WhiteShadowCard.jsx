import React from 'react';
import {Link} from "next/link"
import { FaArrowRightLong } from "react-icons/fa6";

const WhiteShadowCard = ({ title, children, icon, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-4 text-gray-500">
    <div className="flex w-full items-center justify-between">
        <div className="flex items-baseline gap-4 text-gray-600">
            {icon}
            <h2 className="text-lg font-semibold mb-4 ">{title}</h2>
              </div>
              {link && 
              <a href={link && link}>
                  <FaArrowRightLong />  
              </a>
              }
    </div>
      
      {children}
    </div>
  );
};

export default WhiteShadowCard;
