// import React from 'react';

import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link , useLocation} from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import {FaMoon, FaSun} from "react-icons/fa";
import { useSelector , useDispatch} from "react-redux";
import { toggletheme } from "../redux/theme/themeSlice";


function Header() {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state)=>state.user);
    const {theme} = useSelector((state)=>state.theme)
  return (
    <>
    <Navbar className="border-b-2">
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
        <span className="px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">Suri&rsquo;s</span>Blog
        </Link>
        <form>
            <TextInput type="text" placeholder="Search" rightIcon={AiOutlineSearch } className="hidden lg:inline"/>
        </form>
        <Button className="w-12 h-10 lg:hidden border" color="grey" pill><AiOutlineSearch className="text-xl"/></Button>
        <div className="flex gap-2 md:order-2" >
            <Button className="w-12 h-10 hidden sm:inline border" color="grey" pill onClick={()=>dispatch(toggletheme())}>
                {theme === "light" ? <FaSun className="text-xl"/> : <FaMoon className="text-xl"/>}
                </Button>
            
            {
                currentUser ? 
                (<>
                <Dropdown inline arrowIcon={false} label={ <Avatar 
                    img={currentUser.photoUrl}
                    rounded/>}>
                 <Dropdown.Header>
                    <span className="block my-2 font-semibold">{currentUser.email}</span>
                    <span className="block my-2 font-semibold">{currentUser.username}</span>
                 </Dropdown.Header>
                 <Dropdown.Item>
                    Profile
                 </Dropdown.Item>
                 <Dropdown.Item>
                    Log Out
                 </Dropdown.Item>
                </Dropdown>
                </>) :
                 <><Link to="/signin"><Button className="font-semibold cursor-pointer border hover:bg-blue-100" color="grey">
                Sign In
                </Button></Link></>
            }
            
            
            <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
            <Navbar.Link as={"div"} active={path==="/"}>
                <Link to="/">
                Home
                </Link>
            </Navbar.Link>
            <Navbar.Link as={"div"} active={path==="/about"}>
                <Link to="/about">
                About
                </Link>
            </Navbar.Link>
            <Navbar.Link as={"div"} active={path==="/projects"}>
                <Link to="/projects">
                Projects
                </Link>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header;