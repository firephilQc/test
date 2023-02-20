import React, { useState } from 'react'
import Clock from './clock';
import Tmdb from './Tmbd';
import './App.css'
import TodoList from './TodoList'
import userDarkMode from './UserDarkMode';
import Icon from './showIcon';
import ContactForm from './ContactForm';
import Memo from './Memo';

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, toggleDarkMode] = userDarkMode();
  const [showIcon, setShowIcon] = useState(true);

  return (
    <div className="App">
      <p>le compteur est a: {count}</p> 
      <button onClick={() => setCount(count +1)}>+</button>
      <button onClick={() => setCount(count -1)}>-</button>
      <br /><br />
      <Icon icon="check" show={showIcon} />
      <button onClick={() => setShowIcon(!showIcon)}>
        {showIcon ? 'Masquer l\'icône' : 'Afficher l\'icône'}
      </button>
      <br /><br />
      <button onClick={toggleDarkMode}> {darkMode ? 'mode clair🌞':'mode sombre🌕'}
      </button>
    <div><ContactForm/> </div>
    <div><Memo /></div>

    <Clock/>
    <TodoList/>
    <Tmdb url="https://api.themoviedb.org/3/movie/popular?api_key=6ac1e3f9caf32f53c1769ed656dbedd8&language=fr-ca"/>
    </div>

  )
}

export default App
