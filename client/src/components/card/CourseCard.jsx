import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup, Button, FormControl, FormLabel, Switch, Box, Tooltip, Img } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { addToCart } from '../../redux/actions/index.js';
import { InfoOutlineIcon } from '@chakra-ui/icons'
import axios from 'axios';

const CourseCard = ({ id, teacherName, name, description, rating, price, categories, image, videos, archieved, status, students, hidden, update, setUpdate }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const userDB = JSON.parse(localStorage.getItem("user"))

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

  const handleArchieved = async () => {

    const course = {
      id,
      archieved: !archieved
    }
    await axios.patch("/updateCourse", course).then(res => console.log(res.data.archieved))
    setUpdate(!update)
  }

  return (
    <Card height='550px' maxW='sm' bgColor={location.pathname === "/profile" || location.pathname === "/cursosCreados" || location.pathname === "/cursosComprados" ? '#BEE3F8' : undefined} width='300px'>
      <CardBody display='flex' flexDirection='column' alignItems='center' pt='3' >
        {
          location.pathname === "/profile" || location.pathname === "/cursosCreados"
            ?
            status === "BANNED" ?
              <Text color='red' textAlign='center'>
                <Tooltip hasArrow label='The course will not be displayed because it has been blocked/hidden for violating the rules.' placement='top'>< InfoOutlineIcon mr='1' /></Tooltip>
                Course banned for rule violation.
              </Text>
              : status === "PENDING" ?
                <Text color='red' textAlign='center' >
                  <Tooltip hasArrow label='The course is pending approval, when approved it will appear in the course listing.' placement='top'>< InfoOutlineIcon mr='1' /></Tooltip>
                  Course pending for approval.
                </Text>
                : videos?.length === 0 ?
                  <Text color='red' textAlign='center'>
                    <Tooltip hasArrow label='The course will not be displayed if it does not have any videos, add some videos to appear in the video list.' placement='top'>< InfoOutlineIcon mr='1' /></Tooltip>
                    Course archived because it has no videos.
                  </Text>
                  : archieved ?
                    <Text color='red' textAlign='center'>
                      <Tooltip hasArrow label='The course is archived, it will not be displayed in the list.' placement='top'>< InfoOutlineIcon mr='1' /></Tooltip>
                      Archived course.
                    </Text> : undefined
            : undefined
        }
        <Img width='300' height="200" src={image} alt={`image-couse${id}`} />
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
          <Text color="blue.600" fontSize="2xl">
            {`$${price}`}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        {location.pathname !== "/profile" && location.pathname !== "/cursosCreados" ?
          <ButtonGroup spacing='2'>
            <Link to={"/cart"}>
              <Button variant='solid' colorScheme='blue'
                hidden={location.pathname === "/cursosComprados"}
                disabled={students?.includes(userDB?.id) ? true : false}
                onClick={() => handleAddToCart()}>
                Buy now
              </Button>
            </Link>
            <Button variant='ghost' colorScheme='blue'
              hidden={location.pathname === "/cursosComprados"}
              disabled={students?.includes(userDB?.id) ? true : false}
              onClick={() => handleAddToCart()}>
              Add to cart
            </Button>
          </ButtonGroup>
          : !hidden ?
            undefined
            : <Box display='flex'>
              <Link style={{ textDecoration: 'none' }} to={`/editcourse/${id}`} >
                <Button variant='ghost' colorScheme='blue'  >
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
    </Card >
  )
}

export default CourseCard;