
// src/pages/Profile.jsx
/*import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  if (!user) return <h2>Please login to see your profile</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}*/
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";

export default function Profile() {
  const { user } = useAuth();
  const [itemsGiven, setItemsGiven] = useState([]);
  const [itemsTaken, setItemsTaken] = useState([]);

  useEffect(() => {
    if (user) {
      setItemsGiven(user.itemsGiven || []);  // fallback to empty array
      setItemsTaken(user.itemsTaken || []);  // fallback to empty array
    }
  }, [user]);

  if (!user) return <h2>Please login to see your profile</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>

      <h3>Items Given on Rent ({itemsGiven.length})</h3>
      {itemsGiven.length > 0 ? (
        <ul>
          {itemsGiven.map((item) => (
            <li key={item._id}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
      ) : (
        <p>No items given on rent</p>
      )}

      <h3>Items Taken on Rent ({itemsTaken.length})</h3>
      {itemsTaken.length > 0 ? (
        <ul>
          {itemsTaken.map((item) => (
            <li key={item._id}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
      ) : (
        <p>No items taken on rent</p>
      )}
    </div>
  );
}

