// import style from './CourseCard.module.css';
// import { useHistory } from 'react-router-dom
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Img } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addToCart, buyNow } from '../../redux/actions/index.js';

const CourseCard = ({ id, teacher, name, rating, price, categories, image }) => {

  const location = useLocation()
  const dispatch = useDispatch();
  // const history = useHistory();

  const handleAddToCart = (idCourse) => {
    dispatch(addToCart(idCourse));
  }

  const handleBuyNow = (idCourse) => {
    dispatch(buyNow(idCourse));
    // history.push('/purchase');
  }

  return (
    <Card maxW='sm'>
      <CardBody>
        <Img src={image} alt={`image-couse${id}`} />
        <Stack mt='6' spacing='3'>
          <Link to={`/detail/${id}`}>
            <Heading size='md'>{name}</Heading>
          </Link>
          <Text color='blue.600' fontSize='2xl'>
            ${price}
          </Text>
          <Text>
            Categories: {categories?.map(e => `${e} `)}
          </Text>
          <Text>
            Teacher: {teacher}
          </Text>
          <Text>
            Rating: {rating}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        {location.pathname !== "/profile" ?
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'
              onClick={handleBuyNow(id)}>
              Buy now
            </Button>
            <Button variant='ghost' colorScheme='blue'
              onClick={handleAddToCart(id)}>
              Add to cart
            </Button>
          </ButtonGroup>
          :
          <Button variant='ghost' colorScheme='blue'>
            Modify Course
          </Button>
        }
      </CardFooter>
    </Card >
  )
}

export default CourseCard;