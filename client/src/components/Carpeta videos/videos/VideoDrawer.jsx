import React, { useEffect } from "react";
import { getCourseDetail } from "../../../redux/actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Footer2 from "../../footer/Footer2";
import { Box, Center, Text, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Input} from '@chakra-ui/react';
import Comments from "../comments/Comments";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useDisclosure } from '@chakra-ui/react';
import EditCourseDrawer from "../../editcourse/EditCourse2";


export default function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Open
        </Button>
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
              <EditCourseDrawer/>

            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  };