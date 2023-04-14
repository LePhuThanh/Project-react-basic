//Example's basic react
//Create form feature
import React from "react";
import '../../styles/buttonExp.scss'


class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    //Handling
    handleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        //verify
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        console.log('>>>> check data input: ', this.state)
        //passing a state including three element 
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1001), //Math foor rounding is function
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {

        return (
            <>
                <h2>Tools for job search & benefits</h2>
                <form>
                    <label htmlFor="fname">Job's Title: </label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitleJob(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary: </label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br /><br />
                    <input
                        className="submit"
                        type="submit"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </>

        )
    }
}

export default AddComponent;