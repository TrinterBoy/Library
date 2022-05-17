import React, {useContext} from 'react';
import { Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const BookItem = observer(({bookT}) => {
    const navigate = useNavigate()


    return (
        <Col md={12}>
            <div className="d-flex mb-2 mt-4" border={"light"} >
                <Image className="mt-1" style={{marginRight:"10", cursor:"pointer"}} width={150} height={150} src={'http://localhost:5000/'  + bookT.img} />
                <div style={{minWidth:150, marginLeft:10}}>
                    <div className="d-flex">
                        <div style={{cursor:"pointer",fontWeight:"bold"}} onClick={()=> navigate("/book" + "/"+ bookT.id)}>{bookT.name}</div>
                        {bookT.isA==true?
                        <div style={{color:"green", marginLeft:5}}>(Є у наявності)</div>
                            :
                        <div style={{color:"red", marginLeft:5}}>(Немає у наявності)</div>}
                    </div>
                    <div className="d-flex">
                        <div style={{marginRight:5}}>{bookT.author}</div>

                    </div>
                    <div>Жанр: {bookT.genre}</div>
                    <div className="text-muted" style={{textAlign:"justify"}}>{bookT.desc}</div>
                </div>
            </div>
        </Col>
    );
});

export default BookItem;