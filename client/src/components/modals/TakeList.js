import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import basket from "../../pages/Basket";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {getBasket, getBasketId} from "../../http/basketAPI";
import {fetchBook, fetchOneBook, getUnavailableBook} from "../../http/bookAPI";
import {giveUsersBookById} from "../../http/usersBookAPI";
import {getOneUser} from "../../http/userAPI";

const TakeList = ({show,onHide}) => {
    const navigate=useNavigate()
    const {basket}=useContext(Context)
    const [id,setId]=useState("")

    useEffect(()=>{
        basket.setSelectedId(id)
    })

    const ClickSecond=()=>{
        navigate('/take')
    }

    const Click=()=>{
        let c=[]
            giveUsersBookById(basket.ids).then(dataT => {
                dataT.map(book => {
                    fetchOneBook(book.bookId).then(dataR => {
                        getOneUser(book.userId).then(info=>{
                            dataR.userId=info.id
                            dataR.username=info.name
                            dataR.surname=info.surname
                            dataR.phone=info.phone
                            c.push(dataR)
                        })
                    })
                })
            })
        basket.setUserBooks(c)
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

export default TakeList;