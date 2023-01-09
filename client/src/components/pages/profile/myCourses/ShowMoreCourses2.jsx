import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByStudent } from "../../../../redux/actions";
import Navbar from "../../../navbar/Navbar"
import CourseCard from "../../../card/CourseCard";

const ShowMoreCourses2 = () => {
  const dispatch = useDispatch();
  const userDB = JSON.parse(localStorage.getItem("user"))
  useEffect(() => {
    dispatch(getCoursesByStudent(userDB?.id));
  }, [dispatch]);
  let cursos = useSelector((state) => state.purchasedCourses);

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

export default ShowMoreCourses2;
