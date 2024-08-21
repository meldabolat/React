
import Nav from './Kurslarım/Nav';
import { courses } from './Kurslarım/Data';
import Course from './Kurslarım/Course';
import './Kurslarım/Course.css'
function App() {

  return (
    <div>
      <Nav />
      <div className='course-main'>
      {
        courses?.map((course)=>(
          <Course key={course} course={course}/>
        ))
      }
      </div>
    </div>
 
  );
}

export default App
