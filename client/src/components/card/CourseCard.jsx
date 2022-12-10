// import style from './CourseCard.module.css';
// import { useHistory } from 'react-router-dom
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, buyNow } from '../../redux/actions/index.js';

const CourseCard = ({ id, teacher, name, description, rating, price }) => {

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
                    <iframe id="ytplayer" type="text/html" title="yt" width="300" height="200"
                    src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&origin=http://example.com"
                    />
                <Stack mt='6' spacing='3'>
                {/* <Link to={'/detail'}> */}
                    <Heading size='md'>{name}</Heading>
                {/* </Link> */}
                <Text>
                    {description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    ${price}
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
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
            </CardFooter>
        </Card>
    )
}

export default CourseCard;