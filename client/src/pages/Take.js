import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import {getBasket, getBasketId} from "../http/basketAPI";
import {fetchOneBook} from "../http/bookAPI";
import AdminItem from "../components/AdminItem";
import {observer} from "mobx-react-lite";
import AdminList from "../components/AdminList";
import TakeItem from "../components/TakeItem";

const Take = observer(() => {
    const {basket}=useContext(Context)

    useEffect(()=>{
    })

    return (
        <Container className="d-flex ">
            <Row>
            {basket.userBooks.map(book=>
                <TakeItem key={book.id} bookT={book}/>
            )}
            </Row>
        </Container>
    );
});

export default Take;