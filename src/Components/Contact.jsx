import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Full Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validation
    if (!validate()) return;

    // Set up email parameters for EmailJS
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send('service_xv0bm9z', 'template_ho5qpj5', templateParams, '1wj1zjAKuX46wkBCm')
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setShowModal(true);

          // Set timeout to hide the modal after 3 seconds
          setTimeout(() => {
            setShowModal(false);
          }, 3000);
        },
        (error) => {
          console.log('Failed to send email:', error);
          alert('Failed to send message. Please try again.');
        }
      );

    // Clear the form after submission
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <div id='contact'>
      <h1 className='text-white text-center font-bold text-5xl' style={{ marginBottom: '50px' }}>
        CONTACT US
      </h1>
      <div className='container flex flex-col text-center items-center justify-center'>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ backgroundColor: '#1E1E1E', color: 'white', marginBottom: '7px', width: '600px', height: '50px', borderRadius: 5 }}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="email"
          placeholder="Type Your E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ backgroundColor: '#1E1E1E', color: 'white', marginBottom: '7px', width: '600px', height: '50px', borderRadius: 5 }}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <textarea
          placeholder="Write here....."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            backgroundColor: '#1E1E1E',
            color: 'white',
            marginBottom: '7px',
            width: '600px',
            height: '200px',
            borderRadius: '5px',
            padding: '10px',
            border: 'none',
          }}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

        <button
          onClick={handleSubmit}
          className="text-white"
          style={{
            backgroundColor: 'crimson',
            borderRadius: 5,
            width: '600px',
            height: '50px',
            fontSize: '20px',
            marginTop: '7px',
            marginBottom: '100px',
          }}
        >
          SEND
        </button>
      </div>

      {/* Success message in top right with countdown bar */}
      {showModal && (
        <div
          className="fixed top-4 right-4 bg-white text-black p-4 rounded-lg shadow-lg"
          style={{ zIndex: 1000, width: '300px' }}
        >
          <p className="text-center ">Your comment is sent successfully!</p>
          <div
            className="countdown-bar"
            style={{
              backgroundColor: 'green',
              height: '4px',
              width: '100%',
              position: 'absolute',
              bottom: '0',
              left: '0',
              animation: 'countdown 3s linear forwards'
            }}
          />
        </div>
      )}

      {/* CSS animation for countdown */}
      <style jsx>{`
        @keyframes countdown {
          from {
            width: 100%;
          }
          to {
            width: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;


