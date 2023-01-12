import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer2 from "../../footer/Footer2";
import {
  Box,
  Heading,
  Img,
  Text,

  VStack,
} from '@chakra-ui/react';
import style from "./About.module.css"



export default function About() {
  window.scrollTo({ top: 0, left: 0 });
  return (
    <div  >
      <Navbar>

      </Navbar>
      <div >

        <Box margin="50px" zIndex="1" width="100%" position="absolute" height="100%"   >

          <Heading as="h2">Welcome to easyLearning!</Heading>

          <Box display="flex" float="right" marginRight="300px">
            <Img position='absolute' right='20' width="800px" src="https://fastfs1.podbean.com/site/www-v2/images/start/about-us-banner@2x_resize_1x.jpg" alt="aboutus" />


          </Box>
          <Box padding="25px" width="500px">
            <Text as="p" fontSize="lg">
              Welcome to our online learning platform. We are a company dedicated to providing our students with quality and affordable education through the internet.
            </Text>
          </Box>
          <Box padding="25px" width="500px" display="flex" flex-direction="row">
            <Text as="p" fontSize="lg">
              Our goal is to help people acquire new skills and knowledge to improve their careers and their lives. We offer a wide range of online courses in areas such as technology, business, creativity, and soft skills.
            </Text>
          </Box>

          <Box padding="25px" width="500px">

            <Text as="p" fontSize="lg">
              We have a team of highly qualified and experienced teachers, who have been selected for their knowledge and their ability to communicate it clearly and effectively. All of our courses are designed with a practical focus and based on the learning methodology of problem-solving.
            </Text>
          </Box>

          <Box padding="25px" width="70%">

            <Text as="p" fontSize="lg">
              In addition to online courses, we also offer in-person workshops and online events to help our students connect with other professionals and share knowledge. We believe that learning is a continuous process and we are committed to providing our students with the tools and support they need to achieve their goals and succeed.
              Our platform is easy to use and available at all times, which means you can study at your own pace and from anywhere. Additionally, our support team is available to help you with any questions or issues you may have during your course.
            </Text>
          </Box>

          <Box padding="25px" width="70%">


          </Box>

        </Box>

        <br />
        <br />





      </div>
      <div className={style.aboutcontent}>

        <Box >
          <Footer2>
          </Footer2>
        </Box>
      </div>

    </div>



  )
}