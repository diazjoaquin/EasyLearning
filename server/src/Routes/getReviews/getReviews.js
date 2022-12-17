const { Router } = require("express");
const router = Router();
const { getCourseReviews } = require("./controllers.js");

router.get("/:courseId", async (req, res) => {
    const {courseId} = req.params;
    try {
        const reviewList = await getCourseReviews(courseId);
        return res.json(reviewList);
    }
    catch (err) {
        return res.status(500).send(`message: ${err}`);
    }
});

module.exports = router;