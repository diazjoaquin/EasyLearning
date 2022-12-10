const { Router } = require("express");
const router = Router();
<<<<<<<< HEAD:server/src/Routes/createComment_Video/createComment_Video.js
const { createCommentVideo } = require("./controllers.js");

router.post("/", async (req, res) => {
  try {
    res.json(await createCommentVideo(req.body));
========
const { createVideo } = require("./controllers");

router.post("/", async (req, res) => {
  try {
    res.json(await createVideo(req.body));
>>>>>>>> origin/RoutesBackFranco:server/src/Routes/createVideo/createVideo.js
  } catch (error) {
    res.json(error);
  }
}
);

module.exports = router;


