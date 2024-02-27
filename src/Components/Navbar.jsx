import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';




const Navbar = ({num}) => {
  const handleclick=()=>{
    

  }


 

  return (


    <>

    
    <header className='nav'>


    <div className="container d-flex justify-content-between mt-3">

    
      <nav className="navbar">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      </div>
      </nav>
< h6  >MIXTILES </h6>
<FontAwesomeIcon
  onClick={handleclick}
  icon={faMessage}
  className='mt-3'
  style={{ fontSize: '20px' ,color:'blue' }}
>
{num > 0 && <span className="badge bg-dark rounded-circle">{num}</span>}
</FontAwesomeIcon>
{num > 0 && <span className="badge bg-dark rounded-circle">{num}</span>}




      

      <div
      
      
      
      >
   </div>
    </div>
    </header>






    </>
  )
}

export default Navbar