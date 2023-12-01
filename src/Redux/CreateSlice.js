import { createSlice } from "@reduxjs/toolkit";


export const CrateSlice = createSlice({
    name: "plants_product",
    initialState: {
        isClass1Show: false,
        profileDetails: '',
        loginDetails: {
            email: '',
            password: ''
        },
        logoutDetails: false,
        registerDetails: {
            name: "",
            email: "",
            mobile:"",
            password: "",
            password_confirm: ""
        },
        allplantsDetails : "",
        likedProducts : [],
        likescount : 0,
        isLiked :false,
        isAdded :false,
        isAddproductcount:0,
        activeItem:'Account',
        
        
    },

    reducers: {
        setClass1Hide: (state, action) => {
            state.isClass1Show = action.payload
        },
        setprofileDetails: (state, action) => {
            state.profileDetails = action.payload
        },
        setloginDetails:(state,action)=>{
            state.loginDetails = action.payload
        },
        setlogoutDetails:(state,action)=>{
            state.logoutDetails = action.payload
        },
        setregisterDetails:(state,action)=>{
            state.registerDetails = action.payload
        },
        setallplantDetails:(state,action)=>{
            state.allplantsDetails = action.payload
        },
        setisLiked:(state,action)=>{
            state.isLiked = action.payload
        },
        setisAdded:(state,action)=>{
            state.isAdded = action.payload
        },
        setisIncrement: (state) => {
            state.isAddproductcount += 1
        },
        setisDecrement: (state) => {
            state.isAddproductcount -= 1
        },
        setActiveItem:(state,action)=>{
            state.activeItem = action.payload
        },
        setLikedProducts:(state,action)=>{
            state.likedProducts = action.payload
        },
        setlikescount: (state,action) => {
            state.likescount = action.payload
        },
        
    }
})

export const { setClass1Hide, setprofileDetails,setloginDetails,setlogoutDetails,setregisterDetails,setisLiked,setisAdded,setisIncrement,setisDecrement,setActiveItem,setallplantDetails,setLikedProducts,setlikescount } = CrateSlice.actions
export default CrateSlice.reducer

