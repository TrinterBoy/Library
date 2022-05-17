import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import basket from "../../pages/Basket";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {getBasket, getBasketId} from "../../http/basketAPI";
import {fetchBook, fetchOneBook, getUnavailableBook} from "../../http/bookAPI";
import {giveUsersBookById} from "../../http/usersBookAPI";
import {getAllUsers, getOneUser} from "../../http/userAPI";

const UserList = ({show,onHide}) => {
    const navigate=useNavigate()
    const {basket}=useContext(Context)
    const [id,setId]=useState("")

    useEffect(()=>{
        basket.setSelectedId(id)
    })

    const ClickSecond=()=>{
        navigate('/user')
    }

    const Click=()=>{
        let c=[]
        if(basket.ids) {
            getOneUser(basket.ids).then(data => {
                c.push(data)
                basket.setUsers(c)
                console.log(basket.users)
            })
        }
        else{
            getAllUsers().then(data=> {
                basket.setUsers(data)
            })

        }
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Повернути книгу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={id}
                        onChange={e=>{setId(e.target.value)}}
                        placeholder={"Введіть id читача"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-success"} onClick={Click}>Підтверити Id</Button>
                <Button variant={"outline-success"} onClick={ClickSecond}>Перейти до записів</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Сховати</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default UserList;