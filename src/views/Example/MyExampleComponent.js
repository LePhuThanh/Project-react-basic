import React from 'react';

class MyExampleComponent extends React.Component {

    //key:value
    state = {
        lastName: 'Le',
        channel: ''
        // The most advantage of state is when we promptly change value of object 'state' that UI will display this value straightway, not f5
    }
    handleOnChangeName = (event) => {
        // console.log(event.target.value, 'event target:', event.target, 'event object:', event)

        this.setState({
            channel: event.target.value,
            lastName: "abc"
        })
    }
    handleClickButton = () => {
        // console.log('hit the button')
        alert('click me')
    }

    render() {
        // JSX -> return block
        //  to want to write Javascript -> write in { ... }
        let name = 'Phu Thanh';
        console.log('>>>> call render: ', this.state)
        return (
            <>
                <div className='first'>
                    <input value={this.state.channel} type='text'
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    {/* {console.log('My name is:', name)} */}
                    <p>Hello my friends! I am {name} </p>
                </div>
                <div className='second'>
                    <p> To call from state: <br /> My last name is {this.state.lastName} <br /> My channel is {this.state.channel}</p>
                </div>
                <div>
                    <button onClick={() => this.handleClickButton()} >Click me!</button>
                </div>
            </>
        )
    }
}
export default MyExampleComponent;