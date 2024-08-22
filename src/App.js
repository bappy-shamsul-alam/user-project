import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
 return(
  <div>
    <FunBtn></FunBtn>
  </div>
 )
}


function FunBtn (){
  const [count, setCount] = useState([])
  console.log(count)
  
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setCount(data))
  }, [])

  return(
    <div className='all-country'>
      <h2>Total Users: {count.length} </h2>
     <div className='country-box'>
     {
        count.map(user => <User dekha={user} key={user.id}></User>)
      }
     </div>
    </div>
  )

}


function User(props){
  console.log(props.dekha)
  const {phone, name, email, id, address} = props.dekha
return(
  <div className='test'>
    <h3>Name: {name}</h3>
    <h3>Phone: {phone}</h3>
    <h3>Email: {email}</h3>
    <h3>ID: {id}</h3>
    <h3>Lattiude: {address.geo.lat}</h3>
    <h3>Longitude: {address.geo.lng}</h3>
  </div>
)
}


export default App;
