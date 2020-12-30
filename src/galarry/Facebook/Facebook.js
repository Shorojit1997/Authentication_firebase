import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import Startingpage from '../Startingpage';

 class Facebook extends Component {

    state = {
        auth: false,
        name: '',
        picture: ''
    };

    responseFacebook = response => {
        console.log(response);
        if(response.status !== 'unknown')
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url
        });

    }

    componentClicked = () => {
        console.log('Facebook btn clicked');
    }

    render() {

        return (
            <>
                {

                    this.state.auth ?
                         (
                            <Startingpage  />
                        ) :
                       (<FacebookLogin
                            appId="852035412227739"
                            autoLoad={true}
                            fields="name,picture"
                            onClick={this.componentClicked}
                            callback={this.responseFacebook} />)

                }
            </>
        );
    }
}

export default Facebook;