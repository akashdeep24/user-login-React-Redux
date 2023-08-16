import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? {user}
  : {user: null };

export const login = createAsyncThunk('login', async ({email, password})=>{
    try{
        const response = await axios.post('http://165.22.223.163/polymermis/api/login-member', {email:email, password:password})
        if (response.data) {
            localStorage.setItem("user", JSON.stringify({email:email, token:response.data.token}));
          }
        return {token:response.data.token, email:email}
    }
    catch(error){
        console.error(error)
    }
})

export const getUser = createAsyncThunk('getUser', async()=>{
    try{
        const response = await axios.get('http://165.22.223.163/polymermis/api/get-profile', 
        { headers: {
            Authorization: `Bearer ${user.token}`,
        }
        })
        return response.data.data
    } 
    catch(error){
        console.error(error)
    }
})

export const updateUser = createAsyncThunk('updateUser', async({email,name,mobile,city,province,country,company})=>{
    try{
        const response = await axios.post('http://165.22.223.163/polymermis/api/update-profile', {
            email:email,
            name:name,
            mobile:mobile,
            city:city,
            state:province,
            country:country,
            company:company
        },
        { headers: {
            Authorization: `Bearer ${user.token}`,
        }
        })
        return response.data
    }
    catch(error){
        console.error(error)
    }
})

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    extraReducers:(builder)=>{
        builder.addCase(login.pending, (state, action)=>{
            state.isLoading=true;
        });
        builder.addCase(login.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.user=action.payload
        });
        builder.addCase(login.rejected, (state, action)=>{
            state.isError=true;
            state.isLoading=false;
        })
        builder.addCase(getUser.pending, (state, action)=>{
            state.isLoading=true;
        });
        builder.addCase(getUser.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.user=action.payload
        });
        builder.addCase(getUser.rejected, (state, action)=>{
            state.isError=true;
            state.isLoading=false;
        });
        builder.addCase(updateUser.pending, (state, action)=>{
            state.isLoading=true;
        });
        builder.addCase(updateUser.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.user=action.payload
        });
        builder.addCase(updateUser.rejected, (state, action)=>{
            state.isError=true;
            state.isLoading=false;
        })
    }
})

export default userSlice.reducer;