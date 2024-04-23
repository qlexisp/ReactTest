import { useState } from 'react'
import './App.css'
import { people } from './data.js';
import { getImageUrl } from './utils.js';
//import Article from './Article.jsx'

export default function App() {

  const listChimist = people.filter(person => person.profession === 'chimiste')
  const displayChimist = listChimist.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        célèbre pour {person.accomplishment}
      </p>
    </li>
  )

  const listItems = people.filter(person => person.profession != 'chimiste')
  const displayPeople = listItems.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        célèbre pour {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Chimistes:</h1>
      <ul>{displayChimist}</ul>

      <h1>Autres:</h1>
      <ul>{displayPeople}</ul>
    </article>
  );
}