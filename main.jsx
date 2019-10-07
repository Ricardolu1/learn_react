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
  add(){
    this.setState({
      number:this.state.number+1
    })
  }
  render(){ //局部render
    return(
      <div>
        app 2 {this.props.name}
        <div>
          {this.state.number}
          {console.log(this)}
          <button onClick={this.add.bind()}>+</button>
        </div>
      </div>
    )
  }
}
function ad() {
  this.add
}

render()





function render() {
  ReactDOM.render(
    <App2 name="frank" age="18" />,   /* 等于React.creatElent(app) */
    document.querySelector("#root")
  )
}