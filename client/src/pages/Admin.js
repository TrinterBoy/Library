import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateGenre from "../components/modals/CreateGenre";
import CreateBook from "../components/modals/CreateBook";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import GiveList from "../components/modals/GiveList";
import TakeList from "../components/modals/TakeList";
import UserList from "../components/modals/UserList";

const Admin = observer(() => {
    const navigate=useNavigate()
    const [genreVisible,setGenreVisible] = useState(false)
    const [bookVisible,setBookVisible] = useState(false)
    const [returnVisible,setReturnVisible] = useState(false)
    const [giveVisible,setGiveVisible] = useState(false)
    const [userVisible,setUserVisible] = useState(false)
    return (
        <Container className="d-flex flex-column mt-4">
            <Button variant={"outline-dark"} className="mt-2" onClick={()=> setGenreVisible(true)}>
                Додати жанр
            </Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={()=> setBookVisible(true)}>
                Додати книгу
            </Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={()=> setGiveVisible(true)}>
                Віддати книгу
            </Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={()=> setReturnVisible(true)}>
                Повернути книгу
            </Button>
            <Button variant={"outline-dark"} className="mt-2" onClick={()=> setUserVisible(true)}>
                Користувачі
            </Button>

            <CreateGenre show={genreVisible} onHide={()=> setGenreVisible(false)}/>
            <CreateBook  show={bookVisible} onHide={()=> setBookVisible(false)}/>
            <TakeList show={returnVisible} onHide={()=> setReturnVisible(false)}/>
            <GiveList show={giveVisible} onHide={()=> setGiveVisible(false)}/>
            <UserList show={userVisible} onHide={()=> setUserVisible(false)}/>
        </Container>
    );
});

export default Admin;