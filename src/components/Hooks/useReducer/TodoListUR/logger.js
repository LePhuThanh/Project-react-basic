
const logger = (reducer) => {
    //return reducer
    return (prevState, action) => {

        console.group(action.type) // group according the type

        console.log('Prev state: ', prevState)
        console.log('Acttion: ', action)
        const newState = reducer(prevState, action)

        console.log('New state: ', newState)

        console.groupEnd()

        return newState
    }
}

export default logger;