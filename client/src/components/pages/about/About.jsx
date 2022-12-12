import React from "react";
import Navbar from "../../navbar/Navbar";
import Footer2 from "../../footer/Footer2";
import {
    Box,
    Heading,

    Text,

    VStack,
} from '@chakra-ui/react';
import style from "./About.module.css"



export default function About() {
    return (
        <div >
            <Navbar>

            </Navbar>
            <div >

                <Box margin="50px" zIndex="1" width="100%" position="absolute" height="100%"   >

                    <Heading as="h2">Welcome to easyLearning!</Heading>

                    <Box display="flex" float="right" marginRight="300px">
                        <img width="800px" src="https://fastfs1.podbean.com/site/www-v2/images/start/about-us-banner@2x_resize_1x.jpg" alt="aboutus" />


                    </Box>
                    <Box padding="25px" width="500px">
                        <Text as="p" fontSize="lg">

                            We aim to offer our customers a variety of the latest [PRODUCTS CATEGORY NAME].
                            We’ve come a long way, so we know exactly which direction to take when supplying
                            you with high quality yet budget-friendly products. We offer all of this while
                            providing excellent customer service and friendly support.

                        </Text>
                    </Box>

                    <Box padding="25px" width="500px" display="flex" flex-direction="row">

                        <Text as="p" fontSize="lg">
                            We always keep an eye on the latest trends in [PRODUCTS CATEGORY NAME] and put our customers’
                            wishes first. That is why we have satisfied customers all over the world, and are thrilled to
                            be a part of the [PRODUCTS CATEGORY NAME] industry.


                        </Text>
                    </Box>


                    <Box padding="25px" width="5000px">

                        <Text as="p" fontSize="lg">
                            The interests of our customers are always top priority for us, so we hope you will enjoy our products as much as we enjoy making them available to you.

                        </Text>
                    </Box>

                </Box>






            </div>
            <div className={style.aboutcontent}>

                <Box position="realtive">
                    <Footer2>
                    </Footer2>
                </Box>
            </div>

        </div>



    )
}