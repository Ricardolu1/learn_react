function App(props) {
  return (
    <div>
      <Box1 name="jack" />
      <Box2 name="frank" />
    </div>
  )
}


class Box1 extends React.Component{
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
  minus(){
    this.setState({
      number:this.state.number-1
    })
  }
  render(){
    return(
      <div className="red">
        {this.state.number} <br/>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
        {this.props.name}
      </div>
    )
  }
}
class Box2 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      number:0
    }
  } 
  add(){
    this.setState({
      number:this.state.number+2
    })
  }
  minus(){
    this.setState({
      number:this.state.number-2
    })
  }
  render(){
    return(
      <div className="red">
        {this.state.number} <br/>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.minus.bind(this)}>-</button>
        {this.props.name}
      </div>
    )
  }
}




render()


function render() {
  ReactDOM.render(
    <App/>,
    document.querySelector('#root')
  )
}
