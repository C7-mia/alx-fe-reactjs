function UserDetails({ userData }) {
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.email}</p>
    </div>
  );
}

export default UserDetails;
