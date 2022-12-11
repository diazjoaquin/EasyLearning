import Reviews from "../reviews/reviews";

const Video = (/* {id, video, reviews} */) => {
    return (
        <div>
            <h1>Renderizando todos los videos de este curso.</h1>
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

export default Video;