export function validate(input) {
  const errors = {};
  if (input.name.length < 3)
    errors.name = "The name must contain more than 3 letters";
  if (input.description.length < 3)
    errors.description = "The description must contain more than 3 letters";
  if (input.category.length < 1)
    errors.category = "It is obligatory to add at least one category";
  if (input.price === null || input.price === "")
    errors.price = "You must enter a price";
  else if (input.price < 1) errors.price = "It cannot be a negative price";
  return errors;
}

export function validateVideo(inputVideo, inputCourse) {
  const errors = {};
  if (inputVideo.name < 3) errors.name = "A name for the video is required";
  if (inputVideo.urlVideo < 3)
    errors.urlVideo = "A urlVideo for the video is required";
  if (inputVideo.description < 3)
    errors.description = "A description for the video is required";
  // if (
  //   inputCourse.video.length >= 1 &&
  //   inputCourse.video?.map((e) => e.name === inputVideo.name)
  // )
  //   errors.name = "There is already a video with that name";
  return errors;
}
