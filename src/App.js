import logo from './logo.svg';
import './App.css';
import LoginScreen from './screens/LoginScreen';
import Profile from './screens/Profile';
import AuthLoading from './screens/AuthLoading';
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
function App() {
	return (
	<div>
		<Router>
			<Routes>
				<Route exact path="/" element={<AuthLoading/>} />
				<Route path="/login" element={<LoginScreen/>} />
				<Route path="/profile" element={<Profile/>} />
			</Routes>
		</Router>
	</div>
	);
}

export default App;
