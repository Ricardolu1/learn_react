function App(props) {
  return (
    <div>
      <App2 name="ycy"/>
      <App2 name="lal"/>
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
          <button onClick={this.add.bind(this)}>+</button>
        </div>
      </div>
    )
  }
}


render()




function render() {
  ReactDOM.render(
    <App/>,
    document.querySelector("#root")
  )
}