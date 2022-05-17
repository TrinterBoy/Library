import React, {useContext, useState} from 'react';
import {Button, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {deleteUser, updateToAdmin, updateToUser} from "../http/userAPI";


const UserItem = observer(({user}) => {
    const [disable, setDisable] = useState(false);
    const [disable2, setDisable2] = useState(false);
    const [disable3, setDisable3] = useState(false);


    const Click=()=>{
        deleteUser(user.id).then(data=>{
            alert("Читача видалено")
            setDisable(true)
            setDisable2(true)
            setDisable3(true)
    })}
    const Click2=()=>{
        updateToAdmin(user.id).then(data=>{
        alert("Читача зроблено адміністратором")
        setDisable2(true)
    })}
    const Click3=()=>{
        updateToUser(user.id).then(data=> {
            alert("Читача зроблено користувачем")
            setDisable3(true)
        })}


    return (
        <Col md={3} style={{border:"1px solid black", marginTop:5}}>
            <div className="d-flex mb-2 mt-2" border={"light"} style={{marginLeft:10}}>
                <div style={{minWidth:150}}>
                    <div className="d-flex">
                        <div style={{fontWeight:"bold"}}>{user.name} {user.surname}</div>
                    </div>
                    <div className="d-flex">
                        <div>0{user.phone}</div>
                    </div>
                    <div className="d-flex">
                        <div>{user.email}</div>
                    </div>
                    <div className="d-flex">
                        <div>Роль: {user.role}</div>
                    </div>
                    <div>
                        <Button style={{marginBottom:5,marginTop:5}} disabled={disable} onClick={Click}>Видалити</Button>
                    </div>
                    <div>
                        <Button style={{marginBottom:5}} disabled={disable2} onClick={Click2}>Зробити адміном</Button>
                    </div>
                    <div>
                        <Button disabled={disable3} onClick={Click3}>Зробити користувачем</Button>
                    </div>

                </div>

            </div>

        </Col>
    );
});

export default UserItem;