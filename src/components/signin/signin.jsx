import React, { Component } from 'react'
import './signin.css'

class SignIn extends Component {
    state = {
            email: '',
            password: ''
    }

    handleonSubmit = async event => {
        event.preventDefault()

         try {
            const response =  await fetch("http://localhost:4000/user/login", {
                          method: 'POST',
                          headers: {
                              'Content-Type': 'application/json'
                              },
                          body: JSON.stringify({
                             
                              email: event.target.email.value,
                              password:  event.target.password.value,

                          })
                      })
                   const responseData = await response.json();
                   alert( '\n Login Sucessfull !! ')
                   console.log(responseData)
          } catch(error) {
                  console.log(error)
              }
    
              this.setState({
                       email: '',
                       password: '',
              })
        }
    OnHandleChange = (event) => {
        
        this.setState({ [event.target.name] : event.target.value  })
         
        }
    
    render() {
    return (
            <div className='sign-in'>
               
                <h1> I already have an account </h1> 
                <span className='statement'> Signin with your email & password </span> <br/><br/>

                <form className='forum' onSubmit={ this.handleonSubmit }>
                    
                    <label> E-mail </label>
                    <input type="text"     name='email'     value={this.state.email}  onChange={this.OnHandleChange}  required/> <br></br><br></br>
                
                    <label> Password </label>
                    <input type="password" name='password'  value={this.state.password}  onChange={this.OnHandleChange}  required/>

                    <div className='Buttons'> 
                        <button type='submit'> SIGN IN </button>    
                    </div>
                   
                        
                </form>
                
            </div>
        )       
    }
}
export default SignIn