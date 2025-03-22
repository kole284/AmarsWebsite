import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import styles from './Form.module.scss';



const Form = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const serviceId='service_0cjmqme';
        const templateId='template_lnd1afb';
        const publicKey='58v6cQEJ8H_f6nMTC';


        const  templateParams = {
            from_name: name,
            from_email:email,
            to_name:'Kole284',
            message: message,
        };
        
        emailjs.send(serviceId,templateId,templateParams,publicKey) 
        .then((response)=> {
            console.log('email sent successfully!',response);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            console.error("error sending  email ", error);
        });

    }

  return (
    <form onSubmit={handleSubmit}>
        <input className={styles.input} type="text" placeholder='Your name: ' value={name} onChange={(e) => setName(e.target.value)}></input>
        <input className={styles.input} type="email" placeholder='Your email: ' value={email} onChange={(e) => setEmail(e.target.value)}></input>

        <textarea className={styles.textarea} value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button className={styles.button}type='submit'>Send Email</button>
    </form>
  )
}

export default Form