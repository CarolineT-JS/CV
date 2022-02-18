import '../style/Contact.css';
import {Form, Button} from 'react-bootstrap'
import React, { useState} from "react";



function Contact() {
    const [mail, setMail] = useState("");
    const [text, setText] = useState("");


    const sendMail = (e) => {

        console.log("testtststststs");
        console.log(mail);
        return fetch("http://localhost:8082/sendEmail", {
        // return fetch("/sendEmail", {
            method: "POST",
            mode: 'no-cors',
            headers : {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            },

            // body: JSON.stringify({body:{mail: setMail, text: setText }})
            body: JSON.stringify({ mail,text}),
            // body: JSON.stringify({body: {mail,text}}),

        })
            .then((res)=> {
                console.log(res);
                setMail("");
                setText("");
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (

        <div className="Contact container mt-5">
            <div className="row">
                <div className="col-sm-6  ">
                    <h1>google carte</h1>
                </div>
                <div className="col-sm-6  ">
                    <Form className="mt-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Control type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter votre texte" />
                        </Form.Group>
                        <Button variant="primary"  onClick={(e)=> sendMail(e)}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>

        </div>

    );
}

export default Contact;
