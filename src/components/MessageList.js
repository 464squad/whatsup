import Message from './Message'

const MessageList = (props) => {
  console.log('message data should be', props.messageData)

  return (
    <div>
      {props.messageData.map((value, index) => {
        return <Message key={index} content={value} author={'Cam'} />
      })}
    </div>
  )
}

export default MessageList
