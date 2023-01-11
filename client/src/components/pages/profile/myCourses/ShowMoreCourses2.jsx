import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByStudent, getOrders } from "../../../../redux/actions";
import Navbar from "../../../navbar/Navbar"
import CourseCard2 from "../../../card/CourseCard2";
import { Card } from "@chakra-ui/react";
import CourseCard from "../../../card/CourseCard";



const ShowMoreCourses2 = () => {
  const dispatch = useDispatch();

  // const { user } = useAuth();
  const userDB = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    dispatch(getCoursesByStudent(userDB?.id));
    // dispatch(getOrders(userDB?.id))
  }, [dispatch]);
  let cursos = useSelector((state) => state.purchasedCourses);

  // let orders = useSelector((state) => state.allOrders);

  // console.log("ORDERS", orders)

  return (
    <>
      <Navbar />
      <div>
        {
          cursos?.map(e => {
            return (
              // <CourseCard2
              //   key={e.id}
              //   name={e.name}
              //   id={e.id}
              //   price={e.price}
              // />
              <CourseCard
                key={e.id}
                name={e.name}
                teacherName={e.teacherName}
                id={e.id}
                description={e.description.slice(0, 50) + "..."}
                price={e.price}
                rating={e.rating}
                categories={e.categories.map(e => e.name)}
                image={e.image}
                students={e.students}
                hidden={true}
              />
            )
          })
        }
      </div>
    </>
  );
};

export default ShowMoreCourses2;
