import React, {useState} from 'react';
import {Button, Col, Collapse, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const BookItem = observer(({bookT}) => {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);


    return (
        <Col md={12}>
            <div className="d-flex mb-2 mt-4" border={"light"} >
                <Image className="mt-1" style={{marginRight:"10",minWidth:110,cursor:"pointer"}} width={110} height={150} src={'http://localhost:5000/'  + bookT.img} />
                <div  style={{minWidth:150, marginLeft:10}}>
                    <div className="d-flex">
                        <div style={{cursor:"pointer",fontWeight:"bold"}} onClick={()=> navigate("/book" + "/"+ bookT.id)}>{bookT.name}</div>
                        {bookT.isA===true?
                        <div style={{color:"green", marginLeft:5}}>(Є у наявності)</div>
                            :
                        <div style={{color:"red", marginLeft:5}}>(Немає у наявності)</div>}
                    </div>
                    <div className="d-flex">
                        <div style={{marginRight:5}}>{bookT.author}</div>

                    </div>
                    <div>Жанр: {bookT.genre}</div>
                    <Button
                        variant="light"
                        size="sm"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        {!open ? "Опис ↓" : "Опис ↑"}
                    </Button>
                    <Collapse in={open}>
                        <div className="text-muted" id="example-collapse-text">
                            {bookT.desc}
                        </div>
                    </Collapse>
                </div>
            </div>
        </Col>
    );
});

export default BookItem;