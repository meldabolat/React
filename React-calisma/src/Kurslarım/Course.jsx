
import './Course.css'
function Course  ({course})  {
    const { title, description, price , img} = course;
  return (
    <div>
      
        <div className="course">
            
            <img className='imag' src={img} width={200} height={150}/>
            <h4 className='title1'>{title}</h4>
            <p className='desc'>{description}</p>
            <h3 className='price'>{price} ₺ </h3>
            
        </div>
    </div>
  )
}

export default Course