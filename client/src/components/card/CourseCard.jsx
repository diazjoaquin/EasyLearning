import style from './CourseCard.module.css';
import { useHistory } from 'react-router-dom';
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, FormControl, FormLabel, Switch, Box } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addToCart, buyNow } from '../../redux/actions/index.js';
import { InfoOutlineIcon } from '@chakra-ui/icons'
import axios from 'axios';

const CourseCard = ({ id, teacherName, name, description, rating, price, categories, image, videos, archieved, status }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      id,
      teacherName,
      name,
      description,
      rating,
      price,
      categories
    }));
  }
  const coursesInCart = useSelector((state) => state.cart)
  let history = useHistory();
   
  const handleArchieved = async () => {
    const course = {
      id,
      archieved: !archieved
    }
    await axios.patch("http://localhost:3001/updateCourse", course).then(res => console.log(res.data.archieved))
    window.location.reload()
  }


    return (
        <Card maxW='sm'>
            <CardBody>
            {
          location.pathname === "/profile"
            ?
            status === "BANNED" ? <Text color='red' textAlign='center'> < InfoOutlineIcon mr='1' />Course banned for rule violation.</Text> : status === "PENDING" ? <Text color='red' textAlign='center'> < InfoOutlineIcon mr='1' />Course pending for approval.</Text> : videos?.length === 0 ? <Text color='red'> < InfoOutlineIcon mr='1' />Course archived because it has no videos.</Text> : archieved ? <Text color='red' textAlign='center'> < InfoOutlineIcon mr='1' />Archived course.</Text> : undefined
            : undefined
        }

                <img src={image} alt={`image-couse${id}`} />
        <Stack mt='6' spacing='3'>
          <Link to={`/detail/${id}`}>
            <Heading size='md'>{name}</Heading>
          </Link>
          <Text>
            {description}
          </Text>
          <Text>
            Categories: {categories?.map(e => `${e} `)}
          </Text>
          <Text>
            Teacher: {teacherName}
          </Text>
          {
            rating
              ? <Text>
                Rating: {rating}
              </Text>
              : undefined
          }
          <Text color='blue.600' fontSize='2xl'>
            ${price}
          </Text>


                
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
            {location.pathname !== "/profile" ?
                
                <ButtonGroup spacing='2'>
                  <Link to={"/cart"}>
                    <Button variant='solid' colorScheme='blue' 
                        onClick={() => handleAddToCart()}>
                        Buy now
                    </Button>
                  </Link>
                    <Button variant='ghost' colorScheme='blue'
                        onClick={() => handleAddToCart()}>
                        Add to cart
                    </Button>
                </ButtonGroup>
                     :                    
                <Box display='flex'>
                <Link style={{ textDecoration: 'none' }} to={`/editcourse/${id}`} >

                  <Button variant='ghost' colorScheme='blue' >
                    Modify Course
                  </Button>
                </Link>
                <FormControl display='flex' alignItems='center' >
                  <FormLabel htmlFor='email-alerts' mb='0'>
                    Public:
                  </FormLabel>
                  <Switch isChecked={archieved ? false : true} onChange={handleArchieved} id='course' />
                </FormControl>
                </Box>
                   }
            </CardFooter>
        </Card>
    )
}

export default CourseCard;