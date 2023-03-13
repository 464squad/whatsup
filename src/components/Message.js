const Message = (props) => {
  return (
    <div>
      <h3>{props.content}</h3>
      <p>Written by: {props.author} </p>
    </div>
  )
}

export default Message
