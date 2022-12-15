import React, { useEffect, useState } from "react";
import { getCourseDetail, getReviews } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./CourseDetail.module.css";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";
import style from "../detail/CourseDetail.module.css";
// import CardReview from "../Review/cardReview";
// import PostReview from "../Review/postReview";
import { Center, Square, Circle, Box, Badge, useDisclosure, Button, Input, Image, Heading, SimpleGrid, Divider} from '@chakra-ui/react';
import {
  Button,
  Accordion,
  AccordionIcon,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Card,
  Stack,
  CardBody,
  Heading,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";

import { RiArrowGoBackLine } from "react-icons/ri";
import CardReview from "../Review/cardReview";
import PostReview from "../Review/postReview";


export default function Detail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [update, setUpdate] = useState();

  const myCourse = useSelector((state) => state.courseDetail);
  useEffect(() => {
    dispatch(getCourseDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <div>
        <Navbar />
        <Link style={{ textDecoration: "none" }} to="/course">
          <Button colorScheme="blue" leftIcon={<RiArrowGoBackLine />}>
            Back
          </Button>
        </Link>

        {myCourse ? (
          <div>
            <div className={style.container}>
              <div>
                <h1 className={style.titulo}>
                  {`${myCourse?.name}`} {`${myCourse.rating}`}
                </h1>
                <div>
                  <div>
                    <div className={style.grid}>
                      <p>Descripcion:{myCourse?.description}</p>
                      <div class="card-button">
                        <img src="https://www.unapiquitos.edu.pe/contenido/opiniones/recursos/docenteClases.jpg" />
                        <p class="text-title">{`${"$" + myCourse.price}`}</p>
                        <ButtonGroup spacing="2">
                          <Button variant="solid" colorScheme="blue">
                            Buy now
                          </Button>
                          <Button variant="ghost" colorScheme="blue">
                            Add to cart
                          </Button>
                        </ButtonGroup>
                      </div>
    dispatch(getReviews(id))
  }, [dispatch, id, update])

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const allReviews = useSelector((state) => state.reviews);
    console.log(allReviews);

    


    return (
      <>
        <div>
          <Navbar />
          <Link style={{ textDecoration: 'none' }} to='/course'>
          <Button colorScheme='blue' leftIcon={<RiArrowGoBackLine />}>Back</Button>
            {/* <button className="back">Back</button> */}
          </Link>

          {
            myCourse ?
              <div className={style.content}>
                <div className={style.header}>
                  
                  <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Center h='100px' color='black'>
                      <h1 className={style.title}>{`${myCourse?.name}`}</h1>
                    </ Center>
                    <Box>
                      <Center>
                      <Image src="https://www.unapiquitos.edu.pe/contenido/opiniones/recursos/docenteClases.jpg" />
                      </Center>
                    </Box>
                    <Box>
                      <Center>
                        <Box p='6'>
                          <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                              New
                            </Badge>
                            <Box
                              color='gray.500'
                              fontWeight='semibold'
                              letterSpacing='wide'
                              fontSize='xs'
                              textTransform='uppercase'
                              ml='2'
                            ><h3>Teacher:{myCourse?.teacher}</h3>

                            </Box>
                          </Box>
                          <Box fontWeight='semibold' textTransform='uppercase' >
                            <p>Descripcion:{myCourse?.description}</p>
                          </Box>
                          <Box>
                            <Link to={`/detail/${id}/videos`}>
                              <button>Ver todos los videos de este curso</button>
                            </Link>
                            {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                              Open
                            </Button> */}
                            <Drawer
                              isOpen={isOpen}
                              placement='right'
                              onClose={onClose}
                              finalFocusRef={btnRef}
                            ></Drawer>


                            <Drawer
                              isOpen={isOpen}
                              placement='right'
                              onClose={onClose}
                              finalFocusRef={btnRef}
                            >
                              <DrawerOverlay />
                              <DrawerContent>
                                <DrawerCloseButton />
                                <DrawerHeader>Create your account</DrawerHeader>

                                <DrawerBody>
                                  <Input placeholder='Type here...' />
                                </DrawerBody>

                                <DrawerFooter>
                                  <Button variant='outline' mr={3} onClick={onClose}>
                                    Cancel
                                  </Button>
                                  <Button colorScheme='blue'>Save</Button>
                                </DrawerFooter>
                              </DrawerContent>
                            </Drawer>


                            {/* <Video videos={myCourse.video}/> */}
                          </Box>
                          <Box>

                            <h3> <strong> Category: </strong> </h3>
                            
                            {myCourse.categories?.map((e, i) => <h1 key={i}>{e.name}</h1>)}

                          </Box>
                        </Box>
                      </Center>
                    </Box>
                    {/* <h3>Teacher:{myCourse?.teacher}</h3>
                    <br /> */}

                    <br />
                    <div>
                    </div>
                  </div>
                </div>
                <br />
                <div></div>
                <br />
                <div></div>
              </div>
            </div>
            <div>
            <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Button flex="1" variant="ghost" leftIcon>
                          Video
                        </Button>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {myCourse.videos?.map((e, i) => (
                        <Card
                          direction={{ base: "column", sm: "row" }}
                          overflow="hidden"
                          variant="outline"
                          key={i}
                        >
                          <Stack>
                            <CardBody>
                              <Heading size="sm">{e.title}</Heading>
                              <Text py="2">
                                {e.name}
                                {e.description}
                                <Link to={`/detailVideo/${e.id}`}>
                                  <button>{e.urlVideo}</button>
                                </Link>
                                {e.teacher}
                              </Text>
                            </CardBody>
                          </Stack>
                        </Card>
                      ))}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
            </div>
          </div>
        )  
        
            : <p>Loading..</p>
          }
         <Divider paddingTop={5}/>
         <Heading padding={5}>Reviews</Heading>
         <SimpleGrid 
         spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' padding={5}
         >
          { allReviews? allReviews.map((r, index) => {
            return(
            <CardReview
            key={index}
            user={r.user.fullName}
            score={r.score}
            comments={r.comments}
            />)}) : <p>No reviews</p>}
        </SimpleGrid>
        <Box 
        padding={5}>
        <PostReview
        update = {update}
        setUpdate = {setUpdate}
        />
        </Box>
        <Footer2 />
        </div >
      </>
    )
  }
             
