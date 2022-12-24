import React from "react";
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addToCart, buyNow } from '../../redux/actions/index.js';



const CourseCard = ({ id, teacher, name, description, rating, price, categories, image }) => {
   
    const coursesInCart = useSelector((state) => state.cart)
    console.log(coursesInCart);

   const handleAddToCart = () => {
        dispatch(addToCart({
            id,
            teacher,
            name,
            description,
            rating,
            price,
            categories
        }));
  }

    const dispatch = useDispatch();

    return (
        <Card maxW='sm'>
            <CardBody>
            <img src={image} alt={`image-couse${id}`} />
                <Stack mt='6' spacing='3'>
                    <Link to={`/detail/${id}`}>
                        <Heading size='md'>{name}</Heading>
                    </Link>
                    <Text>
                        {description}
                    </Text>
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
                    <Button variant='solid' colorScheme='blue' >
                        {/* // onClick={handleBuyNow(id)}> */}
            
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'
                        onClick={() => handleAddToCart()}>
                        Add to cart
                    </Button>
                </ButtonGroup>
                     :
                     <Button variant='ghost' colorScheme='blue'>
                       Modify Course
                     </Button>
                   }
            </CardFooter>
        </Card>
    )
}

export default CourseCard;