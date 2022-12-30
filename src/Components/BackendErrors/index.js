import React from 'react'

export const BackendErrorMessages = ({backendErrors}) => {
  const errorMessages = Object.entries(backendErrors).map(
    ([name, messages]) => `${name} ${messages.join(' ')}`
  )

  return (
    <ul className="error-messages">
      {errorMessages.map(errorMessage => (
        <li key={errorMessage}>{errorMessage}</li>
      ))}
    </ul>
  )
}
