import React from "react"
import "./login.css"
import avatar from "../../assets/images/avatar2.jpg"
import { Link } from "react-router-dom"

export const Regsiter = () => {
  return (
    <div class="container_main">
      <div class="imgcontainer">
	        <img src={avatar} alt="Avatar" class="avatar"/>
	    </div>
      <br/><br/>
      <h1> Welcome ! </h1> 
      <form class ="accountfrom">
		    <span> Username: </span>
		    <input type="text" name="txtUsername" class="text"  required/>
        <span> Email address: </span>
		    <input type="text" name="txtEmail" class="text"  required/>
		    <span> Password: </span>
		    <input type="password" name="txtPassword" class="text"  required/>
        <br/><br/>
        <input type="submit" name="btnSubmit" value="Sign up" class="button"/>
	    </form>
    </div>
  )
}
