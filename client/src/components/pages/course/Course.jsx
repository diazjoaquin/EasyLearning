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
import Pagination from "../pagination/Pagination";


export default function Course() {

  // pagination elements:
  
  const courses = useSelector(state => state.courses);
  const [ coursesPerPage ] = useState(6);
  const [ currentPage, setCurrentPage ] = useState(1);
  const last = currentPage * coursesPerPage;
  const first = last - coursesPerPage;
  const currentCourses = courses.slice(first, last);
  const numberOfPages = courses.length/coursesPerPage
  const pagination = (numberPage) => {
      setCurrentPage(numberPage);
      document.getElementById(`${currentPage}`).classList.remove('active');
      document.getElementById(`${numberPage}`).classList.toggle('active');
  }

  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    // if (!courses.length) {
    dispatch(getAllCourses());
    // }
  }, [dispatch])

      // next y previous buttons:

      const handleNext = (event) => {
        event.preventDefault();
        currentPage <= numberOfPages ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage);
        document.getElementById(`${currentPage}`).classList.remove('active');
        currentPage <= numberOfPages ? document.getElementById(`${currentPage + 1}`).classList.toggle('active') : 
        document.getElementById(`${currentPage}`).classList.toggle('active');
    }

    const handlePrevious = (event) => {
        event.preventDefault();
        currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage);
        document.getElementById(`${currentPage}`).classList.remove('active');
        currentPage > 1 ? document.getElementById(`${currentPage - 1}`).classList.toggle('active') :
        document.getElementById(`${currentPage}`).classList.toggle('active');
    }


  return (
    <div>
      <Navbar />
      <SearchBar />
      <Filters update={update} setUpdate={setUpdate} />
        <Pagination coursesPerPage={coursesPerPage} courses={courses.length} pagination={pagination} currentPage={currentPage}
                  handlePrevious={handlePrevious} handleNext={handleNext}/>
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