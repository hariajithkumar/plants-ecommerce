import { createSlice } from "@reduxjs/toolkit";


export const CrateSlice = createSlice({
    name: "plants_product",
    initialState: {
        isClass1Show: false,
        profileDetails: '',
        loginDetails: {
            name: '',
            password: ''
        },
        logoutDetails: false,
        registerDetails: {
            name: "",
            gender:'',
            brith_data:'',
            brith_month:'',
            brith_year:'',
            mobile_code:'',
            mobile_number:'',
            email: "",
            regligion: "",
            caste: "",
            password: "",
            confirm_password: ""
        },
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
    }
})

export const { setClass1Hide, setprofileDetails,setloginDetails,setlogoutDetails,setregisterDetails,setisLiked,setisAdded,setisIncrement,setisDecrement,setActiveItem } = CrateSlice.actions
export default CrateSlice.reducer

