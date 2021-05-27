//1.Manage State Locally First

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
//The only functionality your app has is to add new messages from 
//the user to an unordered list. The example is simple in order to demonstrate how React and Redux work together.

//define an action type : ADD

//define an action creator addMessage()

//create a reducer messageReducer() --> handles state