//1. React: Manage State Locally First

class DisplayMessages extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            messages:[]
        }
    }

    handleChange=(e)=>{
        this.setState({
            input: e.target.value,
            messages: this.state.messages
        })
    }

    submitMessages() {
        this.setState({
            input:'',
            meessages:[...this.state.messages, this.state.input]
        })
    }

    render () {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input onChange={this.handleChange.bind(this)} value={this.state.input} />
                <button onSubmit={this.submitMessages.bind(this)}>Submit</button>
                <ul>
                    {this.state.messages.map((li, index)=> {
                            <li key={index}>{li}</li>
                    })}
                </ul>
            </div>
        )
    }
}

//2.Extract State Logic into Redux
//In REDUX, we need (1)action type, (2)action creator, (3)reducer, (4)store, and (5)Provider.
//The only functionality your app has is to add new messages from 
//the user to an unordered list. The example is simple in order to demonstrate how React and Redux work together.

//ACTION TYPE : define an action type : ADD
const ADD = "ADD"

//ACTION CREATOR define an action creator addMessage()
const addMessage = message => {
    return {
        type: ADD, 
        message
    }
}

//REDUCER create a reducer messageReducer() --> handles state
const messageReducer=(previousState=[], action)=>{
    switch (action.type) {
        case ADD:
            return [...previousState, action.message]
            break;
        default:
            return previousState;
    }
};

//STORE : Receives Reducer and ?
const store = Redux.createStore(messageReducer)

//PROVIDER to Connect Redux to React
//React Redux package provides a small API with two key features: Provider and connect.
//Provider is a Wrapper component from React Redux that wraps the React app passing the STORE as a prop.

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store} >
                <App />
            </Provider>
        )
    }
};