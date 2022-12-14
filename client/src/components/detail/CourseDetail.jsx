import React, { useEffect } from "react";
import { getCourseDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import './CourseDetail.module.css';
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";
import style from "../detail/CourseDetail.module.css";


// import CardReview from "../Review/cardReview";
// import PostReview from "../Review/postReview";
import { Center, Box, Badge, Button, Image, Accordion, AccordionIcon, AccordionButton,
AccordionItem, AccordionPanel, Card, Stack, CardBody, Heading, Text } from '@chakra-ui/react';


import { RiArrowGoBackLine } from "react-icons/ri";

export default function Detail() {

  const dispatch = useDispatch();

  const { id, videoId } = useParams();


  const myCourse = useSelector(state => state.courseDetail)
  useEffect(() => {
    dispatch(getCourseDetail(id));
  }, [dispatch, id])

  


  // "category": "Bebe de benja", varias categorias? 
  // "description": "The best course to learn how to create your first repository on GitHub.",
  // "name": "El mejor curso de tu vida",
  // "rating": "4.5",
  // "students": [
  // "German",
  // "Bianca",
  // "Fermin"
  // ],
  // "teacher": "Franco Cartucho",
  // "video": [
  // "https://www.youtube.com/watch?v=C6IjS7jKnjQ",
  // "https://www.youtube.com/watch?v=vlCXdvcgiE0",
  // "https://www.youtube.com/watch?v=DinilgacaWs"
  // ]




  

  return (
    <>
      <div>
        <Navbar />
        
        <Link style={{ textDecoration: 'none' }} to='/course'>
          <Button colorScheme='blue' leftIcon={<RiArrowGoBackLine />}>Back</Button>
          
        </Link>

        {
          myCourse ?
            <div className={style.content}>
              <div className={style.header}>

                
                <Box borderWidth='1px' borderRadius='lg' overflow='hidden'>
                 
                    <h1>{`${myCourse?.name}`}</h1>
                    <h1>{`${myCourse?.rating}`} </h1>
                    
                
                    <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Button flex='1' variant='ghost' leftIcon>
                    Video
                  </Button>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
              
                {myCourse.videos?.map((e, i) =>
                (

                  <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    key={i}
                  >
                    <Stack>
                      <CardBody>
                        <Heading size='sm'>{e.title}</Heading>
                        <Text py='2'>
                          {e.name}
                          {e.description}
                           <Link to={`/detail/${id}/videos/${videoId}`}>
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
        
                  <Box>
                    <Center>
                        <Box fontWeight='semibold' textTransform='uppercase' >
                          <p>Descripcion:{myCourse?.description}</p>
                        </Box>
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
                        <Box>
                          
                          {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                              Open
                            </Button> */}
                         
                           


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
                  <br />
                  <div>
                  </div>
                </Box>
              </div>
            </div>
            : <p>Loading..</p>
        }

        {/* <CardReview />
        <PostReview /> */}

        <Footer2 />
      </div >
    </>
  )
}
