import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../../redux/actions";
// import { useParams } from "react-router-dom";

// const Reviews = ({id}) => {
//     const dispatch = useDispatch();
//     const { reviews } = useSelector((state) => state.reviews);
    
//     useEffect(() => {
//         dispatch(getReviews(id));
//     }, [id]);
    
//     return (
//         <div>
//         {reviews.map((review) => (
//             <div key={review.id}> 
//             <p>{review.comment}</p>
//             <p>{review.rating}</p>
//             </div>
//         ))}
//         </div>
//     );
//     }

// export default Reviews;
