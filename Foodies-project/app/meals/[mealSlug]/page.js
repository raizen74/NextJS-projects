import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
// must be called generateMetadata
export async function generateMetadata({ params }) {
  const meal = getMeal(params.mealSlug);
  
  if (!meal) { // if meal is undefined
    notFound(); // call notFound() to show the closest not-found.js page (in ./app/meals/not-found.js)
  }
  
  return {
    title: meal.title,
    description: meal.summary,
  };
}

export default function MealDetailsPage({ params }) {
  // console.log(params.mealSlug)// params.mealSlug -> got from URL PATH
  const meal = getMeal(params.mealSlug);
  console.log(meal);

  if (!meal) { // if meal is undefined
    notFound(); // call notFound() to show the closest not-found.js page (in ./app/meals/not-found.js)
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />"); // render HTML linebreaks
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        {/* meal.instructions string can contain HTML tags that will be rendered as part of the page content (injected in the DOM) */}
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
