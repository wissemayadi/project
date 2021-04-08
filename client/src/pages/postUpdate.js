import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPost,getPostById} from "../JS/Action/actionPost";


// import "bootstrap/dist/css/bootstrap.min.css";


const EditPost = ()=> {

 

const postById =useSelector((state)=>state.postReducer.postById[0]);
const isAuth=useSelector((state)=>state.userReducer.isAuth);

 const users=useSelector((state)=>state.userReducer.users)
const id = useSelector((state)=>state.userReducer.users._id)
const postByUserId=useSelector((state)=>state.postReducer.postByUserId);

  const dispatch = useDispatch();
  const [editPoster, setEditPoster] = useState({});


  console.log(postById)
 
  useEffect(() => {
    
    setEditPoster(postById);
  }, [postById]);







  const handleChange = e => {
   
    setEditPoster({ ...editPoster, [e.target.name]: e.target.value });
  };



  return (
<div style={{ display: "flex", justifyContent: "center" }}>
  
{ editPoster ? 
<div>
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
    
      {users.fullName}
      
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            color: "white",
          }}
        >
          Edit Post
        </Card.Header>

        <Card.Body>
          <Card.Text>
{/* {postByUserId.map((post,index)=>post._id==id ? <li>{post}</li>: null)} */}
            <form>
              <Form.Group
                controlId="fullName"
                style={{ textAlign: "left" }}
              >
                <Form.Label>country:</Form.Label>
                <Form.Control
                  type="text"
                  name="country"
                  placeholder="Enter your fullname"
                  value={editPoster.country}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>date start</Form.Label>
                <Form.Control
                  type="text"
                  name="dateStart"
                  
                  placeholder="dateStart"
                  value={editPoster.dateStart}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>dateEnd</Form.Label>
                <Form.Control
                  type="text"
                  name="dateEnd"
                  
                  placeholder="Enter your phone"
                  value={editPoster.dateEnd}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                <Form.Label>description</Form.Label>
                <Form.Control
                  type="text"
                  name="description"
                  
                  placeholder="Enter your description"
                  value={editPoster.description}
                  onChange={handleChange}
                />
                </Form.Group>
                  <Form.Group
                controlId="formBasicEmail"
                style={{ textAlign: "left" }}
              >
                  <Form.Label>autre</Form.Label>
                <Form.Control
                  type="text"
                  name="autre"
                  
                  placeholder="Enter your facebook"
                  // Value={editPost.facebook}
                  // onChange={handleChange}
                />
              </Form.Group>

              {/* <label for="country">country</label>
                <input type="text" name="country" value={editPoster.country} onChange={handleChange}/> */}
            </form>
          </Card.Text>
        </Card.Body>
        <div className="buttons">
            <Link to="/profil">  
            <Button
              variant="outline-primary edit-button"
              onClick={() => dispatch(editPost(editPoster._id, editPoster))}
             
            >
              Save
            </Button>
            </Link>  
       {/*    <Link to="/">
            <Button variant="outline-danger edit-button">Cancel</Button>
          </Link> */}
        </div>
      </Card>
  < Link to ="/profil"><button>back to post</button></Link>
      <div>
</div>
      </div> : "..."  
}
</div>
  )
}

export default  EditPost;

