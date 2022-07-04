// hook사용을 위해 usesState import
import { Component, useState } from 'react';
import './App.css';



// 함수형태는 render x
function App() {
  return (
    <div className='container'>
      <h1>Hello React!!</h1>
      {/* 프록스 이름은 내가 정함  initNumber */}
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

export default App;



function FuncComp(props) {
  // 함수형태의 component는 프롭스를 받을때 매개변수를 통해 받는다. 사용방식은 동일


  // Hook이라는 개념을 통해 함수형태의 component에서도 state를 사용가능하다 (use)


  // let numberState = useState(props.initNumber);
  // let number = numberState[0];
  // let setNumber = numberState[1];

  //ES6에서 제공하는 형태
  const [number, setNumber] = useState(0);
  
  
  
  // let dateState = useState((new Date()).toString());
  // let date = dateState[0];
  // let setDate = dateState[1];
  // ES6에서 제공하는 형태
  let [date, setDate] = useState((new Date()).toString());

  return (
    <div className='container'>
      <h2>function style component</h2>
      <p>Number : {props.initNumber}</p>
      <p>Number : {number}</p>

      <input type='button' value='Random'
        onClick={function () {
          setNumber(Math.random());
        }}></input>

      <input type='button' value='Increase' onClick={() => setNumber(number + 1)}></input>

      <input type='button' value='Date Update' 
        onClick={function(){
          setDate((new Date()).toString());
        }}>
      </input>
      <p>
        date : {date}
      </p>
    </div>
  );
}















let classStyle = 'color:red';

// 프로그램의 라이프사이클에 의해 자동 호출되는 함수  실행순서 
// 1. constructor
// 2. componentWillMount
// 3. render()
// 4. componentDidMount

// 해당시점 확인해보자

class ClassComp extends Component {


  state = {
    number: this.props.initNumber,
    date : new Date().toString()
  }

  componentWillMount(){
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount(){
    console.log('%cclass => componentDidMount', classStyle);
  }
  
  render() {
    console.log('%cclass => render', classStyle);
    return (
      <div className='container'>
        <h2>Class style component</h2>
        <p>Number (props) : {this.props.initNumber}</p>
        <p>Number (state) : {this.state.number}</p>
        <input type='button' value='Random' onClick={function () {
          // 클래스내 핸들러문에 .bind(this) 해야 state값을 가져올수있다
          this.setState({ number: Math.random() });
        }.bind(this)}></input>

        <input type='button' value='Increase'
          onClick={function () {
            this.setState({ number: (this.state.number) + 1 })
          }.bind(this)}>
        </input>

        <input type='button' value='Date Update'
          onClick={function () {
            this.setState({ date: new Date().toString() });
          }.bind(this)}>

        </input>
        <p>
          date : {this.state.date}
        </p>

      </div>
    );
  }
}