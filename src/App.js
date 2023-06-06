import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import { useDispatch } from "react-redux";

const App = () => {
     // Variable: dispatch
    // This variable is used to dispatch actions in the Redux store.
    const dispatch = useDispatch();
    useEffect(() => {
        // Variable: data
        //This variable is an array used to store contact data fetched from an API.
        const data = [];

        // Function: promise
        //This function fetches contact data from an API and dispatches an action to update the Redux store.
        const promise = async () => {
            await fetch('https://jsonplaceholder.typicode.com/users/')
                .then((response) => response.json())
                .then((json) => {
                    json.map((contact) => {
                        data.push({
                            id: contact.id,
                            name: contact.name,
                            number: contact.phone,
                            email: contact.email
                        });
                    })
                });
            dispatch({ type: 'FETCH_CONTACTS', payload: data });
        };
        promise();
    }, []);


    return (
        <div className="App">
            <ToastContainer />
            {/* Navbar component represents the navigation bar. */}
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}>

                </Route>
                {/* AddContact component represents the form for adding a new contact. */}
                <Route path="/add" element={<AddContact />}>

                </Route>
                 {/* EditContact component represents the form for editing an existing contact. */}
                <Route path="/edit/:id" element={<EditContact />}>

                </Route>
            </Routes>
        </div>
    );
}

export default App;