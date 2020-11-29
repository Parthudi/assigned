import React, {Component} from 'react'
import './signup.css'

class SignUp extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobile: '',
        upload: '',
    }

     handleonSubmit = async event => {
         event.preventDefault()
       try {
      const response =  await fetch("http://localhost:4000/user/signup", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                        },
                    body: JSON.stringify({
                        username: event.target.username.value,
                        email: event.target.email.value,
                        password:  event.target.password.value,
                        confirmPassword:  event.target.confirmPassword.value,
                        mobile:  event.target.mobile.value,
                        upload: event.target.upload.value
                    })
                })
             const responseData = await response.json();
             alert('Congraluations ' +event.target.username.value+ '\n Signup Sucessfull !! ')
             console.log(responseData)
    } catch(error) {
            console.log(error)
        }
        //  let { password, confirmpassword} = this.state

        // if( password !== confirmpassword ) {
        //         alert('Password didnot match')
        //     return ;
        //   }
        this.setState({
                 username: '',
                 email: '',
                 password: '',
                 confirmPassword: '',
                 mobile: '',
                 upload: ''
        })
        }
    handleonchange = (event) => {
            this.setState({ [event.target.name ] : [event.target.value] })
        }

  
 render() {
   
    return(

       <div className='sign-up'>
           <h1 > I dont have an account </h1>
              <span> Sign up with your email & password </span> <br/><br/><br/>

              <form className='sign-up-form' onSubmit={this.handleonSubmit}>

                 <label> User Name </label>
                 <input type="text" name='username'  value={this.state.username} onChange={this.handleonchange}  required/>  <br/>

                 <label> email </label>
                 <input type="text" name='email'  value={this.state.email} onChange={this.handleonchange}  required/><br/>

                 <label> password </label>
                 <input type="password" name='password' value={this.state.password} onChange={this.handleonchange}  required/><br/>

                 <label> confirmPassword </label>
                 <input type="password"  name='confirmPassword' value={this.state.confirmPassword} onChange={this.handleonchange}  required/><br/>

                 <label> mobile </label>
                 <input type="text" name='mobile'  value={this.state.mobile} onChange={this.handleonchange}  required/><br/>

                 <label> upload </label>
                 <input type="file" name='upload'  value={this.state.upload} onChange={this.handleonchange}  required/><br/>
 
                 <button type='submit'> SIGN UP </button>
              </form>
        </div>
           
        )
    }
}

export default SignUp