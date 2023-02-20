import React, { useState } from "react";

function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = (event) => {
    event.preventDefault();
    setResponse('Le formulaire a ete envoye avec succes');
    setEmail("");
    setMessage("");
}


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="email" value={email} onChange={(e) => setEmail (e.target.value)} />
                </label>
                < br/>
                <label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                </label>
                <br />
            <button type="submit">Soumettre</button>
            </form>
            <p>{response}</p>
        </div>

    )
}
export default ContactForm; 