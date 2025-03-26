import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import classes from "./page.module.css";

// metadata allow engine crawlers to understand the content of the page
export const metadata = {
  title: "All meals",
  description: "Browse the delicious meals shared by our vibrant community.",
};

async function Meals() {
  const meals = await getMeals();
  console.log(meals);

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share your favourite recipe.</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
