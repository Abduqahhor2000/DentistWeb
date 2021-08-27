import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import {auth, storage} from "../configs/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../style/signup.css";
import { useDispatch } from "react-redux";
import { addUserID } from "../store/actions/userIdAction";
import { useHistory } from "react-router-dom";
import {MdPhotoCamera} from "react-icons/all";


export default function SignUp () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState({
        displayName: "",
        email: '',
        password: '',
    });
    // const [errorMsg, setErrorMsg] = useState({
    //     code: "",
    //     message: "",
    // });
    const [signUpUserPhoto, setSignUpUserPhoto] = useState("https://firebasestorage.googleapis.com/v0/b/dentist-test-app.appspot.com/o/placeholder-image.jpg?alt=media&token=9da37c26-a05f-4bad-a3a7-c8ce94c57044");
    const [userPhotoFile, setUserPhotoFile] = useState({});
    
    const chooseImageHendler = (e) => {
        setUserPhotoFile(e.target.files[0]);
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            setSignUpUserPhoto(reader.result);
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };

    const hendlerInputChange = (e) => {
        const {name, value} = e.target;
        setUser((prevState) => ({
            ...prevState, [name]: value
        }));
        console.log(user);
    }

    const handleLogin = async (e) => {
      e.preventDefault(); 
      try{
        const { email, password } = user;
        const newCreatedUser = await createUserWithEmailAndPassword(auth, email, password);
        console.log("newCreatedUser", newCreatedUser);
        const      newUserID = newCreatedUser.user.uid;
        console.log("newUserID", newUserID);
        const photoRef = ref(storage, `users/${newUserID}/photo/profilePhoto.png`);
        const uploadedPhoto = await uploadBytes(photoRef, userPhotoFile);
        console.log("upload photo", uploadedPhoto);
        const photoURL = await getDownloadURL(uploadedPhoto.ref);
        
        console.log("photoURL", photoURL);
        await updateProfile(auth.currentUser, {
                    displayName: user.displayName,
                    photoURL: photoURL,
                  });      
        dispatch(addUserID(newCreatedUser));
        history.push("/balance");

      }catch(error){
        console.log(error);
      }
    }

      const {email, password, displayName} = user;
    return(
        <div>
          <Row>
            <Col className="sign-up-image" span={12}></Col>
            <Col className="sign-in-right" span={12} justify="center"  align="middle" >           
              <Row className="sign-up-form">
                <Col className="user-img" span={14} style={{alignSelf: "flex-end"}}>
                  <div style={{backgroundImage: `url(${signUpUserPhoto})`}} className="user-photo">
                    <span className="file-span">
                      <label className="file-label" htmlFor="file"> <MdPhotoCamera /></label>
                      <input className="photo-file" onChange={chooseImageHendler} name="file" id="file" type="file"></input>
                    </span>
                  </div>
                </Col>
               <Col span={14} style={{alignSelf: "flex-start"}} >
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
                        label="Display Name"
                        name="displayName"
                        rules={[
                          {
                            required: false,
                            message: 'Please input your username!',
                          },
                        ]}
                      >
                        <Input
                         name="displayName"
                         value={user.displayName}
                         onChange={hendlerInputChange} 
                         addonBefore="@"
                        />
                      </Form.Item>
                            
                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            required: false,
                            message: 'Please input your password!',
                          },
                        ]}
                      >
                        <Input
                              name="email"
                              type="email"
                              value={user.email}
                              onChange={hendlerInputChange} 
                        />
                      </Form.Item>

                      <Form.Item
                        label="Password"
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
                              value={user.password}
                              onChange={hendlerInputChange} 
                        />
                      </Form.Item>
                      
                      <Form.Item
                        wrapperCol={{
                          offset: 4,
                          justify: "center",
                          span: 16,
                        }}
                      >
                        <Button disabled={!(email) || !(password) || !(displayName)} onClick={handleLogin}>
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