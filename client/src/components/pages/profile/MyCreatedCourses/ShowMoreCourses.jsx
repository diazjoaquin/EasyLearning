import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoursesByTeacher } from "../../../../redux/actions";
import Navbar from "../../../navbar/Navbar"
import CourseCard from "../../../card/CourseCard";

const ShowMoreCourses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCoursesByTeacher(1)); //id hardcodeado
  }, [dispatch]);
  let cursos = useSelector((state) => state.coursesCreateUser);

  return (
    <>
      <Navbar />
      <div>

        {
          cursos?.map(e => {
            return (
              <CourseCard
                key={e.id}
                name={e.name}
                teacher={e.teacher}
                id={e.id}
                Description={e.description}
                price={e.price}
                rating={e.rating}
                categories={e.categories}
                image={e.image}
              />
            )
          })
        }
      </div>
    </>
  );
};

export default ShowMoreCourses;
