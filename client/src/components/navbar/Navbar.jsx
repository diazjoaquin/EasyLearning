import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
import Logo from "../footer/easylearning.png"
import { Button } from '@chakra-ui/react'
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
} from '@chakra-ui/react'

export default function Navbar() {

  const cart = useSelector(state => state.cart);
  const { user, logout, loading } = useAuth();
  const handleLogout = async () => {
    await logout(auth);
  };

  if (loading) { return <h1>Loading ...</h1> }

    return (
        <nav className={style.navcont}>
            <div className={style.botones}>
                <img className={style.logo} src={Logo} alt="Logo" />
                <div className={style.menu}>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/about"><p>About</p></Link>
                    <Link to="/course"><p>Course</p></Link>
                    <Link to="/blog"><p>Blog</p></Link>
                    <Link to="/contact"><p>Contact</p></Link>
                </div>
                    <div className={style.buttons}>
                        <Link to={'/cart'}>
                            <Button className={style.cart} colorScheme='teal' variant='outline'>
                                <p>{cart && (cart.length)}</p><img src={Cart}/>
                            </Button>
                        </Link>
                        {user && <Avatar src='https://bit.ly/broken-link' bg='teal.500' size='sm'/>}
                        {user && <Button colorScheme='teal' variant='solid'
                        onClick={handleLogout}>
                                Log Out
                            </Button>}

                        {!user && <Link to="/signup">
                          <Button colorScheme='teal' variant='solid'>
                            Sign Up
                          </Button>
                        </Link>}

                        {!user && <Link to="/login">
                          <Button colorScheme='teal' variant='outline'>
                            Login
                          </Button>
                        </Link>}

            {user &&
              <Menu>
                <MenuButton >
                  <Avatar src='https://bit.ly/broken-link' bg='teal.500' size='sm' />
                </MenuButton>
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
        </nav>
  )
}
