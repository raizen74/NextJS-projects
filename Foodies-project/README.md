## FOODIES APP PROJECT
Users can share recipes by uploading title, email, instructions and images to the backend. The backend renders the data from the database.

Dynamic routes for each recipe. 

`npm run dev`, features covered:

- `global.css` is available in all app components
- next.js dynamic routes -> [identifier]
- icon.png is used for the fav icon, globals.css applies to all js files
- NextJS **client components** are pre-rendered on the server but rendered in the client (browser). Mark client side components with `'use client'` directive -> check `image-slideshow.js`
- The NextJS `Image` component is able of automatically detect the width and height of the image. If image information is retrieved at runtime, `Image` is not able to get that info, use the `fill` prop to explicitly set the width and height -> `meals-item.js`
- `npm install better-sqlite3` to work with sql like DDBB locally with `initdb.js` as config file for the db. Run `node initdb.js` to create the database.
- **server components can be async** -> `MealsPage` component
- `Suspense` react component for handling loading state and show some fallback data in `./app/meals/page.js`. Which substitutes `loading.js`.
- `./app/meals/error.js` file will be rendered by React whenever an error occurs. It must be a **Client component**.
- `not-found.js` file for resources not found
- fetch data from the database based on the URL path in `./app/meals/[mealSlug]` and inject HTML code retrieved from the database into the DOM (SQL injection) in `page.js`
- add the `./components/meals/image-picker.js` rendered in `/meals/share` and implement the preview of images with the javascript `FileReader API`
- **server action** function to handle form submission -> `./app/meals/share/page.js` and `lib/action.js`
- use `slugify` and `xss` packages to protect agains XSS attacks
- Upload images and data to the server via form -> `./lib/meals.js` **saveMeal**
- Change dynamically the form button, depending on pending state -> `./app/meals/share/page.js`
- Add server side input form validation in `action.js`
- Implemented `useFormState` hook to render error message based on form state.
- `npm run build`, `npm start` -> production server
- Revalidate next.js cache when building production server -> `action.js`
- static and dynamic metadata added to all pages