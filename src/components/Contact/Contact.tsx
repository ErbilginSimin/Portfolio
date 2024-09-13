import React, { useState } from 'react';
import { useSeasonColors } from '../../contexts/SeasonColorsContext';
import { BackgroundGradient } from '../Motions/BackgroundGradient';

function Contact() {
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const { background } = useSeasonColors();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const contactData = {
      lastname,
      firstname,
      email,
      message,
    };

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

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
    <section
      id="Contact"
      className={`${background} relative p-4 sm:p-6 md:p-8 lg:p-12 flex justify-center`}
    >
      <BackgroundGradient
        containerClassName="w-full max-w-lg"
        className="p-6 sm:p-8 lg:p-12 "
      >
        <h2 className="text-white text-2xl font-bold text-center mb-4">
          Contactez-moi
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="lastname"
              className="block text-md font-bold text-white"
            >
              Nom
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Doe"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-bold text-white"
            >
              Prénom
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Jane"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-md font-bold text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="exemple@mail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-md font-bold text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Votre message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              rows={4}
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button className="btn btn-primary bg-white size-2/3 text-primary rounded-lg py-2">
              Envoyer
            </button>
          </div>

          {responseMessage && (
            <p className="text-center text-sm text-red-500 mt-4">
              {responseMessage}
            </p>
          )}
        </form>
      </BackgroundGradient>
    </section>
  );
}

export default Contact;
