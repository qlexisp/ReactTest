import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Content from './content.jsx'
import IsLoggedIn from './isLoggedIn.jsx'
import { List } from './isLoggedIn.jsx'
import { Button } from './isLoggedIn.jsx'
//import { people } from './data.js';
//import { getImageUrl } from './utils.js';
//import Article from './Article.jsx'

export default function App() {

  return (
    <>
    <Header />
    <Content />
    <IsLoggedIn isLoggedIn={true} username="Alexis"/>
    <List />
    <Button text="Click me"/>
    </>
  )
}