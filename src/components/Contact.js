import React , { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import './Home.css'

const Contact = () => {
    
    const form = useRef();

    const handleSubmitForm = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_kdfg1od', 'template_nf41atj', form.current, 'bJ0DJFzngpP1Z9mhc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <>
        <section className="Contact-container">
                <h1>Contact Us</h1>
                <Form ref={form} className="contact_form_block_container" onSubmit={handleSubmitForm}>
                    <Form.Group className="form_block">
                        <Form.Group className="input_block">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text"  size="md"  name="user-name" />
                        </Form.Group >
                        <Form.Group className="input_block">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" size="md" name="user-email" />
                        </Form.Group >
                        <Form.Group className="input_block">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" size="md" name="user-subject" />
                        </Form.Group >
                        <Form.Group className="input_block">
                            <Form.Label>Your Message</Form.Label>
                            <textarea size="md" name="text-area" name="user-msg" class="form-control" />                          
                        </Form.Group >
                    </Form.Group>

                    <Button type="submit" className="button">Submit</Button>
                </Form>
        </section>
        <section  className="Contact-map">
        <div>
            <iframe style={{width: "100%", height:"500px"}}frameborder="0" scrolling="no" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Coimbatore,%20Tamil%20Nadu+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">bike gps</a></iframe>
        </div>
        </section>
        </>
    )
}

export default Contact
