import React, { Component } from 'react';

import AuthorsView from './containers/author/authors';
import AuthorView from './containers/author/author';
import BooksView from './containers/book/books';
import BookView from './containers/book/book';
import GergesView from './containers/gerge/gerges';
import GergeView from './containers/gerge/gerge';
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

import './styles/App.less';

const App = () => (
    <Router>
        <div>
            <nav className="navbar">
                <ul className="nav navbar-nav">
                    <li><Link to="/authors">Authors</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/gerges">Gerges</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/authors/:authorId" component={ AuthorView } />
                <Route path="/authors" component={ AuthorsView } />
                <Route path="/books/:bookId" component={ BookView } />
                <Route path="/books" component={ BooksView } />
                <Route path="/gerges/:gergeId" component={ GergeView } />
                <Route path="/gerges" component={ GergesView } />

                <Redirect from="*" to="/books" />
            </Switch>
        </div>
    </Router>
);

export default App;
