import React from 'react';
import stylefile from './stylefile.css'

const Login = (props) => {
    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailerror,
        passwordError } = props;
    return (

        <div className='login'>
            <div className='loginContainer'>
                <label>Username</label>
                <input
                    type='email'
                    autoFocus
                    required
                    value={email}
                    
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <p className='errorMsg'>{emailerror}</p>
                <label>Password</label>
                <input
                    type='password'
                    required
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <p className='errorMsg'>{passwordError}</p>
                <div className='btnContainer'>
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account? <span onClick={() => { setHasAccount(!hasAccount) }}>Sign up</span>
                            </p>
                        </>
                    ) :
                        (
                            <>
                                <button onClick={handleSignup}>Sign up</button>
                                <p>Have an Account? <span onClick={() => { setHasAccount(!hasAccount) }}>Sign in</span>
                                </p>

                            </>

                        )

                    }

                </div>



            </div>

        </div>

    );
};

export default Login;