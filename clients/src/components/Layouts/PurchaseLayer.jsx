import React from "react";
import PropTypes from "prop-types"

const PurchaseLayer = ({ purchases, onCreate, onEdit }) => {
    return (
        <div className="purchase-layer">
            <table className="table bordered-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product SKU</th>
                        <th>Status</th>
                        <th>Order Date</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase) => (
                        <tr key={purchase._id}>
                            <td>{purchase.product.name}</td>
                            <td>{purchase.product.sku}</td>
                            <td>{purchase.status}</td>
                            <td>{new Date(purchase.orderDate).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


PurchaseLayer.propTypes = {
    purchases: PropTypes.array.isRequired,
    onCreate: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default PurchaseLayer;
