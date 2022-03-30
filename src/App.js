import './App.css';
import BizAccs from './components/businessAccount';
import FeaturedServices from './components/featuredServices';
import Header from './components/header';

function App() {
  return (
    <>

    <div className='background'>
    <Header />
    <BizAccs />
    <FeaturedServices />
    </div>
   
    </>
  );
}

export default App;
