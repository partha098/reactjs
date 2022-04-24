import {useState} from 'react';
function Home(){
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [gender,setGender]=useState("");
    let [stream,setStream]=useState("");

    function setg(ev){
        setGender(ev.target.value);
    }
   
    return (
        <>
     <h1>I am Home</h1> 
     <p>Name</p>
     <p><input type="text" onChange={(ev)=>{
         setName(ev.target.value);
     }} /></p>
       <p>Email</p>
     <p><input type="text" onChange={(ev)=>{
         setEmail(ev.target.value);
     }} /></p>

     <p><input type="radio" name="gender" value="Male" onChange={setg} /> Male</p>
     <p><input type="radio" name="gender" value="Female" onChange={setg} /> Female</p>
     <p>Stream</p>
     <p><select onChange={(ev)=>{
         setStream(ev.target.value);
     }}>
         <option value="">-Select-</option>
         <option value="CSE">CSE</option>
         <option value="ECE">ECE</option>
         </select></p>

         <p><input type="button" value="Save" onClick={async ()=>{
            var fd=new FormData();
            fd.append("name",name);
            fd.append("email",email);
            fd.append("gender",gender);
            fd.append("stream",stream);
            var resp=await fetch("http://localhost/talara/api/customarin",{
                method:'POST',
                body:fd
            });
            var data=await resp.json();
            console.log(data);

         }} /></p>
     </> 
    )
}
export default Home;