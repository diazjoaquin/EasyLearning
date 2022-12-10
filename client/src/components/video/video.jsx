<<<<<<< HEAD
import React from "react";
import Review from "../reviews/reviews";


const Video = ({ id, video, review }) => {
    return (
       
        <div>   
            
        </div>
    );
};

=======
import React, { useEffect } from "react";
import Review from "../../../../server/src/Models/Review";
import Reviews from "../reviews/reviews";

const Video = (/* {id, video, reviews} */) => {
    return(
        <div>
            {/* {
                video?.map(e => {
                    return(
                        <p>{e}</p>
                    )
                })
            }
            
            <Reviews reviews={reviews} id={id}/> */}
        </div>
    )
}
>>>>>>> origin/Santi

export default Video;