import { useState } from 'react'
import './App.css'
import Article from './Article.jsx'

export default function App() {

  return (
    <>
      <h2>Mes articles:</h2>
      <Article title="Titre du premier article"><p>Premier article</p></Article>
      <Article title="Titre du deuxième article"><p>Deuxième article</p></Article>
    </>
  )
}