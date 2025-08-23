import { Outlet } from 'react-router-dom';

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      {/* Other profile content */}
      <Outlet /> {/* Renders ProfileDetails or ProfileSettings based on route */}
    </div>
  );
      }
