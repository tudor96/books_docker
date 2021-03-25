import React, { useState, useEffect } from 'react';
import { apiFactory } from 'api';
import { Book } from 'api/types';
const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [aggregationTime, setAggregationTime] = useState<{
    time: number;
    data: Book[];
  }>();

  async function insertBooks() {
    const booksData = await apiFactory().data.account().insertBooks();
    setBooks(booksData);
  }

  async function getAggregationTime() {
    const aggregationTime = await apiFactory()
      .data.account()
      .getBooksAggregate();
    setAggregationTime(aggregationTime);
  }

  useEffect(() => {
    getAggregationTime();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Secret Page</p>
      <button onClick={() => insertBooks()}>Insert Data Into DB</button>
      {aggregationTime && <p>Aggregation time: {aggregationTime.time} </p>}
      {books.length > 0 && (
        <>
          {books.map((book, index) => (
            <div key={'book_' + index}>
              <h4>{book.name}</h4>
              <p>{book.description}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Dashboard;
