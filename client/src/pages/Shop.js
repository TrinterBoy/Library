import React, {useContext, useEffect} from 'react';
import {Button, Col, Container, Pagination, Row} from "react-bootstrap";
import GenreBar from "../components/GenreBar";
import NameBar from "../components/NameBar";
import BookList from "../components/BookList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBook, fetchGenre, fetchOneBook} from "../http/bookAPI";
import Pages from "../components/Pages";
import {useNavigate} from "react-router-dom";
import {getBasket, getBasketId} from "../http/basketAPI";
import {giveUsersBookById} from "../http/usersBookAPI";

const Shop = observer(() => {
    const navigate= useNavigate()
    const {book,basket, user} = useContext(Context)

    const Nav = () =>{
        navigate('/admin')
    }

    useEffect(()=>{
        fetchGenre().then(data=>book.setGenres(data))
        fetchBook(null,null,null,1,2).then(data=> {
            book.setBooks(data.rows)
            book.setTotalCount(data.count)
        })
    },[])
    useEffect(()=>{
        fetchBook(null,null,null,book.page,2).then(data=> {
            book.setBooks(data.rows)
            book.setTotalCount(data.count)
        })
    },[book.page])
    useEffect(()=>{
        if(user.isAuth){
            const c=[]
            const q=[]
            getBasketId(user.user.id).then(data => {
                getBasket(data.id).then(dataT=>{
                    dataT.map(book=>{
                        fetchOneBook(book.bookId).then(dataR=>{
                            c.push(dataR)
                        })
                    })
                    basket.setBooks(c)
                })
            })
            giveUsersBookById(user.user.id).then(data=>{
                data.map(member=>{
                    fetchOneBook(member.bookId).then(dataQ=>{
                        q.push(dataQ)
                    })
                })
                basket.setUserBooks(q)
            })
        }
    },[])

    const Search = ()=>{
            fetchBook(book.selectedName,book.selectedAuthor,book.selectedGenre.id,book.page,2).then(data=> {
                book.setBooks(data.rows)
                book.setTotalCount(data.count)
            })
    }

    return (
        <Container>
            <Row style={{paddingTop:5}}>
                <Col md={3}>
                    <GenreBar/>
                    <div >
                    <Button style={{display: "block", margin:"0 auto"}} className="mt-3" onClick={Search}>Знайти</Button>
                    </div>
                    {user.user.role=="ADMIN"
                        ?
                    <div>
                        <Button style={{backgroundColor:"white",display: "block", margin:"0 auto"}} className="mt-3 btn-outline-dark" onClick={Nav}>Адмін панель</Button>
                    </div>
                        :
                        <div/>
                    }
                </Col>
                <Col md={9}>
                    <NameBar/>
                    <BookList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;