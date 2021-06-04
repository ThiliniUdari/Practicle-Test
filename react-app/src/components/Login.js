import React ,{Component} from 'react';
import {Form,Button, Card, NavLink} from 'react-bootstrap';
import {Redirect} from 'react-router-dom'


class Login extends Component {
 
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

   
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        // check
        <Redirect to='/users' />
        
        // console.log(this.state);
      //  this.props.signIn(this.state)
    }

    render(){
        return(
            <div>
               
               <Card className='container col-md-8' style ={{marginTop:'20px',width:'40%'}}>
                   <strong>Sign In</strong>
                <Form className='container' >
                    <Form.Group controlId="formBasicEmail" >
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Enter email" id='email' onChange={this.handleChange} required  />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password"  id='password' onChange={this.handleChange} required    />
                    </Form.Group>
                    <Button variant="primary" onClick={this.handleSubmit}> Submit</Button>
                    </Form>
                    </Card>
            </div>
        )
    }

}
export default Login ;