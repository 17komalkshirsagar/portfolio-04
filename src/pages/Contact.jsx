import React from 'react';
import { Box, Typography, Button } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import MessageIcon from '@mui/icons-material/Message';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useRef } from "react";

const Contact = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formRef.current,
                "YOUR_USER_ID"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <section id="contact">
                <Box sx={{ marginTop: 5 }}>
                    <Typography variant="h6" >Get In Touch</Typography>
                    <Typography variant="h5">Contact Me</Typography>
                </Box>
                <Box sx={{ width: '450%', display: 'grid', gridTemplateColumns: '30% 58%', gap: '12%', }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <Box sx={{
                            background: '#f0f0f0',
                            padding: '1.2rem',
                            borderRadius: '1.2rem',
                            textAlign: 'center',
                            border: '1px solid transparent',
                            transition: 'background-color 0.3s, border-color 0.3s',
                            '&:hover': { background: 'transparent', borderColor: 'blue' }
                        }}>
                            <MailIcon className="contact__option-icon" />
                            <Typography variant="h5">Email</Typography>
                            <Typography variant="h6">inext.dev@proton.me</Typography>
                            <a href="https://mail.google.com/mail/u/0/#inbox">Send a message</a>
                        </Box>
                        <Box sx={{
                            background: '#f0f0f0',
                            padding: '1.2rem',
                            borderRadius: '1.2rem',
                            textAlign: 'center',
                            border: '1px solid transparent',
                            transition: 'background-color 0.3s, border-color 0.3s',
                            '&:hover': { background: 'transparent', borderColor: 'blue' }
                        }}>
                            <MessageIcon className="contact__option-icon" />
                            <Typography variant="h5">Messenger</Typography>
                            <Typography variant="h6">Dummy Hungry</Typography>
                            <a href="https://m.me">Send a message</a>
                        </Box>
                        <Box sx={{
                            background: '#f0f0f0',
                            padding: '1.2rem',
                            borderRadius: '1.2rem',
                            textAlign: 'center',
                            border: '1px solid transparent',
                            transition: 'background-color 0.3s, border-color 0.3s',
                            '&:hover': { background: 'transparent', borderColor: 'blue' }
                        }}>
                            <WhatsAppIcon className="contact__option-icon" />
                            <Typography variant="h5">Whatsapp</Typography>
                            <Typography variant="h6">+212 704866309</Typography>
                            <a href="https://api.whatsapp.com/send?phone=212704866309">
                                Send a message
                            </a>
                        </Box>
                    </Box>

                </Box>
            </section>
        </div>
    );
};

export default Contact;

// {/* <form ref={formRef} onSubmit={sendEmail} action="">
/* <input sx={{
    width: '100%',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    background: 'transparent',
    border: '2px solid blue',
    resize: 'none',
    color: 'white'
}} type="text" name="name" placeholder="Your Full Name" required />
<input sx={{
    width: '100%',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    background: 'transparent',
    border: '2px solid blue',
    resize: 'none',
    color: 'white'
}} type="email" name="email" placeholder="Your Email" required />
<textarea sx={{
    width: '100%',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    background: 'transparent',
    border: '2px solid blue',
    resize: 'none',
    color: 'white'
}} name="message" rows="7" placeholder="Your Message" required></textarea>
<Button sx={{ width: '100%' }} type="submit" variant="contained" color="primary">
    Send Message
// </Button>
// </form> */