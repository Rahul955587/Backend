import React from 'react'
import FunctionalComponent from './components/FunctionalComponent';
let country = ["a", "b", "c", "d"];

export default function App() {
  return (
    <div>
      <h2>Job Portal</h2>
      <FunctionalComponent name="Rahul" course="B.Tech" />
      <FunctionalComponent name="Jatin" course="B.Tech" /><br />
      <FunctionalComponent name="Abhay" course="B.Tech" />
      {country.map((a) => (
        <p>{a}</p>
      ))}
    </div>
  );
}
