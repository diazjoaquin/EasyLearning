import React, { useEffect } from "react";
import { getCourseDetail } from "../../../redux/actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Footer2 from "../../footer/Footer2";
import { Box, Center, Text, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Input } from '@chakra-ui/react';
import Comments from "../comments/Comments";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useDisclosure } from '@chakra-ui/react';






const dv = { nameVideo: "Curso Santi", urlVideo: "https://youtu.be/M7lc1UVf-VE", description: " Hasta que franquito termine, he creado un objeto con algunas props para ver si funcioanan la descripcion, Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quibusdam, natus voluptatibus quod inventore libero vitae rerum asperiores minima, nisi vero ratione quo laudantium earum ducimus in nobis suscipit. Laudantium?", review: "Muy bueno", }





export default function DetailVideo() {

    const dispatch = useDispatch();

    const { id } = useParams();

    const myCourse = useSelector(state => state.courseDetail)
    useEffect(() => {
        dispatch(getCourseDetail(id));
    }, [dispatch, id])



    return (
        <>

            <Navbar />
            <Link style={{ textDecoration: 'none' }} to='/course'>
                <Button colorScheme='blue' leftIcon={<RiArrowGoBackLine />}>Back</Button>
                {/* <button className="back">Back</button> */}
            </Link>

            <Center>
                <Box maxW='800px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                    <Box name="Name Video" >
                        <Center>
                            <Box borderWidth='1px' size='lg' fontSize='36px' alignItems="center" >
                                {/* {dv.nameVideo} */}
                                {myCourse.name}
                            </Box>
                            <br />
                            <br />
                        </Center>

                        <Box >
                            <Center>
                                <Text fontSize='24px'> {myCourse?.description}</Text>
                            </Center>
                            <br>
                            </br>
                        </Box>

                        <Box>
                            <Center>
                                <iframe width="760" height="515" src="https://www.youtube.com/embed/M7lc1UVf-VE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                </iframe>
                            </Center>
                        </Box>
                        <br>
                        </br>

                        <Box fontSize='36px' >
                            {dv.review}
                        </Box>
                        <br>
                        </br>
                        <Box fontSize='24px'>
                            <Comments />
                        </Box>
                    </Box>
                </Box>

            </Center>

            <Box>
                <Center>

                    <Link style={{ textDecoration: 'none' }} to={`/editcourse`} >
                        <Button>Edit Course</Button>
                    </Link>
                </Center>
            </Box>

            <Footer2 />



        </>
    )

}