import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../Redux/Slice/user';
import user from '../Redux/Slice/user';
function LoginScreen() {
	const state = useSelector((state)=>state)
	const {user, isLoading, error} = useSelector((state)=>state.user)
	const dispatch = useDispatch();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const handleClick=()=>{
		dispatch(login({email, password}))
	}
	useEffect(()=>{
		if(user){
			navigate('/profile')
		}
	},[])
	if(isLoading){
		return(<h1>Loading...</h1>)
	}
	return (
		<div style={styles.main}>
			<input style={styles.inputBox} value={email} type="email" maxLength={30} onChange={e=>{setEmail(e.target.value)}} placeholder="Email Address"/>
			<input style={styles.inputBox} value={password} onChange={e=>{setPassword(e.target.value)}} type="password" minLength={4} maxLength={10} placeholder="Password"/>
			<button style={styles.button} onClick={()=>handleClick()}>Login</button>
		</div>
	)
}

const styles = {
	main:{
		display:'flex', 
		flexDirection:'column',
		alignItems:'center',
		justifyContent:'center',
		paddingTop:'100px'
	},
	inputBox:{
		marginTop:'20px', 
		borderRadius: '10px', 
		width: '20%', 
		height: '40px', 
		fontSize: '20px', 
		fontWeight: '500', 
		color:'black',
		borderColor:'black', 
		paddingTop:'5px',
	},
	button:{
		marginTop:'20px', 
		borderRadius: '10px', 
		width: '15%', 
		height: '40px', 
		fontSize: '25px', 
		fontWeight: '700', 
		backgroundColor:'black', 
		color:'white', 
		border: '0px', 
		display:'flex', 
		justifyContent:'center', 
		paddingTop:'5px'
	}
}

export default LoginScreen