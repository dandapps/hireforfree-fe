// VerificationPage.tsx
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
//import { auth } from '../../utils/firebase/firebase.utils';

const VerificationPage: React.FC = () => {
  const { currentUser , setCurrentUser, setIsEmailVerified } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkEmailVerification = async () => {
      //const user: any = auth.currentUser;
      const user: any = currentUser;
      await user.reload(); //to get latest status after verfying email verfication
      await user.getIdToken(true);

      if (user && user.emailVerified) {
        // Email is verified, redirect to the home page 
        setIsEmailVerified(true);
        navigate('/home');
        alert(`Welcome ${user.email} !!!`);
      }
    };

    const intervalId = setInterval(checkEmailVerification, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentUser, navigate]);

  return (
    <div>
      <h2>Verifying your email...</h2>
      {/* You can add a loading spinner or any other content */}
    </div>
  );
};

export default VerificationPage;
