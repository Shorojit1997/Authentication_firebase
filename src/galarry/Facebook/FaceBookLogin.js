import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import Startingpage from '../Startingpage';

const FaceBookLogin = () => {
    const [auth, setAuth] = useState(false);
    

    const responseFacebook=(res)=>{
        if(res.status!=='unknown')
          setAuth(true);
        else{

        }
    }


    return (
        <div>
            {
                auth ? (<Startingpage auth={auth} setAuth={setAuth}/>) :
                    (
                        <FacebookLogin
                            appId="852035412227739"
                            autoLoad={true}
                            fields="name,picture"
                            icon="fa-facebook"
                            onClick={() => { }}
                            callback={(res) => { if(res.status!=='unknown') setAuth(true);}} />
                    )
            }

        </div>
    );
};

export default FaceBookLogin;