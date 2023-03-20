import Message from './Message'

const Dashboard = () => {
  return (
    <div>
      <h1>This is my Dashboard</h1>
      <p>Here are our messages</p>
      <div>
        <Message content={'Hello World'} author={'Cam'} />
        <Message content={'This is cool!'} author={'Cam'} />
        <Message content={'React is dope!'} author={'Cam'} />
      </div>
    </div>
  )
}

export default Dashboard
