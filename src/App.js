import logo from './logo.svg';
import './App.css';
import User from './User';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './UserDetails';
import {Provider} from 'react-redux'
function App() {
  return (
    <div>
      <Provider store={store}>
      <User/>
        <UserDetails />
      </Provider>
       
    </div>
   
  );
}

export default App;
