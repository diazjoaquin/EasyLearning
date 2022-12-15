import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourseDetail } from "../../../redux/actions";
import Navbar from '../../navbar/Navbar.jsx';
import Footer2 from "../../footer/Footer2.jsx";
import CardVideo from "./cardVideo/cardVideo";
import s from "./Videos.module.css"



const Videos = () => {
  const idDetail = useParams().id;
  const videos = useSelector(state => state.courseDetail).videos;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!videos) {
      dispatch(getCourseDetail(idDetail));
    }
  }, [dispatch, idDetail, videos])

  return (
    <>
      <Navbar />
      <div className={s.containerAll}>
        {
          videos?.map((e, i) => {
            return (
              <div key={i}>
                <CardVideo urlVideo={e.urlVideo} comments={e.comments} description={e.description} i={i + 1} videoId={e.id} />
              </div>
            )
          })
        }
      </div>
      <Footer2 />
    </>

  )
}

export default Videos;