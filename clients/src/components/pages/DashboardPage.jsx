import MasterLayout from '../organisms/MasterLayout';
import Breadcrumb from '../atoms/Breadcrumb';

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