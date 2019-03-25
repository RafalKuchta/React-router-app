import React from 'react';
import {Route, Switch} from 'react-router-dom';

const Footer = () => {
    return ( 
        <>
        <div>
            <h2>Stopka</h2>
            <Switch>
            <Route path="/" exact render={()=>( 
                    <p>Jesteś na stronie głównej</p>
                         )} />

            <Route path="/:page" render={(props)=>(
            <p>Jesteś na stronie {props.match.params.page}</p>) }
            />

            </Switch>
        </div>
        </>
     );
}
 
export default Footer;