import React from 'react';
import './App.css';
import mgricon from './icons/mgricons.png'
import { AiFillAppstore,AiFillHome,AiOutlineUserAdd,AiFillSetting } from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";

import LoginPage from './userManagement/LoginPage';

export default function App() {
  return (
  <div className='App' >
    <div className='screenstyle'>
      <div>
            <div className='img'>
               <img  src={mgricon} height="100%" white="100%" /> 
            </div>
            <div className='headerfountSize'>
              <a className='headerbuttun'><AiFillHome /></a> 
              <a className='headerbuttun'><FaBookOpen /></a>
              <div style={{"float":"right"}}> 
              <a className='headerbuttun'><AiOutlineUserAdd /></a>            
              </div>
            </div>
      </div>
      <div>
        <LoginPage />
      </div>
      {/* <div className='header'>
        <div style={{"backgroundColor":"white"}}>
          <div style={{"float":"left"}}>
          <div className='imgstyle'>
             <img   src={mgricon} height="100%" white="100%" /> 
          </div>
          </div>
           <div className='imgstyle'>
             <img   src={mgricon} height="100%" white="100%" /> 
          </div> 
          <a style={{"float":"left"}} >hi</a>
          <a style={{"float":"left"}} >hi</a>
          <a style={{"float":"left"}} >hi</a>
          <a style={{"float":"left"}} >hi</a>

          <div style={{"float":"left"}}>
            <div >
               <AiOutlineUserAdd size={20} />

            </div>
          </div>
              <div className='rightside'>
             <AiOutlineUserAdd />
             </div> 

        </div>
      </div>
      <div className='body'>
        <hr />
          <a> body</a>
        <h1>hi</h1>
      </div>
      <div className='footer'>
        <AiFillHome />
          <a><AiFillAppstore /></a>
      </div> */}
    
    </div>
  </div>
  );
}