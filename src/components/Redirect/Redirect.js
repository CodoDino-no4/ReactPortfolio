import React from 'react';

// Redirect Page
const RedirectPage = (redirectURL) => {
  useEffect(() => {
    window.location.replace(redirectURL);
  }, []);

  // Render some text when redirecting
  // You can use a loading gif or something like that
  return (
    <div className="redirect">
      <h3>Redirecting...</h3>
    </div>
  );
};

export default RedirectPage;
