import React, { useEffect, useState } from "react";
import { getCourseDetail, getReviews } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./CourseDetail.module.css";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";
import style from "../detail/CourseDetail.module.css";


import CardReview from "../review/cardReview";
import PostReview from "../review/postReview";
import {
    Box,
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
    Divider,
    SimpleGrid,
    Center,
    Grid,
    GridItem
} from "@chakra-ui/react";

import { RiArrowGoBackLine } from "react-icons/ri";

export default function Detail2() {
    const dispatch = useDispatch();

    const { id } = useParams();

    const [update, setUpdate] = useState();

    const myCourse = useSelector((state) => state.courseDetail);
    useEffect(() => {
        dispatch(getCourseDetail(id));
        dispatch(getReviews(id))
    }, [dispatch, id, update]);

    const allReviews = useSelector((state) => state.reviews);


    // Crea el estado para almacenar los comentarios
    const [comments, setComments] = useState([]);

    // Manejador de eventos para enviar un nuevo comentario
    const handleSubmit = (event) => {
        event.preventDefault();
        // Obtener el valor del input y agregarlo al estado de comentarios
        const comment = event.target.elements.comment.value;
        setComments([...comments, comment]);
    };


    return (
        <>
            <div>

                <Navbar />
                <Link style={{ textDecoration: "none" }} to="/course">
                    <Button colorScheme="blue" leftIcon={<RiArrowGoBackLine />}>
                        Back
                    </Button>
                </Link>



                <Box>




                    {myCourse ? (
                        <div>
                            <div className={style.container}>
                                <div>
                                    <SimpleGrid columns={[2, null, null]}>
                                        <Box maxW="80%" borderWidth='2px' borderRadius='lg' overflow='hidden' padding="5">
                                            <div className={style.miniature}>
                                                <img src="https://www.unapiquitos.edu.pe/contenido/opiniones/recursos/docenteClases.jpg" />
                                                <p className="text-title">Price: {`${"$" + myCourse?.price}`}</p>
                                                <p>Teacher:{myCourse?.teacherName}</p>
                                                <ButtonGroup spacing="2">
                                                    <Button variant="solid" colorScheme="blue">
                                                        Buy now
                                                    </Button>
                                                    <Button variant="ghost" colorScheme="blue">
                                                        Add to cart
                                                    </Button>
                                                </ButtonGroup>
                                            </div>
                                        </Box>

                                        <Box maxW="100%" borderWidth='2px' borderRadius='lg' overflow='hidden' padding="5">
                                            <Grid templateColumns='repeat(1, 1fr)' gap={6} templateRows='repeat(5, 1fr)' >
                                                <GridItem w='100%' h='10' bg='grey'> Video 1</GridItem>
                                                <GridItem w='100%' h='10' bg='grey'> Video 2</GridItem>
                                                <GridItem w='100%' h='10' bg='grey'> Video 3</GridItem>
                                                <GridItem w='100%' h='10' bg='grey'> Video 4</GridItem>
                                                <GridItem w='100%' h='10' bg='grey'> Video 5</GridItem>
                                            </Grid>


                                        </Box>
                                    </SimpleGrid>

                                    <span className={style.titulo}>
                                        {`${myCourse?.name}`} {`${myCourse?.rating}`}
                                        <br />
                                    </span>
                                    <br />

                                    <div>
                                        <div>
                                            <div className={style.grid}>
                                                <p>{myCourse?.description}</p>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Videos del curso */}
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
                                            {myCourse?.videos?.map((e, i) => (
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
                                                                <Link to={`/detailVideo/${e.courseId}/${e.id}`}>
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
                    ) : (
                        <p>Loading..</p>
                    )}

                </Box>


                <Divider paddingTop={5} />

                <Heading padding="5">Reviews</Heading>
                <Center>
                    <SimpleGrid
                        spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' padding={5}
                    >
                        {allReviews ? allReviews.map((r, index) => {
                            return (
                                <CardReview
                                    key={index}
                                    user={r.user.fullName}
                                    score={r.score}
                                    title={r.title}
                                    comments={r.comments}
                                />)
                        }) : <p>No reviews</p>}
                    </SimpleGrid>
                    <Box
                        padding="5">
                        <PostReview
                            update={update}
                            setUpdate={setUpdate}
                        />
                    </Box>
                </Center>

                <Box borderStyle="solid" border="1px">

                    {/* Forma para enviar un comentario */}
                    <form onSubmit={handleSubmit}>
                        <input display="none" borderStyle="solid" borderWidth="30" name="comment" />
                        <button type="submit">Enviar comentario</button>
                    </form>
                    {/* Muestra los comentarios enviados */}
                    {comments.map((comment) => (
                        <div key={comment}>{comment}</div>
                    ))}

                </Box>
                <Footer2 />
            </div >
        </>
    )
}

