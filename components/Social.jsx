import { icons } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "www" },
  { icon: <FaLinkedinIn />, path: "/" },
  { icon: <FaYoutube />, path: "/" },
  { icon: <FaTwitter />, path: "/" },
  {},
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>

{/* {socials.map((item, index) => (
        item.icon && item.path ? (
          <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </Link>
        ) : null
      ))} */}

      {socials.map((item,index)=>(
item.icon && item.path ? (
  <Link key={index} href={item.path} className={iconStyles} >
    {item.icon}
  </Link>
) : null
      ))}
    </div>
  );
};

export default Social;
