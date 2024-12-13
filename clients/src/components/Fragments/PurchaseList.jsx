// src/components/PurchaseComponent.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";


const PurchaseComponent = () => {
  const [purchases, setPurchases] = useState([]);
  const [newPurchase, setNewPurchase] = useState({
    product: "",
    status: "pending",
    orderDate: new Date(),
  });

  useEffect(() => {
    // Fetch purchases from the server
    axios
      .get("http://localhost:5000/api/purchases")
      .then((response) => setPurchases(response.data))
      .catch((error) => console.error("Error fetching purchases:", error));
  }, []);

  const handleCreatePurchase = () => {
    axios
      .post("http://localhost:5000/api/purchases/create", newPurchase)
      .then((response) => {
        setPurchases([...purchases, response.data]);
        setNewPurchase({ product: "", status: "pending", orderDate: new Date() }); // Reset the form
      })
      .catch((error) => console.error("Error creating purchase:", error));
  };

  const handleUpdateStatus = (id, newStatus) => {
    axios
      .put(`http://localhost:5000/api/purchases/update/${id}`, { status: newStatus })
      .then((response) => {
        const updatedPurchases = purchases.map((purchase) =>
          purchase._id === id ? { ...purchase, status: newStatus } : purchase
        );
        setPurchases(updatedPurchases);
      })
      .catch((error) => console.error("Error updating status:", error));
  };

  return (
    <div>
      <h1>Purchase Management</h1>
      <div>
        <h2>Create a New Purchase</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={newPurchase.product}
          onChange={(e) => setNewPurchase({ ...newPurchase, product: e.target.value })}
        />
        <button onClick={handleCreatePurchase}>Create Purchase</button>
      </div>

      <div>
        <h2>Purchases</h2>
        <ul>
          {purchases.map((purchase) => (
            <li key={purchase._id}>
              {purchase.product} - {purchase.status} -{" "}
              {new Date(purchase.orderDate).toLocaleDateString()}
              <button onClick={() => handleUpdateStatus(purchase._id, "shipped")}>
                Mark as Shipped
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PurchaseComponent;
