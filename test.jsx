function App(props) {
  return(
    <div>
      <div className="header">
        <Time1 />
        <Judge />
        <Time2 />
      </div>
      <div>
        <Track1 n={0.1}/>
        <Track2 />
      </div>
    </div>
  )
}



function Time1() {
  return (
    <div>
      <h2>兔子用时</h2>
      <div>0</div>
    </div>
  )
}
function Time2() {
  return (
    <div>
      <h2>乌龟用时</h2>
      <div>0</div>
    </div>
  )
}

function Judge() {
  return (
    <div>
      <div>裁判</div>
    </div>
  )
}

class Track1 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      styleT:{
        transform:`translateX(0%)`
      }
    }
  } 
  componentDidMount(){
    let n = 0
    this.timerID=setInterval(
      () => {
        n+=10
        this.setState({
          styleT:{
            transform:`translateX(${n}%)`
          }
        })
      }, 
      500);
  }   
  render(){
    return(
      <div className="border1">
      <div style={this.state.styleT} className="player">兔子</div>
      <div className="track"></div>
    </div>
    )
  }
}
 
class Track2 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      styleT:{
        transform:`translateX(0%)`
      }
    }
  } 
  componentDidMount(){
    let n = 0
    this.timerID=setInterval(
      () => {
        n+=10
        this.setState({
          styleT:{
            transform:`translateX(${n}%)`
          }
        })
      }, 
      1000);
  }   
  render(){
    return(
      <div className="border1">
      <div style={this.state.styleT} className="player">乌龟</div>
      <div className="track"></div>
    </div>
    )
  }
}









render()
// console.dir(Track1)
// console.dir(new Track1())
// console.dir(React.Component)





function render() {
  ReactDOM.render(
    <App  />,
    document.querySelector('#root')
  )
}