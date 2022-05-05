import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Auth = observer(() => {
    const {user}=useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === "/login"
    const [name,setName] =useState('')
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')

    const click = async ()=>{
        try{
        let data;
        if(isLogin){
            data = await login(email,password)
        }else{
            data = await registration(name,email,password)
        }
        user.setUser(user)
        user.setIsAuth(true)
        navigate('/')
        }catch (e){
            alert(e.response.data.message)
        }
    }


    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизація':'Реєстрація'}</h2>
            <Form className="d-flex flex-column">
                {!isLogin ?
                <Form.Control
                    className="mt-3"
                    placeholder="Введіть ім'я..."
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
                    :
                    <div></div>
                }
                <Form.Control
                    className="mt-3"
                    placeholder="Введіть email..."
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Введіть пароль..."
                    type="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}

                />
                <div className="d-flex justify-content-between mt-3 ">
                    {isLogin ?
                        <div>
                            Немає акаунту? <NavLink to="/registration">Зареєструйся!</NavLink>
                        </div>
                        :
                        <div>
                            Вже зареєстровані? <NavLink to="/login">Увійдіть!</NavLink>
                        </div>
                    }
                    <Button
                        className="align-self-lg-end"
                        onClick={click}
                        ariant="outline-success">
                        {isLogin ? "Увійти" : "Зареєструватись"}
                    </Button>
                </div>

            </Form>
            </Card>
        </Container>
    );
});

export default Auth;