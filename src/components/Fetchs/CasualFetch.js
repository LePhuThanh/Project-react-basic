import React from "react";
import axios from "axios";
import '../../styles/Fetchs/CasualFetch.scss'


class CasualFetch extends React.Component {

    state = {

        listClient: []
    }

    async componentDidMount() {
        let res = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log('>>> check', res.data)
        this.setState({
            listClient: res && res.data ? res.data : []
        })
    }

    render() {
        let { listClient } = this.state;
        return (

            <div className="list-client-container">
                <div className="title">
                    <h2>Fetch all list clients using 'asios' library</h2>
                </div>
                <div className="list-client-content">
                    <div className="child">
                        <table>
                            <thead className="thead">
                                <tr>
                                    {/* <th>No</th> */}
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                    <th>Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listClient && listClient.length > 0 &&
                                    listClient.map((clientMap, index) => (
                                        <tr key={clientMap.id}>
                                            {/* <td>{index + 1}</td> */}
                                            <td>{clientMap.id}</td>
                                            <td>{clientMap.name}</td>
                                            <td>{clientMap.username}</td>
                                            <td>{clientMap.email}</td>
                                            <td>{clientMap.address.street}</td>
                                            <td>{clientMap.phone}</td>
                                            <td>{clientMap.website}</td>
                                            <td>{clientMap.company.name}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default CasualFetch;