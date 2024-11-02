
import { useState } from 'react';
import './App.css';
import { NameInput } from './Components/NameInput';
import {SurnameInput} from './Components/SurnameInput'
import { EmailInput } from './Components/EmailInput';

function App() {
  const[name,setName]=useState("")
  const[surname,setSurname]=useState("")
  const[email,setEmail]=useState("")
  const[isVisible,setIsVisible]=useState(false)
 
 const handleNameChange=(e)=>{
  setName(e.target.value)
 }

 const handleSurnameChange=(e)=>{
  setSurname(e.target.value)
 }

 const handleEmailchange=(e)=>{
  setEmail(e.target.value)
 }

 const handleSubmit=(e)=>[
  e.preventDefault(),
  setIsVisible(true)
 ]
  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
     <NameInput value={name} change={handleNameChange}/>
     <SurnameInput value={surname} surnamechange={handleSurnameChange}/>
     <EmailInput value={email}  emailchange={handleEmailchange}/>

     <button type='submit'>submit</button>
     {isVisible && <p className='visible'>Name:{name} Surname:{surname} Email:{email}</p>}
     </form>
    </div>
  );
}

export default App;
