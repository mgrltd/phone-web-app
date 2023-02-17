//import axios from 'axios';
import React,{useState} from 'react'
// import { Base_Url } from '../constants/BaseUrls';
import '../StylePages/LoginPage.css'

const LoginPage = () => {
    const[step2,setStep2]=useState(true)
//const[loginRequest,setloginRequest]=useState({ "type":"byUsername","userName":"ss","userPassword":"sweety"})
const[type,setType]=useState("user");
const[userName,setuserName]=useState("");
const[userPassword,setuserPassword]=useState("");
const[otp,setotp]=useState("");
const[loginresponse,setloginresponse]=useState(null);
const[responseEmail,setresponseEmail]=useState("rcreddy7093@gmail.com");
const[loaderStatus,setloaderStatus ]=useState(false);

const userNameHandlear=(e)=>{
  setuserName(e.target.value);
  if(!isNaN(e.target.value))
    setType("byPhoneNumber");
  else
  {
    if((e.target.value).match("@gmail.com")!=null)
      setType("byEmail");
    else
    setType("byUsername");
  }
}

       const loginValidashan=()=>{
        
       }
    //     setloaderStatus(true);
    //     axios
    //     .post(`${Base_Url}/login`,{type,userName,userPassword})
    //     .then(data =>  { 
    //       setloginresponse(data.data)
    //       if(data.data.responseCode==200)
    //       {
    //         setStep2(false);
    //         setresponseEmail(data.data.responseBody);
    //         alert(data.data.responseCode+""+data.data.responseMessage);
    //        }
    //       if(data.data.responseCode!=200)
    //       {
    //         setloaderStatus(false);
    //      alert(data.data.responseCode+""+data.data.responseMessage);
    //       }

    //     })
    //     .catch(error =>  {
    //       alert(error);
    //       setloaderStatus(false);

    //     });
    //   }

     const validateMailByOtp=()=>{}
    //   axios
    // .get(`${Base_Url}/login/validateMailByOtp/${responseEmail}/${otp}`)
    // .then(data =>  { 
      
    //    if(data.data.responseCode==200)
    //    {
    //   let token= sessionStorage.setItem('token', JSON.stringify(data.data.responseBody));
    //   window.location.reload(false);
    //   console.log("token set sucessfully"+token);
    //    }
    //    else
    //    {
    //     alert(data.data.responseCode+" "+data.data.responseMessage);
    //    }
    // })
    // .catch(error =>  alert(error));
    // }
    return (
      <div  >

      <div >
        
        {/* if step2 is true open login  or false open twostep verification page */}
        {step2 ?
      <div className='loginbody'>
       <h1>Login To MGR </h1>
       <div style={{"textAlign":"left"}}>
      UserName,PhoneNumber,E-MailId
       <input onChange={userNameHandlear} type="text" placeholder='username,e-mail,phoneNumber'style={{"fontSize":"20Px"}}/><br /><br />
       Password:<br />
       <input onChange={(e)=>{setuserPassword(e.target.value)}}  type="password" placeholder='*********' style={{"fontSize":"20Px"}}/><br /><br />
       <div style={{"textAlign":"right"}}>
        {loaderStatus ? <div style={{"paddingLeft":"80%"}}><div class="loader"></div> </div>:
         <input style={{"padding":"10px","backgroundColor":"chartreuse"}}  onClick={loginValidashan} type="submit" value={"Login"} /> 
        }
        </div>
       <a href='/forgetpassword' style={{"fontSize":"20Px"}}>ForgetPassword</a>
       </div>
       <hr />
       <p>Create New Account</p>
       <a href='/register' style={{"padding":"7px","backgroundColor":"Orange"}}   type="submit" >Create MGR  new account</a>
       </div>
       :
      //  ofter login two-step verification page
      <div style={{"width":"400px","height":"500px","padding":"10px","border": '4px solid Orange',"backgroundColor":"white"}} >
       <h1>2 step verification</h1>
        <p>otp send ur mail "{loginresponse.responseMessage}{loginresponse.responseBody}"</p>
        <input onChange={(e)=>{setotp(e.target.value)}}  type="text" placeholder='enter OTP'style={{"fontSize":"20Px"}} /><br /><br />
        <input style={{"padding":"10px","backgroundColor":"chartreuse"}} className='addb' onClick={validateMailByOtp} type="submit" value={"Login"} /><br /><br />
        <input style={{"padding":"10px","backgroundColor":"chartreuse"}}  onClick={loginValidashan} type="submit" value={"Resed OTP"} /> 

       </div>

       }
      
      </div>
      </div>
    )
  }

export default LoginPage