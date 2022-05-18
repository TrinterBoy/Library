import React, {useContext, useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import basket from "../../pages/Basket";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {getBasket, getBasketId} from "../../http/basketAPI";
import {fetchBook, fetchOneBook, getUnavailableBook} from "../../http/bookAPI";
import {getOneUser} from "../../http/userAPI";

const GiveList = ({show,onHide}) => {
    const navigate=useNavigate()
    const {basket}=useContext(Context)
    const [id,setId]=useState("")

    useEffect(()=>{
        basket.setSelectedId(id)
    })

    const Click=()=>{
        if(basket.ids) {
            const c = []
            getOneUser(basket.ids).then(user=>{
                getBasketId(basket.ids).then(data => {
                    getBasket(data.id).then(dataT => {
                        dataT.map(book => {
                            fetchOneBook(book.bookId).then(dataR => {
                                dataR.subscription = user.subscription
                                c.push(dataR)
                            })
                        })
                        basket.setBooks(c)
                    })
                })
            })
        }
        else {
            getUnavailableBook().then(dataR => {
                basket.setBooks(dataR.rows)
            })
        }
    }

    const Click2=()=>{
        navigate('/give')
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
                    Віддати книгу
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
                <Button variant={"outline-success"} onClick={Click}>Підтвердити Id</Button>
                <Button variant={"outline-success"} onClick={Click2}>Переглянути</Button>
                <Button variant={"outline-danger"} onClick={onHide}>Сховати</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default GiveList;