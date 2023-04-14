
import React from 'react';

//Stateless
//narrow function component ko co this, passing directly from parent component => child
//Commonly, to should with hook

const ChildComponentFunct = (props) => { // truyen props
    let { arrayJobs } = props; // ko co this
    return (
        <>
            <div className='job lists'>
                {
                    arrayJobs?.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ChildComponentFunct;