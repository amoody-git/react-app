import React from 'react';
import './entry.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import Register from '../../components/register/register.component';

const EntryPage = () => (
    <div className='entry'>
        <SignIn />
        <Register />
    </div>
)

export default EntryPage;
