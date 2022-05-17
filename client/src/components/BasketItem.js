import React, {useContext, useState} from 'react';
import {Button, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {postBookIdTrue} from "../http/bookAPI";
import {deleteBasket, getBasket, getBasketId} from "../http/basketAPI";

const BasketItem = observer(({bookT}) => {
    const navigate = useNavigate()
    const {book,user} = useContext(Context)
    const [disable, setDisable] = useState(false);

    const Remove =()=>{
        getBasketId(user.user.id).then(data => {
            deleteBasket(data.id,bookT.id).then(()=>{
                postBookIdTrue(bookT.id).then()
                alert("Книгу видалено")
                setDisable(true)}
            )
        })
    }

    return (
        <Col md={12}>
            <hr/>
            <div className="d-flex mb-2 mt-4" border={"light"} >
                <Image className="mt-1" style={{marginRight:"10", cursor:"pointer"}} width={150} height={150} src={'http://localhost:5000/'  + bookT.img} />
                <div style={{minWidth:150, marginLeft:10}}>
                    <div className="d-flex">
                        <div style={{cursor:"pointer",fontWeight:"bold"}} onClick={()=> navigate("/book" + "/"+ bookT.id)}>{bookT.name}</div>
                    </div>
                    <div className="d-flex">
                        <div style={{marginRight:5}}>{bookT.author}</div>
                    </div>
                    {book.genres.map(genre=>
                        bookT.genreId==genre.id
                            ?
                            <div key={genre.id}>Жанр: {genre.name}</div>
                            :
                            <div></div>
                    )}
                    <div className="text-muted" style={{textAlign:"justify"}}>{bookT.desc}</div>
                </div>
                <Button style={{height:40}} disabled={disable} onClick={Remove}>Повернути</Button>
            </div>
        </Col>
    );
});

export default BasketItem;