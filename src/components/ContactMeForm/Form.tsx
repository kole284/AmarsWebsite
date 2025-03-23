import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import styles from './Form.module.scss';



const Form = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const [isDisabled, setIsDisabled] = useState(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 3000);

    const serviceId='service_yfl72hj';
    const templateId='template_6h6d83j';
    const publicKey='ZpetDr5tTiZjCkk-_';

    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: 'Amar',
        message: message,
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey) 
    .then((response) => {
        console.log('email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
    })
    .catch((error) => {
        console.error("error sending email ", error);
    });
};

return (
    <form onSubmit={handleSubmit}>
        <input className={styles.input} type="text" placeholder="Your name: " value={name} onChange={(e) => setName(e.target.value)} />
        <input className={styles.input} type="email" placeholder="Your email: " value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea className={styles.textarea} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button className={styles.button} type="submit" disabled={isDisabled}>
            {isDisabled ? 'Please wait...' : 'Send Email'}
        </button>
    </form>
);
}

export default Form