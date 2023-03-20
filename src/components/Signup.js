// Turn this into a default sign up form
// We should collect an email and name

import { useState } from 'react'

const Signup = () => {
  const [firstName, setFirstName] = useState('')

  const [lastName, setLastName] = useState('')

  const [email, setEmail] = useState('')

  const handleFirstNameChange = (event) => {
    console.log(event)
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    console.log(event)
    setLastName(event.target.value)
  }

  const handleEmailChange = (event) => {
    console.log(event)
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Thanks for submitting ${firstName} ${lastName}!`)
    console.log(firstName, lastName, email)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <label>
        First name:
        <input
          type="text"
          id="fname"
          name="fname"
          onChange={handleFirstNameChange}
        />
      </label>

      <label>
        Last name:
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={handleLastNameChange}
        />
      </label>

      <label>
        Email:
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleEmailChange}
        />
      </label>

      <input type="submit" value="Let's Go!" />
    </form>
  )
}

export default Signup
