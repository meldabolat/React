import React, { useState } from 'react'

function Debug () {
    
    const [vize1, setVize1]=useState(0);
    const [vize2, setVize2]=useState(0);
    
    const ortalamaBul =()=>{
        const toplamsonuc =topla()/2; 
               debugger;

        yazdır(toplamsonuc);
    }
    const topla =()=>{
        const toplam= vize1+vize2  
              debugger;

        return toplam
    }
    const yazdır=(sonuc)=>{
        console.log("ortalama = "+ sonuc)
    }
  
    return (
    <div>
        <div>
            <input type="number" value={vize1} onChange={(e)=>setVize1(Number(e.target.value))} />
        </div>
        <div>
            <input type="number" value={vize2} onChange={(e)=>setVize2(Number(e.target.value))}/>
        </div>
        <div>
            <button onClick={ortalamaBul}>Ortalama bul</button>
        </div>
    </div>
  )
}

export default Debug