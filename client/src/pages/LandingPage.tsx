import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button, Input, Col } from 'reactstrap';
import { useLogin } from 'hooks';

const Landing = () => {
  const [userData, setUser] = useLogin();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const history = useHistory();

  const handleLogin = (email: string, password: string) => {
    setUser({ email, password });
  };

  useEffect(() => {
    if (userData.data) {
      history.push('/dashboard');
    }
  }, [userData]);

  return (
    <div
      className={
        'd-flex justify-content-center align-items-center align-content-center'
      }
      style={{ height: '100vh' }}
    >
      <Col sm={3}>
        <h1>Landing Page</h1>
        <Input
          className="mt-4"
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Input
          className="mt-4"
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <Button
          className="mt-4"
          onClick={() => {
            handleLogin(userEmail, userPassword);
          }}
        >
          Log In
        </Button>
      </Col>
    </div>
  );
};

export default Landing;
