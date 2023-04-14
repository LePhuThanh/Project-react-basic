import React from "react";
//import { withRouter } from "react-router";
import Color from "../views/HOC/Color";
import house from '../assets/images/house.png';
import '../styles/Home.scss'

//
import { connect } from 'react-redux'


class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo') // After 3s automatically nav home => todo
    //     }, 3000)
    //     // Run code after 3s
    // }

    handleDeleteUser = (user) => {
        console.log('>>> check user delete: ', user);
        this.props.deleteUserRedux(user);

    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    //HOC: higher order component
    render() {
        console.log('>>> check props: ', this.props)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div className="home">
                    <h1>My Home!</h1>
                    <p>
                        Hello viewer! Page was created by Phu Thanh
                    </p>
                </div>
                <div>
                    <img src={house} style={{ width: '250px', height: '250px', magintop: '20px' }} alt="House on Main Page" />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    &nbsp; <span onClick={() => this.handleDeleteUser(item)}> x </span>

                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}> Add New</button>
                </div>
            </>
        )
    }
}

//export default withRouter(Home); // component withRouter(Home) = To have the component's feature (withRouter + Home)
// withRouter can to call 'this.props.history.push'

//function map to connect state from Redux => React
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users //this state owns redux
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({
            type: 'DELETE_USER', payload: userDelete
        }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));

