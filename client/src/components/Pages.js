import React, {useContext} from 'react';
import {Context} from "../index";
import {Pagination} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const Pages = observer(() => {
    const {book} =  useContext(Context)
    const pageCount = Math.ceil(book.totalCount / book.limit)
    const pages =[]

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    return (
        <Pagination className="mt-5">
            {pages.map(page=>
            <Pagination.Item key={page} active={book.page ===page} onClick={()=>book.setPage(page)}>{page}</Pagination.Item>
            )}
            
        </Pagination>
    );
});

export default Pages;