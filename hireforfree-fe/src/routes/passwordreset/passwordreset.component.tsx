// PasswordReset.tsx
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import {
    sendPasswordChangeEmail
  } from '../../utils/firebase/firebase.utils';
const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await sendPasswordChangeEmail(email);
      setIsSent(true);
      setError(null);
    } catch (error : any) {
      setIsSent(false);
      setError(error.message);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <h2>Password Reset</h2>
      {isSent ? (
        <div>
          <p>Password reset email sent. Check your inbox.</p>
          <p>
            <Link to="/auth">Go to Login</Link>
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleChange} required />
          <button type="submit">Reset Password</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default PasswordReset;
