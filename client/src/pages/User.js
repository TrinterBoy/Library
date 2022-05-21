import React, {useContext, useEffect, useState} from 'react';
import {Button, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import {getBasket, getBasketId} from "../http/basketAPI";
import {fetchOneBook} from "../http/bookAPI";
import AdminItem from "../components/AdminItem";
import {observer} from "mobx-react-lite";
import AdminList from "../components/AdminList";
import TakeItem from "../components/TakeItem";
import UserItem from "../components/UserItem";


const User = observer(() => {
    const {basket}=useContext(Context)

    return (
        <Container className="d-flex">
            {basket.users.map(user=>
                <UserItem key={user.id} user={user}/>
            )}
        </Container>
    );
});

export default User;