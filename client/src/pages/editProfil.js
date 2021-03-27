import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editUserById} from "../JS/Action/actionUser";


// import "bootstrap/dist/css/bootstrap.min.css";


const EditProfil = ()=> {

 
const users =useSelector((state)=>state.userReducer.users);
const isAuth=useSelector((state)=>state.userReducer.isAuth);
  const [editUser, setEditUser] = useState({});

 
  const dispatch = useDispatch();
  

  useEffect(() => {
    setEditUser(users);
  }, [users]);



  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.fullName]: e.target.value });
  };






  return(


<div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: "22rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)",
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            color: "white",
          }}
        >
          Edit User
        </Card.Header>

        <Card.Body>
          <Card.Text>
            <Form>
              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>fullname:</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  placeholder="Enter your fullname"
                  value={editUser.fullName}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>email :</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={editUser.email}
                  
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>Biography</Form.Label>
                <Form.Control
                  type="text"
                 name="bio"
                  placeholder="Enter your phone"
                  value={editUser.bio}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
          <Link to="/">
            <Button
              variant="outline-primary edit-button"
              onClick={() => dispatch(editUserById(editUser._id, editUser))}
             
            >
              Save
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline-danger edit-button">Cancel</Button>
          </Link>
        </div>
      </Card>
</div>
  )
}

export default  EditProfil;

