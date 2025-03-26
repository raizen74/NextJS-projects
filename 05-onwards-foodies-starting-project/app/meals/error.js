'use client';
// error prop is automatically passed by the Route component
// if the fetch fails
export default function Error({ error }) {
  return (
    <main className='error'>
      <h1>An error ocurred!</h1>
      <p>Failed to create meal.</p>
    </main>
  );
}
