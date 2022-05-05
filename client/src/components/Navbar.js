import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import Shop from "../pages/Shop";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logOut =()=>{
        user.setUser({})
        user.setIsAuth(false)
    }


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white',textDecoration:'none'}} to="/" element={<Shop/>}>Бібліотека One Touch</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"} onClick={()=>navigate('/admin')}>Адмін панель</Button>
                        <Button variant={"outline-light"} style={{marginLeft: 10}} onClick={()=>logOut()}>Вийти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color:'white'}}>
                        <Button variant={"outline-light"} onClick={()=>navigate("/login")}>Авторизація</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;