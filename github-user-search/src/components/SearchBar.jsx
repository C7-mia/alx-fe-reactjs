import React, { useState } from 'react';
import { fetchUserData } from '../services/githubApi';

export default function SearchBar({ onUsersFetched }) {
  const [query, setQuery] = useState('');
  const handleSearch = async () => {
    const users = await fetchUserData(query);
    onUsersFetched(users);
  };
  return (
    <div>
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search users..." />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
