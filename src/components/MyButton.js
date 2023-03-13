function MyButton(props) {
  const handleClick = () => {
    // alert('Clicked!')

    //sends data back to the parent via props
    props.onButtonClick(props.text)
  }

  return <button onClick={handleClick}> {props.text} </button>
}

export default MyButton
