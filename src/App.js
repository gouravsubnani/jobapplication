// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "container">
      <div className='application'>
        <div className='name-wrap'>
            <p className='body1-font'>Job Application</p>
            <p className='body2-font'>(Web)</p>
        </div>

        <div className='first-wrapper'>
            <div className='first-left-wrapper'>
              First Name
              <input type="text" className='text-box'/>
              Email
              <input type="text" className='text-box'/>
            </div>
            <div className='first-right-wrapper'>
              Last Name
              <input type="text" className='text-box'/>
              Job Role
              <input type="text" className='text-box'/>
            </div>
        </div>

        <div className="second-wrapper">
            Address
            <input type="text" className='text-box-bigger'/>
        </div>

        <div className="third-wrapper">
        <div className='third-left-wrapper'>
              City
              <input type="text" className='text-box'/>
              Start Date
              <input type="text" className='text-box'/>
            </div>
            <div className='third-right-wrapper'>
              Pincode
              <input type="text" className='text-box'/>
              Upload Your CV
              <input type="text" className='text-box'/>
            </div>
        </div>

        <div className="button-wrapper">
          <div className="button-wrap">
            Apply Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
