import { useContext, useReducer } from "react"
import { AuthContext } from "../../contexts/AuthProvider"
import "./Address.css"

const addressReducer = (state,action)=>{
    switch(action.type){
        case "setName":
            return {...state,Name:action.payload}
        case "setHouseNumber":
            return {...state,HouseNumber:action.payload}
        case "setArea":
            return {...state,Area:action.payload}
        case "setCity":
            return {...state,City:action.payload}
        case "setPinCode":
            return {...state,PinCode:action.payload}
        case "setState":
            return {...state,State:action.payload}
        case "setMobile":
            return {...state,Mobile:action.payload}
        case "reset":
            state = action.payload
            return {...state};
        
    }
}

const initialState={
    Name:"",
    HouseNumber:"",
    Area:"",
    City: "",
    PinCode: "",
    State:"",
    Mobile:""
}


export function Address()
{
    const [addressState,reducerFun] = useReducer(addressReducer,initialState);
    
    const {address,setAddress} = useContext(AuthContext);
    const addressSubmitHandler = (e)=>{
        e.preventDefault();
        setAddress(addressState);
        reducerFun({type:"reset",payload:initialState});
    }
    const testAddress = {
        Name:"testUser",
        HouseNumber:"2/167 G",
        Area:"Ambedkar Nagar, Samathuvapuram",
        City: "Trichengode, Salem",
        PinCode: "Salem - 630006",
        State:"TamilNadu",
        Mobile:"555555555"
    }
    console.log(address);
    return (<div>
        <div className="currentAddress">
            <div className="addressheading">Current Address</div>
            {address==="address not set yet" && <div>{address} 
            <button onClick={()=>setAddress(testAddress)}>Set Default Address</button>
            </div> }
            {address.Name!==undefined && <div>
                <div>{address.Name},</div>
                <div>{address.HouseNumber},</div>
                <div>{address.Area},</div>
                <div>{address.City},</div>
                <div>PinCode: {address.PinCode},</div>
                <div>{address.State},</div>
                <div>Phone Number: {address.Mobile}</div>
            </div>}
        </div>
        <form onSubmit={(event)=>addressSubmitHandler(event)}>
            <fieldset className="AddressForm" >
                <legend>Add New Address</legend>
                <label htmlFor="name">Name</label>
                <input value={addressState.Name} required type="text" 
                onChange={(event)=>reducerFun({type:"setName",payload:event.target.value})}/>
                <label htmlFor="houseNum">House Number</label>
                <input value={addressState.HouseNumber} required type="text" 
                onChange={(event)=>reducerFun({type:"setHouseNumber",payload:event.target.value})}/>
                <label htmlFor="area">Area</label>
                <input value={addressState.Area} required type="text" 
                onChange={(event)=>reducerFun({type:"setArea",payload:event.target.value})}/>
                <label htmlFor="city">City</label>
                <input value={addressState.City} required type="text" 
                onChange={(event)=>reducerFun({type:"setCity",payload:event.target.value})}/>
                <label htmlFor="pinCode">PinCode</label>
                <input value={addressState.PinCode} required type="text" 
                onChange={(event)=>reducerFun({type:"setPinCode",payload:event.target.value})}/>
                <label htmlFor="state">State</label>
                <input value={addressState.State} required type="text" 
                onChange={(event)=>reducerFun({type:"setState",payload:event.target.value})}/>
                <label htmlFor="phone">Phone Number</label>
                <input value={addressState.Mobile}required type="text" 
                onChange={(event)=>reducerFun({type:"setMobile",payload:event.target.value})}/>
                <button>Submit</button>
            </fieldset>
        </form>
    </div>)
}