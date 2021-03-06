import React from 'react';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';

import './MainPage.scss';

const MainPage = (): JSX.Element => {
    
    return (
        <div className="main-page">
            <div className="main-page__title">
                <h2>Welcome to Vikingz!</h2>
            </div>
            <div className="main-page__subtitle">
                <p>Click to access to the store!</p>
            </div>
            <div className="main-page__button">
                <Button variant="contained" color="success">Go to Store!</Button>
                {/* <Link to="/store">
                    <Button variant="contained" color="success">Go to Store!</Button>
                </Link> */}
            </div>
        </div>
    )
}

export default MainPage