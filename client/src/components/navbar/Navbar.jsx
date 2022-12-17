import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
import Logo from "../../image/logoE.png"
import { Button } from '@chakra-ui/react'
import { signOut } from "firebase/auth";
import { Avatar } from '@chakra-ui/react';
import { useAuth } from "../context/Auth-context";
import { auth } from "../../firebase-config";

export default function Navbar() {

    const { user, logout, loading } = useAuth();
    const handleLogout = async () => {
        await logout(auth);
    };


    if (loading) {return <h1>Loading ...</h1>}

    return (
        <div className={style.navcont}>
            <div className={style.botones}>
                <img className={style.logo} src={Logo} alt="Logo" />
                
                <div className={style.menu}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/course">Course</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <div className={style.buttons}>
                        {user && <Avatar src='https://bit.ly/broken-link' bg='teal.500' size='sm'/>}
                        {user && <Button colorScheme='teal' variant='solid'
                        onClick={handleLogout}>
                                Log Out
                            </Button>}

                        {!user && <Link to="/login">
                             <Button colorScheme='gray'>
                                Login
                            </Button></Link>}
                        
                        {!user && <Link to="/signup">
                            <Button colorScheme='teal' variant='solid'>
                                Sign Up
                            </Button>
                        </Link>}


                        
                    </div>
                    
                    
                </div>

            </div>
        </div>
    )
}
