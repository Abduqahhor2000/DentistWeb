import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import "../style/signin.css";
import { useDispatch } from "react-redux";
import { addUserID } from "../store/actions/userIdAction";
import { useHistory } from "react-router-dom";
import { auth } from "../configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

export default function SignIn () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const [errorMsg, setErrorMsg] = useState({
        code: "",
        massega: "",
    });

    console.log(errorMsg);

    const hendlerInputChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => ({
            ...prevState, [name]: value
        }));
        console.log(state);
    }

    const handleLogin = async () => {
        try {
          const { email, password } = state;
          const authenticatedUser = await signInWithEmailAndPassword(auth, email, password);
          console.log(authenticatedUser);
          dispatch(addUserID(authenticatedUser));
          history.push("/balance");
        } catch (error) {
          console.log(error);
          setErrorMsg({ code: error.code, message: error.message })
        }
    } 

    const {email, password} = state;

    return(
        <div>
            <Row>
                <Col span={12} className="sign-in-image"></Col>
                <Col className="sign-in-right">
                    <Row className="sign-in-form"   align="middle" >
                        <Col className="sign-in-div">
                          <h1>Sign in</h1>
                          <p>Saytda ro'xatdan hali o'tmagan bo'lsangiz <Link to="sign-up">Sign up</Link> ga kiring!</p><br/>
                        <Form
                            layout="vertical"
                            name="basic"
                            labelCol={{
                              span: 24,
                            }}
                            wrapperCol={{
                              span: 24,
                            }}
                            initialValues={{
                              remember: true,
                            }}
                        >
                            <Form.Item
                              label="EMAIL"
                              name="username"
                              rules={[
                                {
                                  required: false,
                                  message: 'Please input your username!',
                                },
                              ]}
                            >
                              <Input
                               name="email"
                               value={state.email}
                               onChange={hendlerInputChange} 
                              />
                            </Form.Item>
                      
                            <Form.Item
                              label="PASSWORD"
                              name="password"
                              rules={[
                                {
                                  required: false,
                                  message: 'Please input your password!',
                                },
                              ]}
                            >
                              <Input.Password
                                    name="password"
                                    value={state.password}
                                    onChange={hendlerInputChange} 
                              />
                            </Form.Item>
                      
                            <Form.Item
                              wrapperCol={{
                                offset: 8,
                                justify: "center",
                                span: 16,
                              }}
                            >
                              <Button disabled={!(email) || !(password)} onClick={handleLogin}>
                                Submit
                              </Button>
                            </Form.Item>
                          </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}