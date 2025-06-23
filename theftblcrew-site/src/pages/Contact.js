import './Contact.css';

function Contact() {
    return(
        <div className="contact-page">
            <h1>Contact us</h1>
            <p>Want to work with theftblcrew or have a question?</p>
            <p>📧 Email us at: nadimmetwalli@gmail.com</p>
            <p>📩 Or DM us on Instagram: <a href="https://instagram.com/theftblcrew" target="_blank">@theftblcrew</a></p>

            <form>
                <input type="text" placeholder="Your name"/>
                <input type="email" placeholder="Your email"/>
                <textarea placeholder="Your message"/>
                <button type="submit">Send</button>
            </form>
        </div>


        
    )
}
export default Contact;