import { useState } from 'react'
import './App.css'
//import { people } from './data.js';
//import { getImageUrl } from './utils.js';
//import Article from './Article.jsx'

export default function App() {

  const descriptionText = "Je m'appelle Alexis Petropoulos";
  const jobDescription = "Je suis front-end developper";
  const techStack = ['CSS : front', 'HTML : front', 'Tailwind : front', 'PHP : back', 'MySQL : back'];
  const listTechStack = techStack.map(tech => <li>{tech}</li>)

  return (
    <>
    <h2>{descriptionText}</h2>
    <p>{jobDescription}</p>
    <ul>{listTechStack}</ul>
    </>
  );

}