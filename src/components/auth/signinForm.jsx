// Import Dependencies
import { useState } from 'react';

// Import APIs
import { signin } from '../../datasource/api-users';

// Import Components
import { authenticate } from '../auth/authHelper';

// Import your authentication utility functions
import { signin, authenticate } from 'your-authentication-utils'; 

export default function SigninForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        signin(user)
            .then((data) => {
                if (!data) return setErrorMessage("ERROR MESSAGE");
                authenticate(data.token);
                window.location.reload(false);
            })
            .catch((error) => {
                setErrorMessage(error.message);
                console.error(error);
            });
    };

    return (
        <>
            <p className="flash">
                <span>{errorMessage}</span>
            </p>
            <form onSubmit={handleSubmit} className="form">
                <div className="mb-3">
                    <label htmlFor="loginEmail" className="form-label">
                        Email Address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="name@email.com"
                        id="loginEmail"
                        name="email"
                        value={user.email || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="loginPassword" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="loginPassword"
                        placeholder=""
                        name="password"
                        value={user.password || ''}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Login
                </button>
            </form>
        </>
    );
}
