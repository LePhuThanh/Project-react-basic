import React from "react";
import axios from 'axios';
import '../../styles/ListUser.scss';
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {

    state = {
        listUsers: []
    }
    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log('>>> Check res: ', res.data.data)
        //     })
        let res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
            //&& condition it exit
        })
    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
        // push on page detail via id
    }
    render() {
        let { listUsers } = this.state;

        return (
            <div className="list-user-container">
                <div className="title">
                    <h2>Fetch All List Users</h2>
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        //check if data exits and whether there is data or not// 
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key='item.id'
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })
                    }



                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);