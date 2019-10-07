function App(props) {
  return (
    <div>
      app {props.name}
    </div>
  )
}

class App2 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      number:0
    }
  }
  add{
    
  }
  render(){ //局部render
    return(
      <div>
        app 2 {this.props.name}
        <div>
          {this.state.number}
          <button onClick={this.add}>+</button>
        </div>
      </div>
    )
  }
}

render()





function render() {
  ReactDOM.render(
    <App2 name="frank" age="18" />,   /* 等于React.creatElent(app) */
    document.querySelector("#root")
  )
}