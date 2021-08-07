import React, { useEffect, useReducer, useRef, useCallback } from "react";
import Form from "./components/Form";
import "./App.css";
import "./css/style.css";
import useValidation from "./components/useValidation";
import axios from "axios";

export const DishContext = React.createContext();

const initialState = {
  name: { val: "", sort: "text", check: "" },
  preparation_time: { val: "00:15:00", sort: "time", check: "" },
  type: { val: "", sort: "text", check: "" },
  no_of_slices: { val: "1", sort: "intNumber", check: "" },
  diameter: { val: "0.1", sort: "floatNumber", check: "" },
  spiciness_scale: { val: "1", sort: "intNumber", check: "" },
  slices_of_bread: { val: "1", sort: "intNumber", check: "" },
  sizeOfSubmittedObject: 0,
  validationFinished: "not",
  validationSuccess: false,
  finalResponse: "",
  loading: false,
  finalResponseStatus: false,
  isServerResponse: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, name: { ...state.name, val: action.payload } };
    case "name_check":
      return {
        ...state,
        name: { ...state.name, check: action.payload },
      };
    case "preparation_time":
      return { ...state, preparation_time: { ...state.preparation_time, val: action.payload } };
    case "preparation_time_check":
      return {
        ...state,
        preparation_time: { ...state.preparation_time, check: action.payload },
      };
    case "type":
      return { ...state, type: { ...state.type, val: action.payload } };
    case "type_check":
      return { ...state, type: { ...state.type, check: action.payload } };
    case "no_of_slices":
      return {
        ...state,
        no_of_slices: { ...state.no_of_slices, val: action.payload },
      };
    case "no_of_slices_check":
      return {
        ...state,
        no_of_slices: { ...state.no_of_slices, check: action.payload },
      };
    case "diameter":
      return { ...state, diameter: { ...state.diameter, val: action.payload } };
    case "diameter_check":
      return {
        ...state,
        diameter: { ...state.diameter, check: action.payload },
      };
    case "spiciness_scale":
      return {
        ...state,
        spiciness_scale: { ...state.spiciness_scale, val: action.payload },
      };
    case "spiciness_scale_check":
      return {
        ...state,
        spiciness_scale: { ...state.spiciness_scale, check: action.payload },
      };
    case "slices_of_bread":
      return {
        ...state,
        slices_of_bread: { ...state.slices_of_bread, val: action.payload },
      };
    case "slices_of_bread_check":
      return {
        ...state,
        slices_of_bread: { ...state.slices_of_bread, check: action.payload },
      };
    case "validationFinished":
      return { ...state, validationFinished: action.payload };

    case "validationSuccess":
      return { ...state, validationSuccess: action.payload };

    case "sizeOfSubmittedObject":
      return { ...state, sizeOfSubmittedObject: action.payload };

    case "finalResponse":
      return { ...state, finalResponse: action.payload };
      case "reset":
        return { ...state, name: {...state.name, val: ""}, preparation_time: {...state.preparation_time, val: "00:15:00"}, type:{ ...state.type, val: ""}, no_of_slices: {...state.no_of_slices, val: "1"}, diameter: {...state.diameter, val: "0.1"}, slices_of_bread: { ...state.slices_of_bread, val: "1"}, spiciness_scale: {...state.spiciness_scale, val: "1"}  };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { arrayOfAllChecksValue, onValidation } = useValidation(dispatch);
  const inputRef = useRef([]);
  const feedbackRef = useRef([]);
  const dataToSend = useRef({});

  const {
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
    validationFinished,
    finalResponse,
  } = state;

  useEffect(() => {
    console.log(state);
    // console.log(state.inputsVal);
    // console.log("name.check: " + state.name.check);
    // console.log("preparation_time.check: " + state.preparation_time.check);
    // console.log("type.check: " + state.type.check);
    // console.log("no_of_slices.check: " + state.no_of_slices.check);
    // console.log("diameter.check: " + state.diameter.check);
    // })
  }, [state]);
  // },[state.name, state.preparation_time])

  useEffect(() => {
    console.log("validationFinished");
    console.log(validationFinished);

    if (validationFinished === "ok") {
      console.log("let's use axios!");
      console.log("dataToSend: ");
      console.log(dataToSend.current);



      inputRef.current.forEach((el) => {
        console.log(el);
        console.log(el.getAttribute('name'));
        // const elName = el.getAttribute('name');
        const elName = el.getAttribute('name');
        // const eltype = el.getAttribute('type');
        // if(state[elName]["check"] === "ok"){
          el.classList.remove("inCorrect");
          el.classList.add("correct");
          // state[elName]["val"] = ""
          console.log("reset");
          dispatch({type: "reset", payload: ""});
        // } else {
          // el.classList.add("inCorrect");
        // }
        
      });
      feedbackRef.current.forEach((el) => {
        el.classList.add("afterValidation");
      });
      // dispatch({ type: "finalResponse", payload: "let's use axios!" });

      axios.post('https://jsonplaceholder.typicode.com/posts', dataToSend.current)
      .then(response => {
          console.log(response);
          console.log(response.data);  // {userId: "2", title: "Gra w tenisa", body: "sanki", id: 101}
          // this.setState({answer: response})
          dispatch({ type: "finalResponse", payload: "Your order has been sent succefully!" });
      }).catch(error => {
          console.log(error);
          dispatch({ type: "finalResponse", payload: "Server error!" });
      })

    } else if(validationFinished === "error"){
      console.log("There is a mistake!");

      inputRef.current.forEach((el) => {
        // console.log(el);
        // console.log(el.getAttribute('name'));
        const elName = el.getAttribute('name');
        if(state[elName]["check"] === "ok"){
          el.classList.remove("inCorrect");
          el.classList.add("correct");
        } else {
          el.classList.remove("correct");
          el.classList.add("inCorrect");
        }
        
      });

      dispatch({ type: "finalResponse", payload: "There is a mistake!" });


    }

    // for (let eachProp in state) {
    //   if (
    //     state[eachProp].hasOwnProperty("check") &&
    //     state[eachProp]["check"] !== ""
    //   ) {
    //     // console.log(state[eachProp]["check"])
    //     console.log(state[eachProp]["check"]);
    //     if (state[eachProp]["check"] === "ok") {
    //       // arrayOfAllChecksValue.current.push("ok");
    //       dispatch({ type: "validationSuccess", payload: true });
    //     } else {
    //       // arrayOfAllChecksValue.current.push(state[eachProp]["check"]);
    //       dispatch({ type: "validationSuccess", payload: false });
    //     }
    //   }
    // }
    console.log(state);
  }, [validationFinished]);

  // useEffect(() => {
  //   console.log(state.validationSuccess);
  //   if (state.validationSuccess === true) {
  //     console.log("let's use axios!");
  //   } else {
  //     console.log("There is a mistake!");
  //   }
  // }, [state.validationSuccess]);

  const handleChanging = (e) => {
    // console.log(e.target.name);
    console.log(e.target.value);
    // dispatch({ type: ["inputsVal"][e.target.name], payload: e.target.value });
    dispatch({ type: e.target.name, payload: e.target.value });
    // dispatch({ type: e.target.name, payload: e.target.value });
    // console.log(state.name);
    // console.log(state.preparation_time);
  };

  const chooseDataToValidate = (types) => {
    return new Promise((resolve, reject) => {
      let dataToSend = {};
      let baseData = { name, preparation_time, type };
      console.log(types);
      switch (types) {
        case "pizza":
          dataToSend = { ...baseData, no_of_slices, diameter };
          // dataToSend = { name, preparation_time, type, no_of_slices, diameter };
          console.log(dataToSend);
          resolve(dataToSend);
          break;
        case "soup":
          dataToSend = { ...baseData, spiciness_scale };
          // dataToSend = { name, preparation_time, type, spiciness_scale };
          console.log(dataToSend);
          resolve(dataToSend);
          break;
        case "sandwich":
          dataToSend = { ...baseData, slices_of_bread };
          // dataToSend = { name, preparation_time, type, slices_of_bread };
          console.log(dataToSend);
          resolve(dataToSend);
          break;
        default:
          dataToSend = { ...baseData };
          resolve(dataToSend);
          break;
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("validationFinished = not");
    dispatch({ type: "validationFinished", payload: "not" });
    const dataToValidate = await chooseDataToValidate(type.val);
    const sizeOfObjectToValid = Object.keys(dataToValidate).length;
    dispatch({
      type: "sizeOfSubmittedObject",
      payload: sizeOfObjectToValid,
    });
    console.log(dataToValidate);
    const replayCheck = await onValidation(dataToValidate, sizeOfObjectToValid);

    // create an object to be sent
    // dataToSend.current = dataToValidate;
    for(let eachProp in dataToValidate){
      console.log(eachProp);
      console.log(dataToValidate[eachProp]["val"]);
      dataToSend.current = {...dataToSend.current, [eachProp]:dataToValidate[eachProp]["val"] }
    }
    console.log(state);
    // if there are no errors in input fields
    if (replayCheck.every((el) => el === true)) {
      console.log("validationFinished = ok");
      dispatch({ type: "validationFinished", payload: "ok" });
    } else {
      console.log("validationFinished = error");
      dispatch({ type: "validationFinished", payload: "error" });
    }
  };

  const addToFeedbackRef = useCallback((el) => {
    if (el && !feedbackRef.current.includes(el)) {
      feedbackRef.current.push(el);
      console.log(feedbackRef.current);
    }
  }, []);

  const addToInputRef = useCallback((el) => {
    if (el && !inputRef.current.includes(el)) {
      inputRef.current.push(el);
      console.log(inputRef.current);
    }
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="dishes">
          <DishContext.Provider
            value={{
              onState: state,
              onDispatch: dispatch,
              onChanging: handleChanging,
              onAddToInputRef: addToInputRef,
              onInputRef: inputRef,
              onAddToFeedbackRef: addToFeedbackRef,
            }}
          >
            <Form onType={type.val} onSubmit={handleSubmit} />
          </DishContext.Provider>

          <div className="answer">{finalResponse}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
