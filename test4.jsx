var money={
  amount:100000
}

var fnLists={//这个对象被共用了，所以他身上的方法可以被其他两个方法调用,这里有个闭包.
}
var eventHub={
   trigger(eventName,data){
    let fnList = fnLists[eventName]  //一个数组
    if  (!fnList) {return}
    for (let i = 0; i < fnList.length; i++) {
      fnList[i](data)
    }
  },
   on(eventName,fn){//最好传箭头函数，或者bind(this)，调用的是函数里的this就不会错了
    if (!fnLists[eventName]) {
      fnLists[eventName]= []
    }
    fnLists[eventName].push(fn)
  } 
}

var  x = {
  init(){
    eventHub.on('我想花钱',function(data) {
      money.amount-=data
      console.log(money.amount)
      render()
    }) 
  }
}



class App extends React.Component{
  constructor(){
    super()
    this.state={
      money:money
    }
  }
  render(){
    return (
      <div className="App"> {this.state.money.amount}
        <BigPapa money={this.state.money} />
        <YoungPapa money={this.state.money} />
      </div>
    )
  }
}

class BigPapa extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="papa">大爸{this.props.money.amount}
        <Son1 money={this.props.money} />
        <Son2 money={this.props.money} />
      </div>
    )
  }
}
class YoungPapa extends React.Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="papa">小爸{this.props.money.amount}
        <Son3  money={this.props.money}/>
        <Son4  money={this.props.money}/>
      </div>
    )
  }
}

class Son1 extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div className="son">儿子1--{this.props.money.amount}</div>
    )
  }
}
class Son2 extends React.Component{
  constructor(){
    super()
  }
  x(){
    eventHub.trigger('我想花钱',100)
  }
  render(){
    return (
      <div className="son">儿子2--{this.props.money.amount}
        <button onClick={()=>{this.x()}}>消费</button>
      </div>
    )
  }
}
class Son3 extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div className="son">儿子3--{this.props.money.amount}</div>
    )
  }
}
class Son4 extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div className="son">儿子4--{this.props.money.amount}</div>
    )
  }
}


function render() {
  ReactDOM.render(
    <App money={money.amount}/>,
    document.querySelector('#root')
  )
}

render()
x.init()











