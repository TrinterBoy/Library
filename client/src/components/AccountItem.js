import React, {useContext, useState} from 'react';
import {Button, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {postBookIdTrue} from "../http/bookAPI";
import {Context} from "../index";
import {deleteBasket, getBasketId} from "../http/basketAPI";
import {createUsersBook} from "../http/usersBookAPI";

const AccountItem = observer(({bookT}) => {
    const navigate= useNavigate()

    return (
        <Col md={2}>
            <hr/>
            <div className="d-flex mb-2 mt-2" border={"light"} >

                <div style={{minWidth:150}}>
                    <div className="d-flex">
                        <div style={{cursor:"pointer",fontWeight:"bold"}} onClick={()=> navigate("/book" + "/"+ bookT.id)}>{bookT.name}</div>
                    </div>
                    <div className="d-flex">
                        <div style={{marginRight:5}}>{bookT.author}</div>
                    </div>
                </div>
            </div>
        </Col>
    );
});

export default AccountItem;