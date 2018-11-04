import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Pages/Home/Home";
import PostPage from "./Pages/PostPage/PostPage";
import Search from "./Pages/Search/Search";
import DbContext from './../store/db-context';
import Login from "./Pages/Login/Login";

import {AnimalDesire, AnimalPropositions, Auth} from "../model/db";
import {Breed} from "../model/breed";
import {PetSizeEnum, SexEnum} from "../model/enums";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animalPropositionsDb: AnimalPropositions,
            animalDesireDb: AnimalDesire,
        }
    }


    doAuth() {

    }

    saveProposition() {

    }

    getProposition(id) {

    }

    saveDesire() {

    }


    render() {
        return (
            <div className="App">
                <Header/>
                <DbContext.Provider value={{
                    animalPropositionsDb: this.state.animalPropositionsDb,
                    animalDesireDb: this.state.animalDesireDb,
                    doAuth: this.doAuth,
                    saveProposition: this.saveProposition(),
                    getProposition: this.getProposition(),
                    saveDesire: this.saveDesire,
                }}>
                    <Switch>
                        <Route
                            exact path="/"
                            render={(props) => <Home
                                {...props}
                            />}
                        />
                        <Route
                            exact path="/post"
                            render={(props) => <PostPage
                                {...props}
                            />}
                        />
                        <Route
                            exact path="/search"
                            render={(props) => <Search
                                {...props}
                            />}
                        />
                        <Route
                            exact path="/login"
                            render={(props) => <Login
                                {...props}
                            />}
                        />
                    </Switch>
                </DbContext.Provider>
                <Footer/>
            </div>
        );
    }
}

export default App;
