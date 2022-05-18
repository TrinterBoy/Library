import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import {getBasket, getBasketId} from "../http/basketAPI";
import {fetchOneBook} from "../http/bookAPI";
import AdminItem from "../components/AdminItem";
import {observer} from "mobx-react-lite";

const Give = observer(() => {
    const {basket}=useContext(Context)

    return (
        <Container className="d-flex ">
            <Row>
            {basket.books.map(book=>
                <AdminItem key={book.id} bookT={book}/>
            )}
            </Row>
        </Container>
    );
});

export default Give;