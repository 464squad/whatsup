import { useState } from "react"
import MyButton from "./MyButton"


function Welcome(){
    const notifyClickStatus = (text) => {
        console.log('Something got clicked')
        console.log('What got clicked: ', text)
    
        setButtonClicked(text)
        // show the appropriate component next
      }

    return(
        <div>
            <h1> WhatsUp! </h1>
        <p> Click to get started!</p>
        <MyButton text={'Login!'} onButtonClick={notifyClickStatus} />
        <p> or sign up for an account!</p>
        <MyButton text={'Signup!'} onButtonClick={notifyClickStatus} />
        </div>
    )
}

export default Welcome