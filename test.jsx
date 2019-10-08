function App(props) {
  return(
    <div>
      <div className="header">
        <Time1 />
        <Judge />
        <Time2 />
      </div>
      <div>
        <Track1 />
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
function Track1() {
  return (
    <div className="border1">
      <div>兔子</div>
      <div className="track"></div>
    </div>
  )
}

function Track2() {
  return (
    <div>
      <div>乌龟</div>
      <div className="track"></div>
    </div>
  )
}

render()







function render() {
  ReactDOM.render(
    <App  />,
    document.querySelector('#root')
  )
}