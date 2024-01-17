import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomGreeting } from '../store/greetings/greetingSlice';

const Greetings = () => {
  const dispatch = useDispatch();
  const { greeting, loading, error } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  useEffect(() => {
    console.log('Greeting:', greeting);
    console.log('Loading:', loading);
    console.log('Error:', error);
  }, [greeting, loading, error]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Greetings</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greetings;
