import React, { useState } from 'react'
import slider1 from '../Assetss/image5.webp'
import Alert from './Alert'

const Card = ({num, shownum}) => {

const [count,setCount]=useState(false)
const [alert,setAlert] = useState()


const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
const handleclick=()=>{
    showAlert("danger","You have scuessfullly add item")

  setCount(true)

  const number = num + 1 ;
   console.log("number",number)
  shownum(number)
}





  return (
   <>
   
   {alert && <Alert type={alert.type} message={alert.message}/> }
   <div className='row d-flex mt-5 justify-content-center align-item-center'>
                    <div className='col-md-4'>
                        <div className='card' style={{ width: '450px' }}>
                            <img src={slider1} className='card-img-top' alt='...' />
                            <div className='card-body'>
                                <h2 className='card-text'>Woman Wear </h2>
                                    <p>$ 20.00</p>
                                <button type="button" class="btn btn-primary btn-sm" onClick={handleclick}>Add to Cart</button>
                                
                                
                                
                            </div>

                        </div>
                    </div>
                </div>

   

   </>
  )
}

export default Card