import { useState, useEffect, useCallback } from 'react';

// Hook
const useAsync = (asyncFunction, params, immediate = true) => {
  const [status, setStatus] = useState('idle');
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback((inputParams) => {
    setStatus('pending');
    setValue(null);
    setError(null);

    return asyncFunction(inputParams)
      .then(response => {
        setValue(response);
        setStatus('success');
      })
      .catch(inputError => {
        setError(inputError);
        setStatus('error');
      });
  }, [asyncFunction]);

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute(params);
    }
  }, [execute, immediate, params]);

  return { execute, status, value, error };
};

export default useAsync;
