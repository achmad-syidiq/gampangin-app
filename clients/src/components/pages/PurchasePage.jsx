import React, { useEffect, useState } from "react";
import MasterLayout from "../Layouts/MasterLayout";
import axios from "axios";
import PurchaseLayer from "../Layouts/PurchaseLayer";


const PurchasePage = () => {
    const [purchases, setPurchases] = useState([]);
    const [newPurchase, setNewPurchase] = useState({
        product: "",
        status: "pending",
        orderDate: new Date(),
    });

    useEffect(() => {
        // Fetch purchases from the server
        axios
            .get("http://localhost:5000/api/v1/purchases")
            .then((response) => setPurchases(response.data))
            .catch((error) => console.error("Error fetching purchases:", error));
    }, []);

    const handleCreate= () => {
        axios
            .post("http://localhost:5000/api/v1/purchases/create", newPurchase)
            .then((response) => {
                setPurchases([...purchases, response.data]);
                setNewPurchase({ product: "", status: "pending", orderDate: new Date() }); // Reset the form
            })
            .catch((error) => console.error("Error creating purchase:", error));
    };

    const handleUpdate = (id, newStatus) => {
        axios
            .put(`http://localhost:5000/api/v1/purchases/update/${id}`, { status: newStatus })
            .then((response) => {
                const updatedPurchases = purchases.map((purchase) =>
                    purchase._id === id ? { ...purchase, status: newStatus } : purchase
                );
                setPurchases(updatedPurchases);
            })
            .catch((error) => console.error("Error updating status:", error));
    };

    return (
        <MasterLayout>
            <h1>Purchase Page</h1>
            <p>Welcome to Purchase Page</p>
            <PurchaseLayer 
                purchases={purchases}
                onCreate={handleCreate}
                onEdit={handleUpdate}
            />
        </MasterLayout>
    );
};

export default PurchasePage;
