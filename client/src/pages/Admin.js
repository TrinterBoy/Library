import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateGenre from "../components/modals/CreateGenre";
import CreateBook from "../components/modals/CreateBook";
import ReturnBooks from "../components/modals/ReturnBooks";
import {observer} from "mobx-react-lite";

const Admin = observer(() => {
    const [genreVisible,setGenreVisible] = useState(false)
    const [bookVisible,setBookVisible] = useState(false)
    const [returnVisible,setReturnVisible] = useState(false)
    return (
        <Container className="d-flex flex-column mt-4">
            <Button variant={"outline-dark"} className="mt-2" onClick={()=> setGenreVisible(true)}>
                Додати жанр
            </Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={()=> setBookVisible(true)}>
                Додати книгу
            </Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={()=> setReturnVisible(true)}>
                Повернути книгу
            </Button>
            <CreateGenre show={genreVisible} onHide={()=> setGenreVisible(false)}/>
            <CreateBook  show={bookVisible} onHide={()=> setBookVisible(false)}/>
            <ReturnBooks show={returnVisible} onHide={()=> setReturnVisible(false)}/>
        </Container>
    );
});

export default Admin;