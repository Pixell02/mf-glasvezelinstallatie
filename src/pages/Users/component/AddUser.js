import React from 'react'
import './addUser.css'

export default function AddUser() {
  return (
    <div className='add-user-container'>
      <p>Dodaj użytkownika</p>
      <div className='d-flex flex-row'>
        <input type="text" />
        <button className='btn btn-warning'>Dodaj</button>
      </div>
      <div className='user-account-container mt-2'>
        <div className='d-flex flex-column w-100 overflow-auto h-100'>
          <div className='d-flex flex-row'><label>Email: </label><span>jakisemail@email.com</span></div>
          <div className='d-flex flex-row mt-1 border-bottom border-dark '><label>hasło: </label><span>zaqwsx</span></div>
        </div>
      </div>
    </div>
  )
}
