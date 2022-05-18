import React, {useContext, useState} from 'react';
import {Button, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {
    deleteUser,
    updateSubscriptionToFalse,
    updateSubscriptionToTrue,
    updateToAdmin,
    updateToUser
} from "../http/userAPI";


const UserItem = observer(({user}) => {
    const [disable, setDisable] = useState(false);
    const [disable2, setDisable2] = useState(false);
    const [disable3, setDisable3] = useState(false);
    const [disable4, setDisable4] = useState(false);
    const [disable5, setDisable5] = useState(false);


    const Click=()=>{
        deleteUser(user.id).then(data=>{
            alert("Читача видалено")
            setDisable(true)
            setDisable2(true)
            setDisable3(true)
            setDisable4(true)
            setDisable5(true)
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
    const Click4=()=>{
        updateSubscriptionToTrue(user.id).then(data=> {
            alert("Читачу видано абонемент")
            setDisable4(true)
        })}
    const Click5=()=>{
        updateSubscriptionToFalse(user.id).then(data=> {
            alert("У читача забраний абонемент")
            setDisable5(true)
        })}


    return (
        <Col md={3} style={{paddingRight:40, marginTop:5}}>
            <div style={{border:"1px solid black",paddingLeft:10}} className="d-flex mb-2 mt-2">
                <div style={{minWidth:150}}>
                    <div className="d-flex">
                        <div style={{fontWeight:"bold"}}>{user.name} {user.surname}</div>
                    </div>
                    <div className="d-flex">
                        <div>•Телефон: 0{user.phone}</div>
                    </div>
                    <div className="d-flex">
                        <div>•Пошта: {user.email}</div>
                    </div>
                    <div className="d-flex">
                        <div>•Абонемент: {(user.subscription==true)?"Наявний":"Відсутній"}</div>
                    </div>
                    {(user.subscription==true)?
                        <div>•Дата видачі абонементу:<br/> {user.updatedAt.substring(0, 10)}</div>
                        :
                        <div/>
                    }
                    <div className="d-flex">
                        <div>•Роль: {user.role}</div>
                    </div>
                    <hr style={{marginTop:5,marginBottom:5}}></hr>
                    <div>
                        <Button style={{marginBottom:5,marginTop:5}} disabled={disable} variant="danger" onClick={Click}>Видалити користувача</Button>
                    </div>
                    <div>
                        <Button style={{marginBottom:5}} disabled={disable2} variant="info" onClick={Click2}>Зробити адміном</Button>
                    </div>
                    <div>
                        <Button style={{marginBottom:5}} disabled={disable3} variant="info" onClick={Click3}>Зробити користувачем</Button>
                    </div>
                    <div>
                        <Button style={{marginBottom:5}} disabled={disable4} variant="success" onClick={Click4}>Видати абонемент</Button>
                    </div>
                    <div>
                        <Button style={{marginBottom:5}} disabled={disable5} variant="danger" onClick={Click5}>Забрати абонемент</Button>
                    </div>

                </div>

            </div>

        </Col>
    );
});

export default UserItem;