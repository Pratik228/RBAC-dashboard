import React, { useState, useEffect } from "react";

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleError = (error) => {
      setError(error);
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Something went wrong
          </h2>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary px-4 py-2 rounded-lg"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  try {
    return children;
  } catch (error) {
    setError(error);
    return null;
  }
};

export default ErrorBoundary;
