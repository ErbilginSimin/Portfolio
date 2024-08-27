import React, { useState } from 'react';
import { useSeasonColors } from '../../contexts/SeasonColorsContext';
import { HoverBorderGradient } from '../Motions/hover-border-gradient';

function Contact() {
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const { background } = useSeasonColors();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const contactData = { lastname, firstname, email, message };

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
    <section
      id="Contact"
      className={`${background} relative p-4 sm:p-6 md:p-8 lg:p-12 flex justify-center`}
    >
      <div className="form bg-white w-full max-w-lg p-6 sm:p-8 lg:p-12 rounded-lg shadow-md">
        <h2 className="text-primary text-2xl font-bold text-center mb-4">
          Contactez-moi
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              Prénom
            </label>
            <input
              type="text"
              id="firstname"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              rows={4}
            ></textarea>
          </div>

          <div className="flex justify-center">
            <HoverBorderGradient
              as="button"
              containerClassName="w-full"
              className="w-full"
            >
              Envoyer
            </HoverBorderGradient>
          </div>

          {responseMessage && (
            <p className="text-center text-sm text-red-500 mt-4">
              {responseMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
