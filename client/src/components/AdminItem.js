import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {postBookIdTrue} from "../http/bookAPI";
import {Context} from "../index";
import {deleteBasket, getBasketId} from "../http/basketAPI";
import {createUsersBook} from "../http/usersBookAPI";

const AdminItem = observer(({bookT}) => {
    const navigate = useNavigate()
    const {basket}=useContext(Context)
    const [disable, setDisable] = useState(false);


    const ClickFirst=()=>{
        postBookIdTrue(bookT.id).then(()=>{
                deleteBasket(undefined,bookT.id).then()
            alert("Книгу повернуто у базу")
            setDisable(true)
        })
    }
    const ClickSecond=()=>{
        getBasketId(basket.ids).then(data => {
            deleteBasket(data.id, bookT.id).then(() => {
                createUsersBook(basket.ids,bookT.id).then()
                    alert("Книгу віддано читачу")
                setDisable(true)
            })
        })
    }


    return (
        <Col md={12}>
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
                    {(bookT.subscription==undefined)
                        ?
                        <div/>
                        :
                        <div>
                            <hr style={{marginTop:2,marginBottom:2}}></hr>
                            <div style={{marginRight:5}}>{(bookT.subscription)?"У користувача є абонемент":"У користувача немає абонемента"}</div>
                        </div>
                    }
                </div>
                <div>
                <Button disabled={disable} onClick={ClickFirst}>Зняти</Button>
                    {basket.ids?
                <Button disabled={disable} onClick={ClickSecond}>Віддати</Button>
                        :
                        <div></div>
                    }
                </div>
            </div>
        </Col>
    );
});

export default AdminItem;