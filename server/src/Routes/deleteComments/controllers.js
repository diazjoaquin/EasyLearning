const { Comments, Review, ReviewPage } = require("../../db.js")

const deleteComments = async (id, string) => {

    if(string === "ReviewsPage"){
        return await ReviewPage.destroy({
            where: {
                id,
            }
        })
    }
    if(string === "ReviewsCourses"){
       return await Review.destroy({
            where: {
                id,
            }
        })

    }
    if(string === "CommentsVideos"){
        return await Comments.destroy({
            where: {
                id,
            }
        })
    }

}

module.exports = { deleteComments }