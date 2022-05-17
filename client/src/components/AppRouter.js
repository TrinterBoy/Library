import React, {useContext} from 'react';
import{Routes,Route,Navigate} from "react-router-dom";
import {Context} from "../index";
import Shop from "../pages/Shop";
import Admin from "../pages/Admin";
import Book from "../pages/Book";
import Basket from "../pages/Basket";
import Auth from "../pages/Auth";
import Take from "../pages/Take";
import Give from "../pages/Give";
import Account from "../pages/Account";
import User from "../pages/User";

const AppRouter = () => {
    const {user} = useContext(Context)
        return (
            <Routes>
                <Route path={'/basket'} element={<Basket/>} />
                <Route path={'/account'} element={<Account/>} />
                <Route path={'/'} element={<Shop/>} />
                <Route path={'/login'} element={<Auth/>} />
                <Route path={'/registration'} element={<Auth/>} />
                <Route path={'/book'+'/:id'} element={<Book/>} />
                <Route path={'/admin'} element={<Admin/>} />
                <Route path={'/take'} element={<Take/>} />
                <Route path={'/give'} element={<Give/>} />
                <Route path={'/user'} element={<User/>} />
                <Route path={'/book'+'/:id'} element={<Book/>} />
            </Routes>
        );
};

export default AppRouter;