//Show + Hide feature
import React from 'react';
import "../../styles/buttonExp.scss";
//stateless and stateful (function(not function component) and class)
//class component co this
//Stateful

class ChildComponentClass extends React.Component {
    state = {
        showJobs: false
    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
            // ! is negative exp: showJobs(false) enter hide => true (negative)
        })
    }
    handleOnclickDelete = (job) => {
        alert('click me')
        console.log('>>>handleOnclickDelete ', job)
        this.props.deleteAJob(job)
    }
    render() {
        let { arrayJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'; //showJobs === true is compare condition, true print first false print second

        console.log('>>> check conditional: ', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button className='btn-show'
                            onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>

                    :
                    <>
                        <div className='job lists'>
                            {
                                arrayJobs?.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {/* 'key' can determine elements were changed, added, deleted */}
                                            {item.title} - {item.salary} $ <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                            {/* {console.log('check array', a)} */}
                        </div>
                        <div><button className='hide' onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    }
}


export default ChildComponentClass;