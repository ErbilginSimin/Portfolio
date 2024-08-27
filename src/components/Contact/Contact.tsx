import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    // console.log(name, email, message);

    const contactData = {
      name,
      email,
      message,
    };

    try {
      const response = await fetch('http://localhost:8000/contact/php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage('Votre message a été envoyé avec succès');
      } else {
        setResponseMessage('Une erreur est survenue, veuillez réessayer');
      }
    } catch (error) {
      setResponseMessage('Une erreur est survenue, veuillez réessayer');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contactez-nous</h2>
      <label htmlFor="name">Nom</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      ></textarea>
      <button type="submit">Envoyer</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}

export default Contact;
