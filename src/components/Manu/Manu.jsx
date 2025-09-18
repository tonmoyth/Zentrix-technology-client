
import React, { useState, useEffect, useRef, ReactNode } from "react";
import { RiApps2AiLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { TiThMenu } from "react-icons/ti";
import { FaServicestack } from "react-icons/fa";
import { TbDetails } from "react-icons/tb";
import { NavLink } from "react-router";


const DropdownMenu = ({
  children,
  trigger
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleTriggerClick = e => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  return <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={handleTriggerClick} className="cursor-pointer">
        {trigger}
      </div>
      {isOpen && <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-2xl shadow-xl bg-white dark:bg-zinc-900 ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-in fade-in-0 zoom-in-95 p-2" role="menu" aria-orientation="vertical">
          {children}
        </div>}
    </div>;
};
const DropdownMenuItem = ({
  children,
  onClick,
  active = false
}) => <a href="#" onClick={e => {
  e.preventDefault();
  if (onClick) onClick();
}} className={`
      text-zinc-800 dark:text-zinc-200 font-medium group flex items-center 
      px-3 py-2.5 text-sm rounded-lg transition-colors duration-150
    `} role="menuitem">
    {children}
  </a>;
const DropdownMenuSeparator = () => <div className="my-2 h-px bg-zinc-200 dark:bg-zinc-700" />;
export default function Dropdown() {
  return <div className=" flex items-center justify-center font-sans p-2 lg:p-8 md:hidden">
      <DropdownMenu trigger={<button className=" text-sm font-semibold rounded-lg transition-colors">
            <RiApps2AiLine size={40}/>
            {/* <TiThMenu size={35}/> */}
          </button>}>
        <div className="flex flex-col space-y-1">
          <DropdownMenuItem onClick={() => console.log("Profile clicked")} active={true}>
            <FaHome className=" mr-4" size={25}/>
            <span>
              <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-[var(--secondary)] font-bold" : "font-bold text-[var(--text)] hover:text-[var(--secondary)]"
                    }
                >
                    Home
                </NavLink>
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Community clicked")}>
            <AiFillProduct className="text-zinc-500 mr-4" size={25}/>
              
            <span>
              <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? "text-[var(--secondary)] font-bold" : "font-bold text-[var(--text)] hover:text-[var(--secondary)]"
                    }
                >
                    Products
                </NavLink>
            </span>
          </DropdownMenuItem>
       
          <DropdownMenuItem onClick={() => console.log("Settings clicked")}>
            <FaServicestack className="text-zinc-500 mr-4" size={25}/>
            
            <span>

              <NavLink
                    to="/service"
                    className={({ isActive }) =>
                        isActive ? "text-[var(--secondary)] font-bold" : "font-bold text-[var(--text)] hover:text-[var(--secondary)]"
                    }
                >
                    Service
                </NavLink>
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => console.log("Settings clicked")}>
            
            <TbDetails className="text-zinc-500 mr-4" size={25}/>
            <span>About</span>
          </DropdownMenuItem>
        </div>
       
        
      </DropdownMenu>
    </div>;
}