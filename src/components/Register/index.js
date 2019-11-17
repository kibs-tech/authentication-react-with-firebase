import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { Form, Button } from 'bootstrap-4-react';


import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase'

const RegisterPage = () => (
    <div>
        <h1>Register</h1>
        <RegisterForm />
    </div>
);


const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class RegisterFormBase extends Component {

    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmit = event => {
        event.preventDefault();

        if (this.isInvalid())
            return;

        const { email, passwordOne } = this.state;

        this.props.firebase
            .registerWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({ error });
            });


    }

    isInvalid() {
        const {
            email,
            passwordOne,
            passwordTwo,
        } = this.state;

        return passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '';
    }

    render() {
        const {
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;



        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group>
                    <label htmlFor="email">Email address</label>
                    <Form.Input type="email" id="email" name="email"
                        value={email}
                        onChange={this.onChange} />
                </Form.Group>

                <Form.Group>
                    <label htmlFor="passwordOne">Password</label>
                    <Form.Input type="password" id="passwordOne" name="passwordOne"
                        value={passwordOne}
                        onChange={this.onChange} />
                </Form.Group>

                <Form.Group>
                    <label htmlFor="passwordOne">Confirm Password</label>
                    <Form.Input type="password" id="passwordTwo" name="passwordTwo"
                        value={passwordTwo}
                        onChange={this.onChange} />
                </Form.Group>
              
                <Button primary type="submit" disabled={this.isInvalid()}>Register</Button>

                {error && <p>{error.message}</p>}

            </Form>
        );
    }
}

const RegisterLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.REGISTER}>Register</Link>
    </p>
);

const RegisterForm = compose(
    withRouter,
    withFirebase,
)(RegisterFormBase);

export default RegisterPage;

export { RegisterForm, RegisterLink };