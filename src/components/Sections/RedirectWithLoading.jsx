import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MagneticLoading from './MagneticLoading.jsx'; // Import the loading animation component

const RedirectWithLoading = ({ to }) => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      history.push(to); // Redirect to the specified route
    }, 10000); // Duration of the loading animation

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [to, history]);

  return (
    <div>
      {loading ? (
        <MagneticLoading /> // Show the loading animation
      ) : (
        <div>Loading complete... Redirecting...</div> // Optionally indicate that redirection is happening
      )}
    </div>
  );
};

export default RedirectWithLoading;
