import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import AdminItem from "./AdminItem";

const AdminList = observer(() => {
    const {basket} =  useContext(Context)
    return (
        <Row className="d-flex">
            {basket.books.map(book=>
                <AdminItem key={book.id} bookT={book}/>
            )}
        </Row>
    );
});

export default AdminList;