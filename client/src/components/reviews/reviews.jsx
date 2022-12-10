import React, { useEffecct } from "react";
import { useSeletor, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const Reviews = ({id}) => {
    const dispatch = useDispatch();
    const { reviews } = useSelector((state) => state.reviews);
    
    useEffect(() => {
        dispatch(getReviews(id));
    }, [id]);
    
    return (
        <div>
        {reviews.map((review) => (
            <div key={review.id}> 
            <p>{review.comment}</p>
            <p>{review.rating}</p>
            </div>
        ))}
        </div>
    );
    }

export default Reviews;
