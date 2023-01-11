// import React, { useEffect, useState } from "react";
// import { getCourseDetail } from "../../../redux/actions";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import Navbar from "../../navbar/Navbar";
// import Footer2 from "../../footer/Footer2";
// import { Box, Center, Text, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Input } from '@chakra-ui/react';
// import Comments from "../comments/Comments";
// import { RiArrowGoBackLine } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
// import { useDisclosure } from '@chakra-ui/react';
// // import DrawerExample from "./VideoDrawer";


// export default function DetailVideo() {
//   const { id, courseId } = useParams();

//   const dispatch = useDispatch();
//   const myCourse = useSelector(state => state.courseDetail)
//   const [update, setUpdate] = useState(false)

//   let Vd = myCourse?.videos?.filter(e => e.id == id)
//   Vd = Vd && Vd[0]

//   useEffect(() => {
//     dispatch(getCourseDetail(courseId));
//   }, [dispatch, id, update])
  
//   return (
//     <>
//       <Navbar />
//       <Link style={{ textDecoration: 'none' }} to='/course'>
//         <Button colorScheme='blue' leftIcon={<RiArrowGoBackLine />}>Back</Button>
//         {/* <button className="back">Back</button> */}
//       </Link>
//       <Center>
//         <Box maxW='800px' borderWidth='1px' borderRadius='lg' overflow='hidden'>
//           <Box name="Name Video" >
//             <Center>
//               <Box borderWidth='1px' size='lg' fontSize='36px' alignItems="center" >
//                 {Vd?.nameVideo}
//               </Box>
//               <br />
//               <br />
//             </Center>
//             <Box >
//               <Center>
//                 <Text fontSize='24px'> {Vd?.description}</Text>
//               </Center>
//               <br>
//               </br>
//             </Box>
//             <Box>
//               <Center>
//                 <iframe width="760" height="515" src="https://www.youtube.com/embed/M7lc1UVf-VE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
//                 </iframe>
//               </Center>
//             </Box>
//             <br>
//             </br>
//             {/* <Box fontSize='36px' >
//               {myCourse?.review}
//             </Box>
//             <br>
//             </br> */}
//             <Box fontSize='24px'>
//               <Comments update={update} setUpdate={setUpdate} videoId={Vd?.id} comments={Vd?.comments} />
//             </Box>
//           </Box>
//         </Box>
//         {/* <Box>
//                 <Center>
//                 <DrawerExample/>
//                 <Link style={{ textDecoration: 'none' }} to='/editcourse'>
//                 <Button>Edit Course</Button>
//                 </Link>
//                 </Center>
//               </Box> */}
        
//       </Center>
//       <Footer2 />
//     </>
//   )
// }

import React, { useEffect, useState } from "react";
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
// import DrawerExample from "./VideoDrawer";
import ReactPlayer from 'react-player';
import Logo from "../../../components/navbar/easylearning.png"


export default function DetailVideo() {
  const { id, courseId } = useParams();

  const dispatch = useDispatch();
  const myCourse = useSelector(state => state.courseDetail)
  const [update, setUpdate] = useState(false)

  let Vd = myCourse?.videos?.filter(e => e.id == id)
  Vd = Vd && Vd[0]
  console.log("franquito", Vd)
  useEffect(() => {
    dispatch(getCourseDetail(courseId));
  }, [dispatch, id, update])

  return (
    <>
      <Navbar />

      <Link style={{ textDecoration: 'none' }} to='/course'>
        <Button colorScheme='blue' leftIcon={<RiArrowGoBackLine />}>Back</Button>
        
      </Link>

      <Box>
        <Box margin="50px">
          <Center>
            <ReactPlayer url={Vd?.urlVideo} playing controls width="60%" />
          </Center>
        </Box>
        <Box margin="50px" name="Name Video" >
          <Box fontSize='36px' alignItems="center" >
            {Vd?.nameVideo}
          </Box>
          <br />
          <img src={Logo} alt="Logo" width="12%" />
          <br />
          <Box bg="gray.100" borderRadius="15px">
            <Text color="black" fontSize='24px'> {Vd?.description}</Text>
            <br>
            </br>
          </Box>
          <br>
          </br>
        </Box>
      </Box>
      <Box fontSize='24px' margin="15">
        <Comments update={update} setUpdate={setUpdate} videoId={Vd?.id} comments={Vd?.comments} />
      </Box>

      <Footer2 />
    </>
  )
}