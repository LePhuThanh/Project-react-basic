import React from 'react';
//import ChildComponentFunct from './ChildComponentFunct';
import ChildComponentClass from './ChildComponentClass';
import AddComponent from './AddComponent';
import Color from "../HOC/Color";

class MyComponent extends React.Component {

    //key:value
    state = {
        arrJobs: [
            { id: 'abc Job1', title: 'Developer Java Fullstack', salary: '900' },
            { id: 'abc Job2', title: 'Developer Java Backend', salary: '500' },
            { id: 'abc Job3', title: 'Project manager', salary: '1200' }
        ]
    }

    addNewJob = (job) => {
        console.log('>>> check job from parent: ', job)
        //let currentJobs = this.state.arrJobs //the first way 
        //currentJobs.push(job)
        //this.setState({
        //    arrJobs: currentJobs
        //})
        //the second way shortly
        this.setState({
            arrJobs: [...this.state.arrJobs, job] // ... is copy operator 
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        // filter all element have id different the job's id (means: id we passing)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(preProps, preState) {
        console.log('>>>run didupdate: ', 'pre state ', preState, 'current state ', this.state)
    }

    componentDidMount() {
        console.log('>>> run component did mount ');
        //The place relevant to call API from backend
    }
    render() {
        console.log('>>>> call render: ', this.state)

        return (
            <>
                {/* Don't use this.addNewJob() bc passed 'job' */}
                <AddComponent addNewJob={this.addNewJob}
                />


                {/* <ChildComponentFunct */}
                <ChildComponentClass
                    //passing multiple data
                    arrayJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}

                />


            </>
        )
    }
}
export default Color(MyComponent);