import React from 'react';
import SignInForm from "./SignInForm";

class SignInContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <SignInForm/>
        );
    }
}

SignInContainer.propTypes = {};

export default SignInContainer;