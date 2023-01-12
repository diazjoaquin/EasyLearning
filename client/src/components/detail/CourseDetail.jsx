import React, { useEffect, useState } from "react";
import {
  getCourseDetail,
  getReviews,
  getScores,
  getDate,
  addToCart,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer2 from "../footer/Footer2";

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
  Divider,
  SimpleGrid,
  Center,
  CardFooter,
  Flex,
  Image,
  Select,
} from "@chakra-ui/react";

import { RiArrowGoBackLine } from "react-icons/ri";
import { StarIcon } from "@chakra-ui/icons";

export default function Detail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [update, setUpdate] = useState();

  const myCourse = useSelector((state) => state.courseDetail);
  useEffect(() => {
    dispatch(getCourseDetail(id));
    dispatch(getReviews(id));
  }, [dispatch, id, update]);
  const userDB = JSON.parse(localStorage.getItem("user"))

  const allReviews = useSelector((state) => state.reviews);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: myCourse.id,
        teacher: myCourse.teacher,
        name: myCourse.name,
        description: myCourse.description,
        rating: myCourse.rating,
        price: myCourse.price,
        categories: myCourse.categories,
      })
    );
  };

  const handleFilteredScore = (e) => {
    dispatch(getScores(e.target.value));
  };

  const handleFilteredDate = (e) => {
    e.preventDefault(e);
    dispatch(getDate(e.target.value));
  };

  return (
    <Box padding={5}>
      <Navbar />
      <Divider paddingTop={5} />
      <Link style={{ textDecoration: "none" }} to="/course">
        <Button leftIcon={<RiArrowGoBackLine />} marginTop={5} />
      </Link>

      {myCourse ? (
        <Box>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              // objectFit='cover'
              maxW={{ base: "100%", md: "300px" }}
              maxH="250px"
              mt={"30px"}
              src={`${myCourse?.image}`}
              alt=""
            />

            <Stack>
              <CardBody>
                <Heading size="md">{`${myCourse?.name}`} </Heading>
                <Text size="md">
                  {" "}
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        value={myCourse?.rating}
                        key={i}
                        color={i < myCourse.rating ? "teal.500" : "gray.300"}
                      />
                    ))}{" "}
                </Text>

                <Text py="2">{myCourse?.description}</Text>
                <Heading size="sm">Teacher: {myCourse?.teacherName}</Heading>
                <Text color="blue.600" fontSize="2xl">
                  {`${"$" + myCourse?.price}`}
                </Text>
              </CardBody>
              <CardFooter>
                {
                  myCourse?.students?.includes(userDB?.id)
                    ? undefined
                    : <><Link to={"/cart"}>
                      <Button
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => handleAddToCart()}
                      >
                        Buy now
                      </Button>
                    </Link>
                      <Button
                        variant="ghost"
                        colorScheme="blue"
                        onClick={() => handleAddToCart()}
                      >
                        Add to cart
                      </Button>
                    </>
                }

              </CardFooter>
            </Stack>
          </Card>

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
                    myCourse?.students?.includes(userDB?.id) ?
                      <Link key={i} to={`/detailVideo/${e.courseId}/${e.id}`}>
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
                                <Text>{e.nameVideo}</Text>
                                <Text>{e.description}</Text>
                                <Text>{e.urlVideo}</Text>
                              </Text>
                            </CardBody>
                          </Stack>
                        </Card>
                      </Link>
                      :
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
                              <Text>{e.nameVideo}</Text>
                              <Text>{e.description}</Text>
                            </Text>
                          </CardBody>
                        </Stack>
                      </Card>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </Box>
      ) : (
        <p>Loading..</p>
      )}
      <Heading padding={5} size="md">
        Reviews {myCourse?.rating}{" "}
        {Array(5)
          .fill("")
          .map((_, i) => (
            <StarIcon
              value={myCourse?.rating}
              key={i}
              color={i < myCourse.rating ? "teal.500" : "gray.300"}
            />
          ))}
      </Heading>
      <Flex>
        <Box spacing={1} padding={5}>
          <Flex paddingBottom={5}>
            <Select
              name="score"
              width="150px"
              onChange={(e) => handleFilteredScore(e)}
            >
              <option selected hidden disabled value="">
                Select a rating
              </option>
              <option value={1}>1 ⭐</option>
              <option value={2}>2 ⭐</option>
              <option value={3}>3 ⭐</option>
              <option value={4}>4 ⭐</option>
              <option value={5}>5 ⭐</option>
              <option value={"All"}>All reviews</option>
            </Select>

            <Select
              width="150px"
              onChange={(e) => handleFilteredDate(e)}
              paddingLeft="20px"
            >
              <option selected hidden disabled value="">
                Order
              </option>
              <option value={"Newest"}>Newest</option>
              <option value={"Oldest"}>Oldest</option>
            </Select>
          </Flex>
          {allReviews ? (
            allReviews.map((r, index) => {
              return (
                <CardReview
                  key={index}
                  user={r.user.fullName}
                  score={r.score}
                  title={r.title}
                  comments={r.comments}
                  date={r.date}
                />
              );
            })
          ) : (
            <p>No reviews</p>
          )}
        </Box>
        <Box paddingLeft={200}>
          <PostReview update={update} setUpdate={setUpdate} students={myCourse?.students} />
        </Box>
      </Flex>
      <Footer2 />
    </Box>
  );
}
