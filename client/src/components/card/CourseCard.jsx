// import style from './CourseCard.module.css';
// import { useHistory } from 'react-router-dom';
import { courses } from '../../mockup.js';
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addToCart, buyNow } from '../../redux/actions/index.js';

const CourseCard = ({}) => {

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
                    <iframe id="ytplayer" type="text/html" title="yt" width="330" height="220"
                    src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&origin=http://example.com"
                    />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Course Name</Heading>
                <Text>
                    {courses[0].Description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    USD$30
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'
                        onClick={handleBuyNow(courses[0].idCourse)}>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'
                        onClick={handleAddToCart(courses[0].idCourse)}>
                            Add to cart
                        </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CourseCard;