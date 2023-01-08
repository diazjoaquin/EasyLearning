import s from "../pagination/Pagination.module.css"
const Pagintaion = ({coursesPerPage, courses, pagination, handleNext, handlePrevious, currentPage}) => {

    const numOfPages = [];
    const amountOfPages = Math.ceil(courses/coursesPerPage);
    for (let i = 1; i <= amountOfPages; i++) {
        numOfPages.push(i);
    }

    return (
        <div className={s.paginationCont}>
            <div className={s.buttonsContainer}>
                <div className={s.prevCont}><button className={s.prevButton} onClick={(e) => handlePrevious(e)}>«</button></div>
                {
                    numOfPages?.map((page) => {
                        return <button className={s.pageNum} id={page} key={page} onClick={() => pagination(page)}>{page}
                        </button>
                    })
                }
                <div className={s.nextCont}><button className={s.nextButton} onClick={(e) => handleNext(e)}>»</button></div>
            </div>
        </div>
    )
}

export default Pagintaion



