import React, {useContext, useState} from 'react';
import {Button, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {delUsersBook} from "../http/usersBookAPI";
import {postBookIdTrue} from "../http/bookAPI";


const TakeItem = observer(({bookT}) => {
    const navigate = useNavigate()
    const [disable, setDisable] = useState(false);


    const Click=()=>{
        delUsersBook(bookT.userId,bookT.id).then(()=>{
            postBookIdTrue(bookT.id).then()
            alert("Книгу повернуто")
            setDisable(true)
        })
    }


    return (
        <Col md={4}>
            <hr/>
            <div className="d-flex mb-2 mt-2" border={"light"} >
                <div style={{minWidth:150}}>
                    <div className="d-flex">
                        <div style={{cursor:"pointer",fontWeight:"bold"}} onClick={()=> navigate("/book" + "/"+ bookT.id)}>{bookT.name}</div>
                    </div>
                    <div className="d-flex">
                        <div style={{marginRight:5}}>{bookT.author}</div>
                    </div>
                    <div className="d-flex">
                        <div style={{marginRight:5}}>{bookT.updatedAt}</div>
                    </div>
                    <div>
                        <h5>Інформація про читача:</h5>
                        <div style={{marginRight:5}}>{bookT.username}</div>
                        <div style={{marginRight:5}}>{bookT.surname}</div>
                        <div style={{marginRight:5}}>Номер: 0{bookT.phone}</div>
                    </div>
                </div>
                <div>
                    <Button disabled={disable} onClick={Click}>Повернути</Button>
                </div>
            </div>
        </Col>
    );
});

export default TakeItem;