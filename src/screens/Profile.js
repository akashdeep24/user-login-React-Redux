import React, { useEffect, useState } from 'react';
import { getUser, updateUser } from '../Redux/Slice/user';
import { useDispatch, useSelector } from 'react-redux';
import user from '../Redux/Slice/user';

function Profile() {
	const dispatch = useDispatch()
	const {user, isLoading, error} = useSelector((state)=>state.user)
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [mobile, setMobile] = useState('');
	const [city, setCity] = useState('');
	const [province, setProvince] = useState('');
	const [country, setCountry] = useState('');
	const [company, setCompany] = useState('');

	useEffect(()=>{
		dispatch(getUser())
	},[dispatch])

	useEffect(()=>{
		if(user){
			setEmail(user.email);
			setName(user.name);
			setMobile(user.mobile);
			setCity(user.city);
			setProvince(user.state);
			setCountry(user.country);
			setCompany(user.company);
		}
	},[])

	const handleClick=()=>{
		dispatch(updateUser({email,name,mobile,city,province,country,company}))
	}
	if(isLoading){
		return(<h1>Loading...</h1>)
	}

	return (
		<div style={styles.main}>
			<h1 style={{color:'blue'}}>Edit Profile</h1>
			<div style={styles.inputContainer}>
				<label style={styles.label}>Email</label>
				<input style={styles.inputBox} value={email||''} type="email" maxLength={30} onChange={e=>{setEmail(e.target.value)}} placeholder="Email Address"/>
			</div>
			<div style={styles.inputContainer}>
				<label style={styles.label}>Name</label>
				<input style={styles.inputBox} value={name||''} onChange={e=>{setName(e.target.value)}} type="text" maxLength={30} placeholder="Name"/>	
			</div>
			<div style={styles.inputContainer}>
				<label style={styles.label}>Phone</label>
				<input style={styles.inputBox} value={mobile||''} onChange={e=>{setMobile(e.target.value)}} type="text" maxLength={30} placeholder="Phone"/>	
			</div>	
			<div style={styles.inputContainer}>
				<label style={styles.label}>City</label>
				<input style={styles.inputBox} value={city||''} onChange={e=>{setCity(e.target.value)}} type="text" maxLength={30} placeholder="City"/>	
			</div>
			<div style={styles.inputContainer}>
				<label style={styles.label}>State</label>
				<input style={styles.inputBox} value={province||''} onChange={e=>{setProvince(e.target.value)}} type="text" maxLength={30} placeholder="State"/>
			</div>
			<div style={styles.inputContainer}>
				<label style={styles.label}>Country</label>
				<input style={styles.inputBox} value={country||''} onChange={e=>{setCountry(e.target.value)}} type="text" maxLength={30} placeholder="Coutnry"/> 
			</div>
			<div style={styles.inputContainer}>
				<label style={styles.label}>Company</label>
				<input style={styles.inputBox} value={company||''} onChange={e=>{setCompany(e.target.value)}} type="text" maxLength={30} placeholder="Company"/>
			</div>
	<button style={styles.button} onClick={()=>handleClick()}>Submit</button>
	</div>
	)
}

const styles = {
	main:{
		display:'flex', 
		flexDirection:'column',
		alignItems:'center',
		justifyContent:'center',
		paddingTop:'100px',
	},
  inputContainer:{
		marginTop:'20px', 
		borderRadius: '10px', 
		width: '25%', 
		height: '40px', 
		borderColor:'black',
    display:'flex',
    alignItems:'center'
  },
	inputBox:{
    width: '90%', 
    height: '40px', 
		fontSize: '20px', 
		fontWeight: '500', 
		color:'black',
		paddingTop:'5px',
    borderRadius: '10px', 
	},
  label:{
    marginRight:'10px',
		fontSize: '22px', 
		fontWeight: '700', 
    color:'black',
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

export default Profile