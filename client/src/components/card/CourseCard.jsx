// import { Link } from 'react-router-dom';
// import style from './CourseCard.module.css';
import { courses } from '../../mockup.js';
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';

const CourseCard = () => {


    return (
        <Card maxW='sm'>
            <CardBody>
                {/* <iframe id="ytplayer"
                    type="text/html"
                    width="300"
                    height="200"
                    src={courses[0].Video[0]}
                    title={courses[0].idCourse}/> */}
                    <iframe id="ytplayer" type="text/html" title="yt" width="330" height="220"
                    src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&origin=http://example.com"
                    />
                <Stack mt='6' spacing='3'>
                <Heading size='md'>Course Name</Heading>
                <Text>
                    {courses[0].Description}
                </Text>
                <Text color='blue.600' fontSize='2xl'>
                    $Course Price
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Buy now
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default CourseCard;