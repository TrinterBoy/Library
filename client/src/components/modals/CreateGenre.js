import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createGenre} from "../../http/bookAPI";

const CreateGenre = ({show, onHide}) => {
    const [value,setValue]=useState('')

    const addGenre = () =>{
        createGenre({name:value}).then(data=> {
            setValue('')
            onHide()
        })
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
                    Додати жанр
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                    placeholder={"Введіть назву жанру"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрити</Button>
                <Button variant={"outline-success"} onClick={addGenre}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateGenre;