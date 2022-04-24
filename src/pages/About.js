import {useState,useEffect} from 'react';
function About(){
let [mes,setMes]=useState("");
   async function getdatalara(){

    var resp=await fetch("http://localhost/rectapi/api/demo");
var data =await resp.json();
setMes(data.msg);
    }
    useEffect(()=>{
       getdatalara();
    })
    return(<>
        <h1>I am About Page</h1>
        <h1>{mes}</h1>
        </>
    )
}
export default About;