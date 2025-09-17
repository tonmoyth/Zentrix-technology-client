import { Link, NavLink } from "react-router";
import zentrixImage from "../../../public/color-zentrix.png"
import Manu from "../Manu/Manu";

// import {
//     Menubar,
//     MenubarContent,
//     MenubarItem,
//     MenubarMenu,
//     MenubarSeparator,
//     MenubarShortcut,
//     MenubarSub,
//     MenubarSubContent,
//     MenubarSubTrigger,
//     MenubarTrigger,
// } from "@/components/ui/menubar"

function NavBer() {


    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-[var(--secondary)] font-bold" : "font-bold text-[var(--text)] hover:text-[var(--secondary)]"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/service"
                    className={({ isActive }) =>
                        isActive ? "text-[var(--secondary)] font-bold" : "font-bold text-[var(--text)] hover:text-[var(--secondary)]"
                    }
                >
                    Service
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/products"
                    className={({ isActive }) =>
                        isActive ? "text-[var(--secondary)] font-bold" : "font-bold text-[var(--text)] hover:text-[var(--secondary)]"
                    }
                >
                    Products
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-[var(--secondary)] font-bold" : "font-bold text-[var(--text)]  hover:text-[var(--secondary)]"
                    }
                >
                    About
                </NavLink>
            </li>


        </>
    );


    return (
        <>
            <div className={`navbar w-11/12 md:w-10/12 mx-auto items-center`}>
                <div className="flex-1">
                    <Link ><img className="w-16 md:w-18 lg:w-26" src={zentrixImage} /></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 hidden md:flex">
                        {links}
                    </ul>

                    <div className=" flex justify-end">
                        <Manu></Manu>
                    </div>

                    {/* mobile device icon */}
                    {/* <div className="md:hidden">
                        <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>File</MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem>
                                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                                </MenubarItem>
                                <MenubarItem disabled>New Incognito Window</MenubarItem>
                                <MenubarSeparator />
                                <MenubarSub>
                                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>Email link</MenubarItem>
                                        <MenubarItem>Messages</MenubarItem>
                                        <MenubarItem>Notes</MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                                <MenubarSeparator />
                                <MenubarItem>
                                    Print... <MenubarShortcut>⌘P</MenubarShortcut>
                                </MenubarItem>
                            </MenubarContent>
                        </MenubarMenu>
                   
                    </Menubar>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default NavBer
