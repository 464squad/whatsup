import { useState } from 'react'

import MyButton from './components/MyButton'
import './App.css'

import Login from './components/Login'
import Signup from './components/Signup'

/*
  Create a component that can show when a user presses Login! √

  Create a component that can show when a user presses SignUp! √

  Based on what button gets clicked show the right component
*/

function App() {
  // Should return some JSX

  const [buttonClicked, setButtonClicked] = useState(null)

  const [students, setStudents] = useState([])

  const [stateValueVariable, functionToSetStateValue] = useState(defaultStateValueVariable)

  const addToArray = (newItem)=> {
    // update the state of the array
    // Reference the old array
    let newArray = students
    newArray.push(newItem)

    setStudents(newArray)
  }

  const notifyClickStatus = (text) => {
    console.log('Something got clicked')
    console.log('What got clicked: ', text)

    setButtonClicked(text)
    // show the appropriate component next
  }

  const renderPage = () => {
    console.log('rendering page')
    if (buttonClicked == 'Login!') {
      return <Login />
    } else if (buttonClicked == 'Signup!') {
      return <Signup />
    } else {
      return (
        <div>
          <h1> WhatsUp! </h1>
          <p> Click to get started!</p>
          <MyButton text={'Login!'} onButtonClick={notifyClickStatus} />
          <p> or sign up for an account!</p>
          <MyButton text={'Signup!'} onButtonClick={notifyClickStatus} />
        </div>
      )
    }
  }

  return <div className="App">{renderPage()}</div>
}

export default App
