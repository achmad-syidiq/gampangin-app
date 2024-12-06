import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const ProductCardStats = ({ title, value, icon, bgColor, iconColor }) => {
  return (
    <div className="col">
      <div className={`card shadow-none border ${bgColor} h-100`}>
        <div className="card-body p-20">
          <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
            <div>
              <p className="fw-medium text-primary-light mb-1">{title}</p>
              <h5 className="mb-0">{value}</h5>
            </div>
            <div className={`w-60-px h-60-px ${iconColor} rounded-circle d-flex justify-content-center align-items-center`} >
              <Icon icon={icon} className="text-white text-2xxl mb-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCardStats.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
};

export default ProductCardStats;
