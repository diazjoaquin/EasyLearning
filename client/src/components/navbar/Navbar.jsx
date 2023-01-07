import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
import Logo from "../footer/easylearning.png"
import { Button } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react';
import { useAuth } from "../context/Auth-context";
import { auth } from "../../firebase-config";
import { useSelector } from "react-redux";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Box,
} from '@chakra-ui/react'

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
          <Link to="/course">Courses</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
          <div className={style.buttons}>
            <Link to="/cart">
              <div className="nav-bag"
                style={{ position: 'relative' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="tail"
                  className="bi bi-handbag-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                </svg>
                <span
                  className='badge badge-danger'
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    right: '-5px'
                  }}
                >
                  {cart?.length}
                </span>
              </div>
            </Link>
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
                  <h1>{userDB?.emailAddress}</h1>
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
  )
}
