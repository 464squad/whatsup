// modern standard (arrow functions)

let Hello = (props) => {
  let firstName = props.student.firstName
  let lastName = props.student.lastName

  if (firstName && lastName) {
    return (
      <div>
        <h3>
          Hello {firstName} {lastName}
        </h3>
      </div>
    )
  } else {
    return <h3> I need a name! </h3>
  }
}

export default Hello
