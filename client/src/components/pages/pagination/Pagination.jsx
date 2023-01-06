const Pagintaion = ({coursesPerPage, courses, pagination, handleNext, handlePrevious, currentPage}) => {

    const numOfPages = [];
    const amountOfPages = Math.ceil(courses/coursesPerPage);
    for (let i = 1; i <= amountOfPages; i++) {
        numOfPages.push(i);
    }

    return (
        <div>
            <div>
                <div><button onClick={(e) => handlePrevious(e)}>Previous</button></div>
                {
                    numOfPages?.map((page) => {
                        return <button id={page} key={page} onClick={() => pagination(page)}>{page}</button>
                    })
                }
                <div><button onClick={(e) => handleNext(e)}>Next</button></div>
            </div>
        </div>
    )
}

export default Pagintaion