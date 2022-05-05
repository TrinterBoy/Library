import React, {useContext} from 'react';
import{Routes,Route,Navigate} from "react-router-dom";
import {Context} from "../index";
import Shop from "../pages/Shop";
import Admin from "../pages/Admin";
import Book from "../pages/Book";
import Basket from "../pages/Basket";
import Auth from "../pages/Auth";

const AppRouter = () => {
    const {user} = useContext(Context)
        return (
            <Routes>
                <Route path={'/admin'} element={<Admin/>} />
                <Route path={'/basket'} element={<Basket/>} />
                <Route path={'/'} element={<Shop/>} />
                <Route path={'/login'} element={<Auth/>} />
                <Route path={'/registration'} element={<Auth/>} />
                <Route path={'/book'+'/:id'} element={<Book/>} />
            </Routes>
        );
};

export default AppRouter;