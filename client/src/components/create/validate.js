export function validate(input) {
  const errors = {};
  if (input.name?.length <= 3)
    errors.name = "The name must contain more than 3 letters";
  if (input.description?.length <= 3)
    errors.description = "The description must contain more than 3 letters";
  if (input.category?.length < 1)
    errors.category = "It is obligatory to add at least one category";
  if (input.categories?.length < 1)
    errors.category = "It is obligatory to add at least one category";
  if (input?.price === null || input?.price === "")
    errors.price = "You must enter a price";
  else if (input?.price < 1) errors.price = "It cannot be a negative price";
  return errors;
}

export function validateVideo(inputVideo, inputCourse) {
  const errors = {};
  if (inputVideo.nameVideo?.length <= 3)
    errors.nameVideo = "A name for the video is required";
  if (inputVideo.urlVideo?.length <= 3)
    errors.urlVideo = "A urlVideo for the video is required";
  else if (!inputVideo.urlVideo.includes("www."))
    errors.urlVideo = "The url must have www.";
  else if (!inputVideo.urlVideo.includes(".com"))
    errors.urlVideo = "The url must have .com";
  if (inputVideo.description?.length <= 3)
    errors.description = "A description for the video is required";

  return errors;
}
