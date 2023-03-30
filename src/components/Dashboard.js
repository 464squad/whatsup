import Message from './Message'
import Form from './Form'
import MessageList from './MessageList'

/*
  Form - takes in new messages
  MessageList - shows all the messages
*/

import { useState } from 'react'
import { useEffect } from 'react'

const Dashboard = () => {
  const [messages, setMessages] = useState([])

  // find a way to load the data when the component first renders
  useEffect(() => {
    //setup logic
    const savedMessages = JSON.parse(localStorage.getItem('messages'))
    if (savedMessages) {
      console.log('loaded messages', savedMessages)
      setMessages(savedMessages)
    }
  }, [])

  useEffect(() => {
    console.log('state changed', messages)
  }, [messages])

  let newMessageNotification = (newMessage) => {
    // called whenever the form submits a new message!
    // form will pass back the message
    // update the array of messages with the new message

    setMessages([...messages, newMessage])

    // save the messages locally
    // using JSON - Javascript Object Notation
    // {key:value, }
    localStorage.setItem('messages', JSON.stringify([...messages, newMessage]))
    console.log('Saved to local storage', [...messages, newMessage])
  }

  return (
    <div>
      <h1>This is my Dashboard</h1>
      <Form onNewMessage={newMessageNotification} />
      <p>Here are our messages</p>
      <MessageList messageData={messages} />
    </div>
  )
}

export default Dashboard
