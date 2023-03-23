import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'


const Template = WrappedComponent =>{

    console.log(WrappedComponent);
    function Wrappe() {
        return(
            <>
                <NavBar />
                    <WrappedComponent />
                <Footer />
            </>
        )
      
    }
  
    return Wrappe;
}
  
  
  export default Template;
