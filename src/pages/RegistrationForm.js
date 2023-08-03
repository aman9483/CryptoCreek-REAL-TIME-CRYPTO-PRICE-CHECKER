
import React from 'react'
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';
import '../styles/register.css';



const RegisterForm =
    () => {
      const navigate = useNavigate();

      const handleSumit=()=>{

          navigate('/crypto-Page');
      }



  return (
 

    <>

  

    <FormContainer>

   
  

    <form>

    

       <h1 id='h1'>CREATE ACCOUNT</h1>

      

       

       <input type = 'text' placeholder = ' UserName' name = 'usernames'/>
   
       <input type = 'email' placeholder = ' Email' name = 'email' />

       <input type = 'password' placeholder = 'Password' name = 'password'/>
       
       <input type = 'password' placeholder = 'Confirm Password' name = 'confirmPassword'/>

 
        <button type='submit'onClick={handleSumit}id='btn'>Create User</button>

        <span>
            Already have an account ?  <Link to='/login'>LOGIN.</Link> </span>

    </form>

    

  
    

     </FormContainer>
   
    </>
  )
    }

export default RegisterForm

const FormContainer = styled.div`

height: 100vh;

width: 100vw;

display:flex;

justify-content: center;

align-items : center;


margin-left: -150px;

gap: 1rem;



form{

     display:flex;
     flex-direction: column;
     gap: 2rem;
     border-radius: 2rem;
     padding: 3rem 5rem;
     transformation: scale(1.05);
     margin-left: 500px;
     border-radius: 2rem;

     h1{

        margiin-left: 150px;
    }
    
      

}




input{

  border:2px solid purple;
  background-color:transparent;
  padding: 1rem;
  border-radius: 0.4 rem;
  width:100%;
  width: 20rem;
  color:white;
  font-size: 1rem;
  margin-left: 0.4rem;


}



button{


    height: 3rem;
    width:20rem;
    background-color: blue;

    border-radius: 0.5rem;

    color: white;

    font-size: 1.2rem;

    font-weight: bold;
    margin-left: 0.4rem;
    border: none;


}

span{

  color: white;
  font-size: 1.4rem;
  position: relative;
  left: 0.7rem;light blue hexcode
  
 

  a{

    text-transform: uppercase;
    text-decoration: none;
    color: blue;
    padding: 0.5rem;
  }
}

.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  flex-direction: row;
  
  
 
}

h1 {
  color: white;
  text-transform: uppercase;
  position: relative;
  top: -3.5rem;
  left:8rem;
  
}

img {
  height: 5rem;
  position: relative;
  left: 2rem;
}







`
