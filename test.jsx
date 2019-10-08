

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      result1:0,
      result2:0
    }
    this.t0 = new Date()
  }
  success1(x){
    console.log(x);
    console.log('兔子跑完了,用时')
    let r1 = new Date()-this.t0
    this.setState({
      result1:r1
    })
  }
  success2(x){
    console.log(x);
    console.log('乌龟跑完了,用时')
    let r2 = new Date()-this.t0
    this.setState({
      result2:r2
    })
  }
  
  render(){ 
    return(
      <div>
        <div className="header">
          <Time1 result={this.state.result1}/>
          <Judge/>
          <Time2 result={this.state.result2} />
        </div>
        <div>
          <Playground success1={this.success1.bind(this)}
          success2 = {this.success2.bind(this)}
         />
        </div>
      </div>
    )
  }
}



function Time1(props) {
  return (
    <div>
      <h2>兔子用时</h2>
      <div>{props.result}</div>
    </div>
  )
}
function Time2(props) {
  return (
    <div>
      <h2>乌龟用时</h2>
      <div>{props.result}</div>
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
        n+=25
        this.setState({
          styleT:{
            transform:`translateX(${n}%)`
          }
        })
        if(n>=100){
          clearInterval(this.timerID)
          this.props.success('我是小兔兔')
        }
      }, 
      1000);
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
        n+=20
        this.setState({
          styleT:{
            transform:`translateX(${n}%)`
          }
        })
        if(n>=100){
          clearInterval(this.timerID)
          this.props.success('我是小龟龟')
        }
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

function Playground(props) {
  let success1 = props.success1 
  let success2 = props.success2
  return(
    <div className="playgound">
      <Track1 success={success1}/>
      <Track2 success={success2}/>
    </div>
  )
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