import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import CourseCard from "../../card/CourseCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getAllCourses } from "../../../redux/actions/index.js";
import style from './Course.module.css';
import Filters from "../../filters/filters.jsx";

export default function Course() {

    const courses = useSelector(state => state.courses);
    const dispatch = useDispatch();
    const[update, setUpdate] = useState(false);
    
    useEffect(() => {
        if(!courses.length){
           dispatch(getAllCourses()); 
        }
    }, [dispatch])


    return (
        <div>
            <Navbar/>
            <Filters update={update} setUpdate={setUpdate}/>
            <div className={style.cards}>
                {
                    courses.map((course) => {
                        return (
                            <CourseCard
                                key={course.id}
                                name={course.name}
                                teacher={course.teacher}
                                id={course.id}
                                Description={course.description}
                                price={course.price}
                                Rating={course.rating}
                                categories={course.categories}
                            />)
                        })
                }
                
            </div>
        </div>
    )
}