//the usage of useReducer
//Handling complex state

import React, {useReducer} from 'react';
import ReactDom from 'react-dom';

function App() {

    const [number, setNumber] = useReducer(
        (number, newNumber)
            => number + newNumber, 0);

    return (
        <h1 onClick={()=> setNumber(1)}>{number}</h1>
    )
}

ReactDom.render (
    <React.StrictMode>
        <App />
    </React.StrictMode>
    document.getElementById("root")
);

//Refactoring useState to useReducer
function Refactor() {
    const [checked, toggle] = useReducer(
        (checked) => !checked,
        false
    );

    return (
        <>
        <Input
         type="checkbox"
         value={checked}
         onChange={toggle}
         />
         {checked ? "checked" : "not checked"}
        </>
    )
}

//Dispatching actions with useReducer

const initialState ={
    message: "can I get some water?"
}

function reducer(state, action) {
    switch (action.type) {
        case "yell":
            return {
                message : `HEY! I JUST SAID ${state.message}`
            };
        case `excuse me, I just said ${state.message}`:
            return {
                message: "excuse me"
            };
    }
}


function Dispatching() {
    const [state, dispatch] = useReducer(
        reducer,
        initialState
    );

    return (
        <>
        <p>Message : {state.message}</p>
        <button onClick={()=> dispatch({type : "yell"})}>YELL</button>
        <button onClick={()=> dispatch({type : "whisper"})}>whisper</button>
        </>
    )

}

//useRef --> useful with the form to capture the values of input

function Form() {
    const sound = useRef();
    const color = uesRef();

    const submit = (e) => {
        e.preventDefault();
        const soundVal = sound.current.value;
        const colorVal = color.current.value;
        alert(`${soundVal} sounds like ${colorVal}`);
        sound.current.Value = "";
        color.current.Value = "";
    };

    return (
        <form onSubmit={submit}>
            <input 
            ref={sound}
            type="text"
            placeholder="Sound"/>
            <input
            ref={color}
            type="color"
            />
            <button>ADD</button>
        </form>
    )
}

//control component with useState

function Control() {
    const [sound, setSound] = useState("");
    const [color, setColor] = useState("#000000");

    const submit =(e) => {
        e.preventDefault();
        alert(`${sound} sounds like ${color}`);
        setSound ("");
        setColot ("#000000");
    }

    return (
        <form onSubmit={submit}>
            <input 
            value={sound}
            type="text"
            placeholder="Sound..."
            onChange={(e)=> setSound(e.target.value)}/>
            <input
            value={color}
            type="color"
            onChange={(e)=> setColor(e.target.value)}
            />
            <button>ADD</button>
        </form>
    )
}