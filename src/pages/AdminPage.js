import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const permission = false;

const AdminPage = () => {
    return ( 
    <Route render={()=> (
    permission ? (<h3>Witamy na stronie Admina</h3>) : (<Redirect to='./login'/>
    ) 
    )} />

    );
}
 
export default AdminPage;