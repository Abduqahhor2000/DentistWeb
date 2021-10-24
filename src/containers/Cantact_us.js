import React from "react";
import "../style/cantact_us.css"
import {ControlNavigator} from "../components/ControlNavigator";
import BlogComponent from "../styled_components/blog";
import { Form, Button } from "react-bootstrap";

export default function Cantact_us () {
    return(
    <> <ControlNavigator position={"/cantact_us"}/>
           <BlogComponent.Cantact_us>
               <div className="contact_header">Contact Us</div>
               <div className="contact_panel">
                   <div className="form">
                   <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                      
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                   </div>
                   <div className="information">

                   </div>
               </div>
           </BlogComponent.Cantact_us>
    </>
    )
}