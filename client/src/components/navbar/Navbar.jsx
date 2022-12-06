import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
import Logo from "../../image/logoE.png"
import Login from "../login/Login";
import { Button, ButtonGroup, EmailIcon } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'

import SignUp from "../../components/signup/SignUp"


export default function Navbar() {
    return (
        <div>
           
            <div className={style.botones}>
                
                <img className={style.logo} src={Logo} alt="Logo" />
               
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/course">Course</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">Contact</Link>

                <div>
                    <Link to="/login">{<Login />}</Link>
                    <Link to="/signup">{<SignUp />}</Link>
                </div>

            </div>



        </div>
    )
}
