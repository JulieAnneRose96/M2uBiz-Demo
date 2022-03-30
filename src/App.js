import './App.css';
import BizAccs from './components/businessAccount';
import FeaturedServices from './components/featuredServices';
import Header from './components/header';
import SideBar from './components/sideBar';

function App() {
  return (
    <>

    <div className='background'>
        <div className='SB-flex1'>
          <SideBar />
        </div>

        <div  className='SB-flex2'>
          <Header />
            <div  className='SB-flex3'>
              <BizAccs />
              <FeaturedServices /> 
            </div> 
          
      </div>
    
    </div>
   
    </>
  );
}

export default App;
