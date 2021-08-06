import React, {useEffect, useReducer} from "react";
import Form from "./components/Form";
import './App.css';
import './css/style.css';

export const DishContext = React.createContext();

const initialState = {
  dishName: "",
  prepTime: "00:15:00",
  type: "",
  inputTitle: ['Dish name', 'Preparation time'],
  inputName: ['dishName', 'prepTime'],
  inputType: ['text', 'prepTime'],
  inputID: ['name', 'preparation_time'],
  inputClass: ['form-control', 'form-control'],
  inputPlaceHold: ['Type dish name', ''],
  inputStep: ['null', '1'],
  inputAria: ['name', 'preparation_time'], 
  required: [true, true]
}

const initState = {
  dishName: "",
  prepTime: "00:15:00",
  type: "",
  no_of_slices: 0,
  diameter: 0,
  spiciness_scale: 0,
  slices_of_bread: 0,
  name_heck: "",
  prepTime_check: "",
  no_of_slices_check: "",
  diameter_heck: "",
  spiciness_scale_check: "",
  slices_of_bread_check: "",
  finalResponse: "",
  finalResponseStatus: false,
  isServerResponse: false,
}

const reducer = (state, action) => {
switch(action.type) {
case 'dishName': return {...state, dishName: action.payload};
case 'prepTime': return {...state, prepTime: action.payload};
case 'type': return {...state, type: action.payload};
// case 'no_of_slices': return {...state, no_of_slices: state.no_of_slices + 1};
case 'no_of_slices': return {...state, no_of_slices: parseInt(action.payload)};
// case 'diameter': return {...state, diameter: state.diameter + parseFloat(action.payload)};
case 'diameter': return {...state, diameter: parseFloat(action.payload)};
case 'spiciness_scale': return {...state, spiciness_scale: parseInt(action.payload)};
case 'slices_of_bread': return {...state, slices_of_bread: parseInt(action.payload)};
  default: return state;
}
}

function App() {
const [state, dispatch] = useReducer(reducer, initState);

useEffect(()=>{
  console.log(state);
  // console.log(state.prepTime);
// })
},[state])
// },[state.dishName, state.prepTime])

const handleChanging = (e) => {
  console.log(e.target.name);
  console.log(e.target.value);
  dispatch({ type: e.target.name, payload: e.target.value });
  // console.log(state.dishName);
  // console.log(state.prepTime);
}

// 3 groups of 2 character separated by : each character must be a digit contained in that specific ranges
const isValidTime = (text) =>{
  var regexp = new RegExp(/^([0-2][0-3]):([0-5][0-9]):([0-5][0-9])$/)
  return regexp.test(text);
}

const handleSubmit = (e) =>{
  e.preventDefault();
  if(isValidTime(state.prepTime)){
    console.log("prepTime is valid!");
  } else{
    console.log("prepTime is invalid!");
  }
}

  return (
    <div className="App">
         <div className="container">
        <div className="dishes">
          <DishContext.Provider value={{onState: state, onDispatch: dispatch, onChanging: handleChanging}}>
          <Form onType={state.type} onSubmit={handleSubmit}/>
          </DishContext.Provider>

          <span className="answer"></span>
        </div>

      </div>
    </div>
  );
}

export default App;
