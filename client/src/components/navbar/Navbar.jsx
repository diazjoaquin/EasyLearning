import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
import Logo from "../footer/easylearning.png"
import { Button } from '@chakra-ui/react'
import { signOut } from "firebase/auth";
import { Avatar } from '@chakra-ui/react';
import { useAuth } from "../context/Auth-context";
import { auth } from "../../firebase-config";
import Cart from "../../assets/shopping-cart.png"
import { useSelector } from "react-redux";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Box,
} from '@chakra-ui/react'
import { useSelector } from "react-redux";

export default function Navbar() {

  const cart = useSelector((state) => state.cart);

  const { user, logout, loading } = useAuth();

  const userDB = user && JSON.parse(localStorage.getItem("user"))

  const handleLogout = async () => {
    await logout(auth);
    localStorage.removeItem("user")
  };

  if (loading) { return <h1>Loading ...</h1> }

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
            {!user && <Link to="/login">
              <Button colorScheme='gray'>
                Login
              </Button></Link>}

            {!user && <Link to="/signup">
              <Button colorScheme='teal' variant='solid'>
                Sign Up
              </Button>
            </Link>}

            {user &&
              <Menu>
                <Box display='flex' gap='5'>
                  <h1>{userDB?.fullName.split(" ")[0]}</h1>
                  <MenuButton>
                    <Avatar src='https://bit.ly/broken-link' bg='teal.500' size='sm' />
                  </MenuButton>
                </Box>
                <MenuList>
                  <MenuGroup title='Profile'>
                    <Link to='/profile'>
                      <MenuItem>My Account</MenuItem>
                    </Link>
                    <Link to='/'>
                      <MenuItem onClick={handleLogout}> Log out </MenuItem>
                    </Link>
                  </MenuGroup>
                </MenuList>
              </Menu>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
