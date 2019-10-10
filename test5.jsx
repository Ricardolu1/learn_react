let createStore = Redux.createStore
let reducers =  (state , action) => {
  state = state || {
    money:{amount:100000}
  } 
  switch (action.type) {
    case '我想花钱':
      return {
        money:{
          amount:state.money.amount-action.payload
        }
      }
    default:
      return state
  }
}


const store = createStore(reducers) 
console.log(store.getState())  




class App extends React.Component{
  constructor(){
    super()
  }
  render(){
    return (
      <div className="App"> {this.props.store.money.amount}
        <BigPapa money={this.props.store.money} />
        <YoungPapa money={this.props.store.money} />
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
    // eventHub.trigger('我想花钱',100)
    store.dispatch({type:'我想花钱',payload:100})
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
    <App store={store.getState()}/>,
    document.querySelector('#root')
  )
}

render()
store.subscribe(render)










