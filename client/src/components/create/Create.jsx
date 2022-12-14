import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createCourse, getCategories } from "../../redux/actions/index"
import Navbar from "../navbar/Navbar.jsx"
import Footer2 from "../footer/Footer2.jsx"
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button
} from '@chakra-ui/react'


function validateForm(input) {
  let errors = {} //manejo de errores form

  //verifico name
  if (!input.name) {
    errors.name = "You must type a name";
  } else {
    errors.name = "";
  }
  //verifico description 
  if (!input.description) {
    errors.description = "You must type a description";
  } else {
    errors.description = "";
  }
  //verifico teacher
  if (!input.teacher) {
    errors.teacher = "You must type a teacher";
  } else {
    errors.teacher = "";
  }
  //verifico category
  if (!input.category) {
    errors.category = "You must type a category";
  } else {
    errors.category = "";
  }
  //verifico videos
  /* if (!input.video) {
      errors.video = "You must upload a video";
  } else {
      errors.video = "";
  } */
}
const Create = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const category = useSelector((state) => state.categories).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  )

  // const [errors, setError] = useState({})

  // const [newInput, setNewInput] = useState({ name: "" })

  const [input, setInput] = useState({
    name: "",
    description: "",
    teacher: "",
    // video: [],
    category: [],
    price: null
  })
  // function addCategory(e) {
  //   setInput({
  //     ...input,
  //     category: [...category, e.target.value]
  //   })
  // }

  // function handleChange2(e) {
  //   setNewInput({
  //     ...newInput,
  //     [e.target.name]: e.target.value
  //   })
  // }
  // function handleChange(e) {
  //   setInput({
  //     ...input,
  //     [e.target.name]: e.target.value,
  //   });
  //   setError(
  //     validateForm({
  //       ...input,
  //       [e.target.name]: e.target.value,
  //     })
  //   )
  // }
  // function handleSelect(e) {
  //   setInput({
  //     ...input,
  //     category: [...input.category, e.target.value],
  //   });
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (
  //     !errors.name &&
  //     !errors.description &&
  //     !errors.teacher &&
  //     !errors.category//&&
  //     //!errors.video
  //   ) {
  //     alert("Your course has been created succesfully");
  //     dispatch(createCourse(input))
  //     setInput({
  //       name: "",
  //       description: "",
  //       teacher: "",
  //       //video: [],
  //       category: [],
  //     })
  //   } else {
  //     return alert("Someting went wrong. Please try aaing.")
  //   }
  //   history.push("/")
  // }

  // useEffect(() => {
  //   // dispatch(getCategories())
  // }, [/* dispatch */])

  // "name": "Curso de Fermin5",
  // "description": "nada de description",
  // "category": "programmin",
  // "teacher": "Fermin",
  // "price": 100

  const handelChange = () => { }

  return (
    <div>
      <Navbar />
      <Box display='flex' justifyContent="center" my="20" >
        <h1>Falta hardcodear el teacher</h1>
        <Box w="50%" border="1px" borderRadius="20" p="10">
          <FormControl display='flex' flexDirection="column" alignItems="center" >
            <FormLabel>Name:</FormLabel>
            <Input name="name" onChange={handelChange} />
            <FormLabel>Description:</FormLabel>
            <Input name="description" onChange={handelChange} />
            <FormLabel>Category:</FormLabel>
            <Input name="category" onChange={handelChange} />
            <FormLabel>Price:</FormLabel>
            <Input name="price" onChange={handelChange} />
            <Button mt={4} colorScheme='teal' type='submit' >
              Submit
            </Button>
          </FormControl>
        </Box>
      </Box>
      <Footer2 />
    </div >
  )
}

export default Create;