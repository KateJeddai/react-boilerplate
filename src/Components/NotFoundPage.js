import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
       <h4>404! Page Not Found</h4>
       <Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;