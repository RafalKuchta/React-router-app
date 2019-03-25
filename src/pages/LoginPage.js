import React from 'react';

const LoginPage = () => {
    return ( 
        <div>
            <label htmlFor="login">Login <input type="text"/> </label>
            <label htmlFor="hasło">Hasło <input type="password"/></label>
            <button style={{
                margin: "20px",
                padding: "5px 30px",
                backgroundColor: "white",
                border: "1px solid black"
            }}>Zaloguj</button>
        </div>
     );
}
 
export default LoginPage;