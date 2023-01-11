import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../../redux/actions";
import Navbar from "../../../navbar/Navbar"
import CourseCard2 from "../../../card/CourseCard2";
import { Card } from "@chakra-ui/react";



const ShowMoreCourses2 = () => {
  const dispatch = useDispatch();

  // const { user } = useAuth();
  const userDB = JSON.parse(localStorage.getItem("user"))

  useEffect(() => {
    //dispatch(getCoursesByStudent(userDB?.id));
    dispatch(getOrders(userDB?.id))
  }, [dispatch]);
  //let cursos = useSelector((state) => state.purchasedCourses);

  console.log("USERSDSDSD", userDB.id)
  let orders = useSelector((state) => state.allOrders);

  console.log("ORDERS", orders)

  return (
    <>
      <Navbar />
      <div>
        {
          orders.orderrs?.map(e => {
            return (
              <CourseCard2
                key={e.id}
                name={e.name}              
                id={e.id}                
                price={e.price}               
              />
            )
          })
        }     
      </div>
    </>
  );
};

export default ShowMoreCourses2;
