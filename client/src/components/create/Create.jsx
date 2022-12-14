import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createCourse, getCategories } from "../../redux/actions/index";

import { Box,  } from '@chakra-ui/react';
// import { CiStar } from "react-icons";

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

    const [errors, setError] = useState({})

    const [newInput, setNewInput] = useState({ name: "" })

    const [input, setInput] = useState({
        name: "",
        description: "",
        teacher: "",
        // video: [],
        category: [],
    })
    function addCategory(e) {
        setInput({
            ...input,
            category: [...category, e.target.value]
        })
    }
    function handleChange2(e) {
        setNewInput({
            ...newInput,
            [e.target.name]: e.target.value
        })
    }
    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setError(
            validateForm({
                ...input,
                [e.target.name]: e.target.value,
            })
        )
    }
    function handleSelect(e) {
        setInput({
            ...input,
            category: [...input.category, e.target.value],
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (
            !errors.name &&
            !errors.description &&
            !errors.teacher &&
            !errors.category//&&
            //!errors.video
        ) {
            alert("Your course has been created succesfully");
            dispatch(createCourse(input))
            setInput({
                name: "",
                description: "",
                teacher: "",
                //video: [],
                category: [],
            })
        } else {
            return alert("Someting went wrong. Please try aaing.")
        }
        history.push("/")
    }
    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


    return (
        <div>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <div>

                    <div>
                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        > Create your course
                        </Box>

                    </div>
                    <div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div>
                                <label>Name: </label>
                                <input
                                    type="text"
                                    value={input.name}
                                    name="name"
                                    placeholder="HTML course..."
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                                <div>
                                    <p>{errors.name}</p>
                                </div>
                            </div>
                            <div>
                                <label>Description: </label>
                                <input
                                    type="text"
                                    value={input.name}
                                    name="description"
                                    placeholder="Take this course and learn..."
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                                <div>
                                    <p>{errors.description}</p>
                                </div>
                            </div>
                            <div>
                                <label>Teacher: </label>
                                <input
                                    type="text"
                                    value={input.name}
                                    name="teacher"
                                    placeholder="Fermin Solaberrieta..."
                                    onChange={(e) => handleChange(e)}
                                    required
                                />
                                <div>
                                    <p>{errors.teacher}</p>
                                </div>
                            </div>

                            {/* ******************************* */}
                            {/* <div>
                        <label>Category: </label>
                            <input 
                            type="text"
                            value={input.name}
                            name="category"
                            placeholder="Tejido punto croche"
                            onChange={(e) => handleChange(e)}
                            required
                             />
                             <div>
                                <p>{errors.category}</p>
                            </div>
                            
                            


                        </div> */}

                            {/* ************************************** */}

                            {/* <div>
                        <div>
                        <label>Select Categories</label>
                        <select onChange={(e) => handleSelect(e)}>
                        {
                            category?.map((cat) =>{
                                return(
                                    <option key={cat} name={cat}>
                                     {cat}
                                    </option>
                                )
                            })
                        }
                        </select>
                        <div>
                            <h4>You have select that: </h4>
                            {
                                input.category?.map((e) =>{
                                    <div>
                                        <h5>{e}</h5>
                                    </div>
                                })
                            }
                        </div>
                        </div>
                        {/* <label>Category: </label>
                            <input 
                            type="text"
                            value={input.name}
                            name="category"
                            placeholder="Programacion..."
                            onChange={(e) => handleChange2(e)}
                            required
                             />
                             <div>
                                <p>{errors.category}</p>
                            </div> 
                            <button value = {newInput} onClick={(e) => addCategory(e)}></button>
                                                      
                        </div> */}
                            {/* <div>
                        <label>Video: </label>
                            <input 
                            type="text"
                            value={input.name}
                            name="video"
                            placeholder="www.video.com, www.video2.com"
                            onChange={(e) => handleChange(e)}
                            required
                             />
                             <div>
                                <p>{errors.video}</p>
                            </div>                           
                        </div> */}
                            
                            
                            {/* <Box display='flex' mt='2' alignItems='center'>
                                {Array(5)
                                    .fill('')
                                    .map((_, i) => (
                                        <CiStar
                                            key={i}
                                            color={i < 5 ? 'teal.500' : 'gray.300'}
                                        />
                                    ))}
                                <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                    {4} reviews
                                </Box>
                            </Box> */}

                            
                            <div>
                                <Link to="/course">
                                    <button>Cancel</button>
                                </Link>
                                <button type="submit">
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Box>

        </div>
    )
}

export default Create;