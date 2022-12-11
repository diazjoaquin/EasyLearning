import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourseDetail } from "../../../redux/actions";
import Comments from "../comments/Comments";

const Videos = () => {
    const idDetail = useParams().id;
    const videos = useSelector(state => state.courseDetail).videos;
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(!videos){
            dispatch(getCourseDetail(idDetail));
        }
    }, [dispatch, idDetail, videos])

    return(
        <div>
            <h1>Renderizando todos los videos de este curso.</h1>
            {
                videos?.map((e, i) => {
                    return(
                        <div key={i}>
                            <h1>Video {i+1}</h1>
                            <p>{e.urlVideo}</p> 
                            <Comments comments={e.comments} videoId={e.id} /> 
                        </div>
                        
                    )
                })
            }
            
            
        </div>
    )
}

export default Videos;