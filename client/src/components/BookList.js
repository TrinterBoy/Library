import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import BookItem from "./BookItem";
import {fetchOneGenre} from "../http/bookAPI";

const BookList = observer(() => {
    const {book} =  useContext(Context)

    useEffect(()=>{
        {book.books.map(book=>{
            fetchOneGenre(book.genreId).then(genre=>{
                book.genre=genre.name
            })
        })}
    })

    return (
        <Row className="d-flex">
            {book.books.map(book=>
            <BookItem key={book.id} bookT={book}/>
            )}
        </Row>
    );
});

export default BookList;