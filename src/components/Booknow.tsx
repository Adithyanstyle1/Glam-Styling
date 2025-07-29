import React, { useState } from 'react';
import './Booknow.css';

const BookNow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Booking submitted successfully!');
    // Replace this with API submission or email logic
    console.log(formData);
  };

  return (
    <div className="booknow-container">
      <h1 className="booknow-title">Book Your Glam Session</h1>
      <p className="booknow-subtitle">Experience luxury beauty services tailored to your occasion.</p>
      
      <form className="booknow-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <select name="service" onChange={handleChange} required>
          <option value="">Select Service</option>
          <option value="bridal">Bridal Makeup</option>
          <option value="editorial">Editorial Shoot</option>
          <option value="event">Event Styling</option>
        </select>
        <input type="date" name="date" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" rows={4} onChange={handleChange}></textarea>
        <button type="submit" className="booknow-button">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookNow;
