class ExampleNest extends React.Component{
    render(){
        return (
            <div>
            <h1>I Am Parent</h1>
            <Component1/>
            <Component2/>
            </div>);
    }
}

class Component1 extends React.Component{
    render(){
        return <h2>I Am Child One</h2>;
    }
}

class Component2 extends React.Component{
    render(){
        return <h2>I Am Child Two</h2>;
    }
}

ReactDOM.render(
    <ExampleNest/>,
    document.getElementById('example')
);