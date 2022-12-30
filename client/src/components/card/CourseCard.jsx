import style from './CourseCard.module.css';
// import { useHistory } from 'react-router-dom
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, Img } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addToCart, buyNow } from '../../redux/actions/index.js';



const CourseCard = ({ id, teacherName, name, description, rating, price, categories, image }) => {

    const location = useLocation();
    const coursesInCart = useSelector((state) => state.cart)
    console.log(coursesInCart);

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

    const dispatch = useDispatch();

    return (
        <Card maxW='sm'>
            <CardBody>
                <div className={style.imgcont}><img src={image} alt={`image-couse${id}`} /></div>
                <Stack mt='6' spacing='3'>
                    <Link to={`/detail/${id}`}>
                        <Heading size='md'>{name}</Heading>
                    </Link>
                    <Text>
                        {description}
                    </Text>
                    <Text>
                        Categories: {categories?.map(e => `${e}. `)}
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
                    <Link style={{ textDecoration: 'none' }} to={`/editcourse/${id}`} >

                        <Button variant='ghost' colorScheme='blue'>
                            Modify Course
                        </Button>
                    </Link>
                }
            </CardFooter>
        </Card>
    )
}

export default CourseCard;