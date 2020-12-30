import React,{useState} from 'react';
import Login from './Login'
import Signup from './Signup'

const LoginSignup = () => {
    const [toogle, settoogle] = useState(false);

    const tooglehandeler=()=>{
        settoogle(!toogle)
    }

    return (
        <div>
            {
                toogle?
                (<Login tooglehandeler={tooglehandeler} />):(<Signup tooglehandeler={tooglehandeler} />)
            }
        </div>
    );
};

export default LoginSignup;