import React from 'react';
import MasterLayout from '../Layouts/MasterLayout';
import Breadcrumb from '../Elements/Breadcrumb';
const HomePage = () => {
  return (
    <>
        {/* MasterLayout */}
        <MasterLayout>

            {/* Breadcrumb */}
            <Breadcrumb title="Home" />
            
            {/* Home Page Content */}
            <h1>Home Page</h1>
            <p>Welcome to Gampangin!</p>
        </MasterLayout>
    </>
  )
}

export default HomePage