import React from "react"
import "./login.css"
import avatar from "../../assets/images/avatar1.jpg"
import { useDispatch } from "react-redux"
import { authActions } from "../../store/authSlice"

export const Login = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (

    <div class="container_main">
      <div class="imgcontainer">
        <img src= {avatar} alt="Avatar" class="avatar"/>
      </div>
      <br/><br/>
      <h1> Welcome ! </h1> 
      <form class ="accountfrom" onSubmit={handleSubmit}>
        <span>Username or Email address</span>
  	      <input type ="text" name="txtUsername" class="text"  required/>
        <span>Password * </span>
        <input type="password" name="txtPassword" class="text"  required/>
        <br/><br/>
        <input type="submit" name="btnSubmit" value="Sign in" class="button"/>
        
  	  </form>
    </div>
    
  )
}
