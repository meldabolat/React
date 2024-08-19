
import './App.css'

function App() {
  //JS kodları yazılır
let a = 15;
const firstName ="melda"
let vize1 = 80
let vize2 = 60
let sonuc = true
let isimler = ["melda","irem","yiğit","sefa"]
  return (
    //HTML kodları yazılır
    //jsx : {}
  <div>
<p> a değişkeninin değeri : {a} </p>
<p>müşterinin adı {firstName}</p>
<p>ortalama = {(vize1+vize2)/2}</p>
  {/*  ternary operator */ }
{sonuc ? <p>ehliyeti alabilirsin</p> : <p>ehliyeti alamazsın</p>} 

{(vize1+vize2)/2 >=50 ? <p>geçtin</p> : <p>kaldın</p> }
{
  isimler.map((isim, index)=>(
    <div style={{backgroundColor:'orange', border: '1px solid black'}} key={index}> {isim} </div>
))
}
  </div>
  )
}

export default App
