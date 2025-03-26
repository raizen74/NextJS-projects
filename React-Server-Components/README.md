# React Server Components (NextJS projects)

React server components are always **executed on the server** or during the **build process**, never client side. It does not use `Vite` as built tool.
- Used in `NextJS` projects.
- Client components are rendered BOTH in the client AND the server.
- **RSC (React Server Components)** can include client components in their JSX, but NOT the other way around.
- **Client components CAN wrap RSC as children**.
- **RSC can by async** while Client components can NOT be async.
- `"use client"` directive used to render components client side. If you need to manage state, you need to use client components, **most React hooks are client only**.
- You can leverage **RSC** to perform async (e.g. fetch) operations and return the server component already rendered to the client. Check `dataFetchingDemo.js`
- Make use of **Server Action**, similar to form actions but executed on the server. Check `ServerActionsDemo.js`