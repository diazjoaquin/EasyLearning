export default function validate(input) {
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
