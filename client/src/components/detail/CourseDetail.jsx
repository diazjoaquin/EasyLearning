import React, { useEffect } from "react";
import { getCourseDetail } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./CourseDetail.module.css";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";
import style from "../detail/CourseDetail.module.css";


// import CardReview from "../Review/cardReview";
// import PostReview from "../Review/postReview";
import {
  Center,
  Box,
  Badge,
  Button,
  Image,
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

export default function Detail() {
  const dispatch = useDispatch();

  const { id } = useParams();

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
                    </div>

                    

                    {/* <img src="https://www.unapiquitos.edu.pe/contenido/opiniones/recursos/docenteClases.jpg" /> */}
                    {/* Teacher: */}

                    {/* <h3>{myCourse?.teacher}</h3>
                          <h3>
                          {" "}
                          <strong> Category: </strong>{" "}
                        </h3> */}

                    {/* {myCourse.categories?.map((e, i) => (
                          <h1 key={i}>{e.name}</h1>
                        ))} */}
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
        ) : (
          <p>Loading..</p>
        )}

        {/* <CardReview />
        <PostReview /> */}

        <Footer2 />
      </div>
    </>
  );
}
