class App extends React.Component{
  constructor(){
    super()
    this.state={
      message:'真好'
    }
  }
  changeMessage(){
    this.setState({
      message:'你好'
    })
  }
  render(){
    return(
      <div>hi
        <Foo message={this.state.message} 
        fn={this.changeMessage.bind(this)}/>
      </div>
    )
  }
}


function Foo(props) {
  console.log(this)
  return(
    <p>我得到message是{props.message}
      <button onClick={props.fn}>点我</button>
    </p>
  )
}

console.log(window.Foo)

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)