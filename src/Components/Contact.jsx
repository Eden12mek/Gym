import React from 'react'

function Contact() {
  return (
    <div id='contact'>
      <h1 className='text-white text-center font-bold text-5xl' style={{ marginBottom: '50px' }}>CONTACT US</h1>
      <div className=' container flex flex-col text-center items-center justify-center' style={{ paddingLeft: '7' }}>
        <input type="text" placeholder='Full Name' style={{ backgroundColor: '#1E1E1E', marginBottom: '7px', width: '600px', height: '50px', borderRadius: 5 }} />
        <input type="text" placeholder='Type Your E-mail' style={{ backgroundColor: '#1E1E1E', marginBottom: '7px', width: '600px', height: '50px', borderRadius: 5 }} />
        <textarea
          placeholder="Write here....."
          style={{
            backgroundColor: '#1E1E1E',
            marginBottom: '7px',
            width: '600px',
            height: '200px',
            borderRadius: '5px',
            color: 'white',
            padding: '10px',
            border: 'none',
          }}
        />
        <button
          className="text-white"
          style={{
            backgroundColor: 'crimson',
            borderRadius: 5,
            width: '600px', 
            height: '50px',
            fontSize: '20px',
            marginTop: '7px',
            marginBottom:'100px'
          }}
        >
          SEND
        </button>

      </div>
    </div>
  )
}

export default Contact
