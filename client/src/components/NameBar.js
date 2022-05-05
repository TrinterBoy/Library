import React, {useContext, useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const NameBar = observer(() => {
    const {book}=useContext(Context)
    const [name,setName]=useState('')
    const [author,setAuthor]=useState('')

    useEffect(()=>{
        book.setSelectedName(name)
        book.setSelectedAuthor(author)
    })

    return (
        <div className="d-flex">
            <Form>
                <Form.Label>Назва книги</Form.Label>
                <Form.Control
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    type="text"
                />
            </Form>
            <Form style={{marginLeft:20}}>
                <Form.Label>Ім'я автора</Form.Label>
                <Form.Control
                    value={author}
                    onChange={e=>setAuthor(e.target.value)}
                    type="text"
                />
            </Form>
        </div>
    );
});

export default NameBar;