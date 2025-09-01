import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/items/${id}`)
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px',display: 'flex'}}>
      <img 
        src={`http://localhost:5000${item.image}`} 
        alt={item.name} 
        style={{ width: '400px', borderRadius: '10px' }} 
      />
      <div style={{ marginLeft: '20px' }}>
      <h1>{item.name}</h1>
      <p><strong>Price:</strong> ₹{item.price} /Month</p>
      <p><strong>Location:</strong> {item.location}</p>
      <p><strong>Years of Use:</strong> {item.yearsOfUse}</p>
      <p>{item.description}</p>
      
      <button style={{
               padding: "10px 20px",
               fontSize: "16px",
               fontWeight: "bold",
               borderRadius: "8px",
               border: "none",
               cursor: "pointer",
               color: "white",
               background: "linear-gradient(135deg,rgb(61, 47, 255),rgb(36, 36, 221))",
               transition: "all 0.3s ease-in-out"
             }}
             onMouseOver={(e) => {
               e.target.style.transform = "scale(1.05)";
               e.target.style.boxShadow = "0 4px 12px rgba(67, 36, 221, 0.5)";
             }}
             onMouseOut={(e) => {
               e.target.style.transform = "scale(1)";
               e.target.style.boxShadow = "none";
             }}>Add to Cart</button>
      <button style={{
               padding: "10px 20px",
               fontSize: "16px",
               fontWeight: "bold",
               borderRadius: "8px",
               border: "none",
               cursor: "pointer",
               color: "white",
               background: "linear-gradient(135deg,rgb(3, 114, 13),rgb(3, 137, 19))",
               transition: "all 0.3s ease-in-out",
               marginLeft: "20px"

             }}
             onMouseOver={(e) => {
               e.target.style.transform = "scale(1.05)";
               e.target.style.boxShadow = "0 4px 12px rgba(8, 160, 36, 0.5)";
             }}
             onMouseOut={(e) => {
               e.target.style.transform = "scale(1)";
               e.target.style.boxShadow = "none";
             }}>Buy Now</button>
    </div>
    </div>
  );
}

export default ProductPage;
