import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createBook, fetchBook, fetchGenre} from "../../http/bookAPI";
import {observer} from "mobx-react-lite";

const CreateBook = observer(({show,onHide}) => {
    const {book} = useContext(Context)
    const [name,setName]=useState('')
    const [author,setAuthor]=useState('')
    const [year,setYear]=useState(0)
    const [desc,setDesc]=useState('')
    const [file,setFile]=useState(null)

    useEffect(()=>{
        fetchGenre().then(data=>book.setGenres(data))
    },[])

    const selectFile=e=>{
        setFile(e.target.files[0])
    }
    const addBook = ()=>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('author',author)
        formData.append('year',`${year}`)
        formData.append('genreId',book.selectedGenre.id)
        formData.append('desc',desc)
        formData.append('isA',`${true}`)
        formData.append('img',file)
        console.log(formData)
        createBook(formData).then(data=>onHide())
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
                    Додати книгу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введіть назву книги"
                    />
                    <Form.Control
                        value={author}
                        onChange={e=>setAuthor(e.target.value)}
                        className="mt-3"
                        placeholder="Введіть ім'я автора"
                    />
                    <Dropdown>
                        <Dropdown.Toggle className="mt-3">{book.selectedGenre.name || "Оберіть жанр"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {book.genres.map(genre=>
                                <Dropdown.Item onClick={()=> book.setSelectedGenres(genre)} key={genre.id}>{genre.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        value={year}
                        onChange={e=>setYear(Number(e.target.value))}
                        placeholder="Введіть рік видання"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        value={desc}
                        onChange={e=>setDesc(e.target.value)}
                        placeholder="Введіть опис книги"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Оберіть фото книги"
                        type="file"
                        onChange={selectFile}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрити</Button>
                <Button variant={"outline-success"} onClick={addBook}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateBook;