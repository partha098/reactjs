import {useState} from 'react';
function Home(){
    let [name,setName]=useState("Jack");
    let [lname,setLname]=useState("dorsan");
    return (
        <>
     <h1>I am Home</h1> 
     <h1>{name} {lname}</h1> 
     <button onClick={()=>{
        setName("rosy");
        setLname("Brown");
     }} >Click me</button>
     </> 
    )
}
export default Home;