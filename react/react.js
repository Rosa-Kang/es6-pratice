//React use a syntax extension of JavaScript called JSX which allows you to write HTML directly within JS
//However, because JSX is not valid JavaScript, 
//JSX code must be compiled into JavaScript. 
//The transpiler Babel is a popular tool for this process. 
//For your convenience, it's already added behind the scenes 
//for these challenges. If you happen to write syntactically invalid JSX, 
//you will see the first test in these challenges fail.

//It's worth noting that under the hood the challenges are calling 
ReactDOM.render(JSX, document.getElementById('root'))
//using the ReactDOM API to render JSX elements to the DOM.
//This function call is what places your JSX into React's own lightweight 
//representation of the DOM. React then uses snapshots of its own DOM to 
//optimize updating only specific parts of the actual DOM.

//JSX looks very similar to HTML but the key difference is that you use CamelCase for the event
//and you can't use class as it is reserved word in JS. instead, you should use className in JSX.
//In JSX, any JSX element can be written with a self-closing tag

//There are two ways to create a React component. The first way is to use a JavaScript function. 
//Defining a component in this way creates a stateless functional component.

//1) Component using JS function : stateless
const MyComponent = function (){
   return (
       <h1>JSX</h1>
   )
};

//2) Using Class
class MyClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div/>
        )
    }
};

//Write a React Component
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
      <h1>My First React Component!</h1>
      </div>
    )
  }
};

ReactDOM.render(<MyComponent />, document.getElementById('root'))

