"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

// server action, executed on the server

function isInvalidText() {
  return !text || text.trim() === "";
}
// params passed by useFormState hook
export async function shareMeal(prevState ,formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  // console.log(meal)

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    image.size === 0
  ) {
    return {
      message: 'Invalid input.'
    };
  }

  await saveMeal(meal);
  // revalidatePath('/meals', 'layout'); // revalidate the entire layout
  revalidatePath('/meals'); // revalidate the entire page
  redirect("/meals");
}
