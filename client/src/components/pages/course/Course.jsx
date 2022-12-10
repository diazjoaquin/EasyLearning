import React from "react";
import Navbar from "../../navbar/Navbar";
import CourseCard from "../../card/CourseCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getAllCourses } from "../../../redux/actions/index.js";
import style from './Course.module.css';

export default function Course() {

    const courses = useSelector(state => state.courses);
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(getAllCourses());
    }, [dispatch])


    return (
        <div>
            <Navbar/>
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
                                categories={course.categories[0].name}
                            />)
                        })
                }
                
            </div>
        </div>
    )
}