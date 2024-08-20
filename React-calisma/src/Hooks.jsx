import React, { useEffect } from 'react'
import { useState } from 'react'
function Hooks  ()  {
//     const [firstName, setName]= useState('melda');
//     const [lasttName, setLastName]= useState('bolat');
//     const handleChange = ()=> {
//         setLastName("Manaz")
//     }
//     const [names, setNames]= useState(["melda","yiğit","irem","sefa"])
//     const [userInfo, setUserInfo]=useState({username: "melo", password: "1234"})
//     const [show, setShow]=useState(true);  
//     const [count, setCount]=useState(0);
//     const arttır=()=>{
//         setCount(count+1);

//     }
//  console.log("component render edildi")
 const [firtName,setFirtName]=useState('');
 const [latName,setLatName]=useState('');

useEffect(()=>{
console.log("her zaman çalışır") 
})
useEffect(()=>{
console.log("komponent ilk render edildiğinde çalışır")
},[])
useEffect(()=>{
console.log("ilk render edildiğinde ve firstname state değeri değiştiğinde çallışır")
},[firtName])
useEffect(()=>{
    console.log("ilk render edildiğinde ve lastname state değeri değiştiğinde çallışır")

},{latName})
    return (
    <div>
       {/* <div>{firstName}</div> 
       <div><button onClick={()=>(setName("irem"))}> İsmi Değiştir</button></div>
      
       <div>{lasttName}</div> 
       <div><button onClick={handleChange}> Soyad Değiştir</button></div>
       
        <div>{names.map((name,index)=>(
            <div key={index}>
                {name}
            </div>
        ))}</div>
       
        <div>
            {userInfo.username}
            <br />
            {userInfo.password}
        </div>
        
        <div>
            {show ? <div>{userInfo.username} {userInfo.password}</div> : <div>bilgiler yanlış</div>}
        </div>

        <div>{count}</div>
        <div><button onClick={arttır}>arttır</button></div> */}
    
    <div><button onClick={()=>setFirtName("melda")}> Adı değiştir</button></div>
    <div><button onClick={()=>setLatName("bolat")}> Soyad değiştir</button></div>

    </div>
  ) 
}

export default Hooks