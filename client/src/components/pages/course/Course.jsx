import React, { useState } from "react";
import Navbar from "../../navbar/Navbar";
import CourseCard from "../../card/CourseCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { getAllCourses } from "../../../redux/actions/index.js";
import style from './Course.module.css';
import Filters from "../../filters/filters.jsx";
import Footer2 from "../../footer/Footer2"
import SearchBar from "../../searchbar/SearchBar.jsx";


export default function Course() {

  const courses = useSelector(state => state.courses);
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    // if (!courses.length) {
    dispatch(getAllCourses());
    // }
  }, [dispatch])


  return (
    <div>
      <Navbar />
      <SearchBar />
      <Filters update={update} setUpdate={setUpdate} />
      <div className={style.cards}>
        {
          courses.map((course) => {
            if (course.archieved === false && course.status === "APPROVED" && course.videos.length) {
              return (
                <CourseCard
                  key={course.id}
                  name={course.name}
                  teacherName={course.teacherName}
                  id={course.id}
                  Description={course.description}
                  price={course.price}
                  rating={course.rating}
                  categories={course.categories}
                  image={course.image}
                  archieved={course.archieved}
                  status={course.status}
                />)
            }
          })
        }
      </div>
      <Footer2 />
    </div>
  )
}