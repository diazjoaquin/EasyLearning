import React, { useEffect, useState } from "react";
import { getCourseDetail, getReviews } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./CourseDetail.module.css";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";
import style from "../detail/CourseDetail.module.css";


import CardReview from "../Review/cardReview";
import PostReview from "../Review/postReview";
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
  SimpleGrid
} from "@chakra-ui/react";

import { RiArrowGoBackLine } from "react-icons/ri";

export default function Detail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [update, setUpdate] = useState();

  const myCourse = useSelector((state) => state.courseDetail);
  useEffect(() => {
    dispatch(getCourseDetail(id));
    dispatch(getReviews(id))
  }, [dispatch, id, update]);

  const allReviews = useSelector((state) => state.reviews);

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
                <span className={style.titulo}>
                  {`${myCourse?.name}`} {`${myCourse?.rating}`}
                </span>
                <div>
                  <div>
                    <div className={style.grid}>
                      <p>Descripcion:{myCourse?.description}</p>
                      <div className={style.miniature}>
                        <img src="https://www.unapiquitos.edu.pe/contenido/opiniones/recursos/docenteClases.jpg" />
                        <p class="text-title">{`${"$" + myCourse?.price}`}</p>
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
        <Divider paddingTop={5} />
        <Heading padding={5}>Reviews</Heading>
        <SimpleGrid
          spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' padding={5}
        >
          {allReviews ? allReviews.map((r, index) => {
            return (
              <CardReview
                key={index}
                user={r.user.fullName}
                score={r.score}
                comments={r.comments}
              />)
          }) : <p>No reviews</p>}
        </SimpleGrid>
        <Box
          padding={5}>
          <PostReview
            update={update}
            setUpdate={setUpdate}
          />
        </Box>
        <Footer2 />
      </div >
    </>
  )
}

