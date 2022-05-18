import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Container, Row} from "react-bootstrap";
import AccountItem from "../components/AccountItem";

const Account = observer(() => {
    const {basket,user} = useContext(Context)



    return (
        <Container>
            {
                (user.user.subscription==true)
                    ?
                    <h4>Абонемент наявний</h4>
                    :
                    <h4>Немає абонементу</h4>
            }
            <h4>{user.user.name} {user.user.surname} під Id {user.user.id}, наразі у вас знаходяться такі книги:</h4>
            <Row className="d-flex">
                {basket.userBooks.map(book=>
                    <AccountItem key={book.id} bookT={book}/>
                )}
            </Row>
        </Container>
    );
});



export default Account;