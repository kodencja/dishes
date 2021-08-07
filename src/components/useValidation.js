import { useRef } from "react";
import validator from "validator";


const useValidation = (dispatch) => {
  const arrayOfAllChecksValue = useRef([]);
  const checkTimeLength = useRef();


  // 3 groups of 2 character separated by : each character must be a digit contained in that specific ranges
  const isValidTime = (time) => {
    // console.log(time);
    // console.log(time.length);
    checkTimeLength.current = "";
    if(time.length < 8){
      time = time + ':00'
    } 
    // else if(time.length < 8){
    //   time = time + ':00'
    // }
    if(time < "00:15:00"){
      console.log("We need at least 15 min to prepare the dish!");
      checkTimeLength.current ="We need at least 15 min to prepare the dish!";
    }
    // console.log(time);
    // console.log(time.length);
    // const regexpAll = new RegExp(/^([0-2][0-3]):([0-5][0-9]):([0-5][0-9])$/);
    const regexpAll = new RegExp(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/);
    // const regexpAll = new RegExp(/^([0-2][0-3]+$|^$|^\s$):([0-5][0-9]+$|^$|^\s$):([0-5][0-9]+$|^$|^\s$)$/);
    // const regexpAll = new RegExp(/^([0-2][0-3]+$|^$):([0-5][0-9]+$|^$):([0-5][0-9]+$|^$)/);
    console.log("Time reg test: " + regexpAll.test(time));
    return regexpAll.test(time);
  };

  const onValidation = (dataToCheck, size) => {
    console.log("onValidation Fn");
    // console.log(dataToCheck);
    arrayOfAllChecksValue.current = [];
    return new Promise((resolve, reject) => {
      let count = 0;
      for (let eachProp in dataToCheck) {
        count++;
        // console.log(`${eachProp}_check`);
        // console.log(dataToCheck[eachProp]["sort"]);
        // console.log(dataToCheck[eachProp]["val"]);
        // console.log(eachProp);

        // get rid of spaces
        const valueWithoutSpaces = dataToCheck[eachProp]["val"].split(" ").join("");
        if (!valueWithoutSpaces) {
          arrayOfAllChecksValue.current.push(false);
          dispatch({
            type: `${eachProp}_check`,
            payload: "This field has to be filled in",
          });
          resolve(arrayOfAllChecksValue.current);
        }

        switch (dataToCheck[eachProp]["sort"]) {
          case "text":
            if (!validator.isAlpha(valueWithoutSpaces)) {
              console.log("case text false");
              arrayOfAllChecksValue.current.push(false);
              dispatch({
                type: `${eachProp}_check`,
                payload: "Please use only letters",
              });
            } else {
              console.log("case text true");
              arrayOfAllChecksValue.current.push(true);
              dispatch({ type: `${eachProp}_check`, payload: "ok" });
            }
            break;

          case "intNumber":
          case "floatNumber":
            if (!validator.isNumeric(valueWithoutSpaces)) {
              console.log("case number false");
              arrayOfAllChecksValue.current.push(false);
              dispatch({
                type: `${eachProp}_check`,
                payload: "Please use only numbers",
              });
            } else {
              console.log("case number true");
              arrayOfAllChecksValue.current.push(true);
              dispatch({ type: `${eachProp}_check`, payload: "ok" });
            }
            break;

          case "time":
            console.log(dataToCheck[eachProp]["val"]);
            console.log(valueWithoutSpaces);
            if (!isValidTime(valueWithoutSpaces)) {
              console.log("time error");
              arrayOfAllChecksValue.current.push(false);
              dispatch({
                type: `${eachProp}_check`,
                payload: "Please use only numbers in time format",
              });
            } else if(isValidTime(valueWithoutSpaces) && checkTimeLength.current !== "") {
              console.log("time too short");
              arrayOfAllChecksValue.current.push(false);
              dispatch({ type: `${eachProp}_check`, payload: checkTimeLength.current });
            } else {
              console.log("time ok");
              arrayOfAllChecksValue.current.push(true);
              dispatch({ type: `${eachProp}_check`, payload: "ok" });
            }
            break;

          default:
            break;
        }
        console.log(count);
        if (count >= size) {
          resolve(arrayOfAllChecksValue.current);
        }
      }
    });
  };

 

  return { onValidation };
};

export default useValidation;