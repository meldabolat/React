import React from 'react'

function Product(props)  {
  return (
    <div>
        <div>ÜRÜN BİLGİLERİ</div>
        
       
        <div>
            <div>İsim : {props.productName}</div>
            <div>Fiyat : {props.price} TL</div>
        </div>
         <hr />
    </div>
  )
}

export default Product