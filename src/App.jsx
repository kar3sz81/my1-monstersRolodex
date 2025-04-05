import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowMonsters from './ShowMonsters/ShowMonsters'

function App() {
  const[monsters, setMonsters] = useState([]);
  const[searchCharacters,setSearchCharacters]=useState('');
  const[filteredMonsters,setFilteredMonsters]=useState(monsters)
  //console.log(monsters)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response=>Response.json())
    .then(wholeData=>setMonsters(wholeData))
  },[])


  useEffect(()=>{
    const newFilteredMonsters=monsters.filter(monster=>monster.name.toLocaleLowerCase().includes(searchCharacters))
                                        
    setFilteredMonsters(newFilteredMonsters)
    
  },[searchCharacters,monsters])


  //console.log(filteredMonsters)


  const onchangeHandler=((event)=>{
    setSearchCharacters(event.target.value.toLocaleLowerCase())
    //console.log(event.target.value)
  });



  //console.log(searchCharacters)

  //console.log(monsters)


  return (
    <div>
      <input type='search' placeholder='please search' onChange={onchangeHandler}>
      
      </input>
      
      <ShowMonsters monsterForChild={filteredMonsters}/>
      
    </div>   
  )
}

export default App
