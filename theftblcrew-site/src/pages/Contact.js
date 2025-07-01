import './Contact.css';
import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [success, setSuccess] = useState(null);

    function handleChange(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
}

    function handleSubmit(e) {
  e.preventDefault();

  fetch('http://localhost:5000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error(err);
      setSuccess(false);
    });
}

    return(
        <div className="contact-page">
            <h1>Contact us</h1>
            <p>Want to work with theftblcrew or have a question?</p>
            <p>📧 Email us at: nadimmetwalli@gmail.com</p>
            <p>📩 Or DM us on Instagram: <a href="https://instagram.com/theftblcrew" target="_blank">@theftblcrew</a></p>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your name"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
                <input 
                    type="email" 
                    placeholder="Your email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <textarea 
                    placeholder="Your message"
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                />
                <button type="submit">Send</button>
            </form>
            {success && <p>Thank you for your message!</p>}
            {success === false && <p>Something went wrong. Please try again.</p>}

        </div>   
    )
}
export default Contact;