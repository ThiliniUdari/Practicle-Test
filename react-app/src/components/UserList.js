import React ,{Component} from 'react';
import { connect } from "react-redux";
import {retrieveUsers} from '../store/actions/users.actions';
import UserDataService from "../services/user.service";

class UserList extends Component{
    constructor(props){
        super(props);
        this.state={
            user:{
                id:'',
                name:'',
                userName:'',
                email:''  
            }
           
        }

    }

    componentDidMount(){
        this.props.retrieveUsers();
        
    }

    render(){
        // const { searchTitle, currentTutorial, currentIndex } = this.state;
        const {users}=this.props;
        return(
            <div>
               <h2>User List view</h2> 

                <ul className="list-group">
                    {users &&
                    users.map((user, index) => (
                        <li
                            className={"list-group-item "}
                            key={index}
                        >
                        {user.title}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        users:state.users,
    }
}
export default connect(mapStateToProps,{retrieveUsers}) (UserList);