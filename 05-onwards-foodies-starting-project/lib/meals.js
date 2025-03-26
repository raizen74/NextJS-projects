import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // simulate an error handled in ./app/meals/error.js
  // throw new Error("Loading meals failed.")

  // .all method is used for SELECT
  // .run method is used for INSERT, UPDATE, DELETE
  // .get method is used for SELECT with only one result
  return db.prepare("SELECT * FROM meals;").all();
}

export function getMeal(slug) {
  // ? is a placeholder, which is replaced with the value of the slug variable.
  // This is a security measure to prevent SQL injection attacks.
  return db.prepare("SELECT * FROM meals WHERE slug = ?;").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions); // sanitize user input

  const extension = meal.image.name.split(".").pop(); // get the file extension
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`); // we can use the stream to write data to it
  const bufferedImage = await meal.image.arrayBuffer(); // convert the image data to a buffer

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Failed image failed!");
    }
  }); // write the image data to the stream

  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    );
  `).run(meal);
}
