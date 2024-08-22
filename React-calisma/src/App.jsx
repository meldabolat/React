
// import Nav from './Kurslarım/Nav';
// import { courses } from './Kurslarım/Data';
// import Course from './Kurslarım/Course';
// import { useEffect } from 'react';
// import './Kurslarım/Course.css'
// import axios from 'axios'
import './App.css'
import Currency from './DovizKuru/Currency';
// const BASE_URL="http://localhost:3005/"

function App() {

//   const getAllUsers = async () => {
// const response = await axios.get(BASE_URL+"/users");
// console.log(response.data)}
//   const getUserById = async()=> {
//     const response =await axios.get(BASE_URL+"/users"+userId);
//     console.log(response.data)
//   }
  
//   const createUser = async ()=>{
// const response =await axios.post(`${BASE_URL}/users`,newUser);
// console.log("response",response.data)
//   }

//   const updateUser = async (userId,updatedUser)=>{
// await axios.put(`${BASE_URL}/users/${userId}`,updatedUser);

//   }
  
// const deleteUserById = async (userId) => {
// const deleteResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
// }
   
//   useEffect (() => {
// getAllUsers();
// const newUser={
//   "username": "yiğit",
//   "password" : "32165"
// }
// createUser(newUser);
// 


// })

return (
    <div style={{display: 'flex',flexDirection:'column', justifyContent : 'center', alignItems: 'center' }}>
      <Currency />
      {/* <Nav />
      <div className='course-main'>
      {
        courses?.map((course)=>(
          <Course key={course} course={course}/>
        ))
      }
      </div> */}
      

    </div>
 
  );
}

export default App
