import { useState } from 'react'

const Form = (props) => {
  const [message, setMessage] = useState('')

  // handleMessageChange = () => {
  //     setMessage("something else")
  // }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        alert(message)
        // send the message to the MessageList through the Dashboard
        props.onNewMessage(message)
      }}
    >
      <label>
        New Message:
        <input
          type="text"
          name="newMessage"
          onChange={(event) => {
            setMessage(event.target.value)
          }}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default Form
