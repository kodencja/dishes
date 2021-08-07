import React, {
  useContext,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { DishContext } from "../App";

function Input(props) {
  const dishContext = useContext(DishContext);
  const state = dishContext.onState;
  const addToInputRef = dishContext.onAddToInputRef;
  // const dispatch = dishContext.onDispatch;
  const handleChanging = dishContext.onChanging;
  const inputRef = dishContext.onInputRef;
  const {
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  } = state;

  const {
    onTagType,
    onTitle,
    onName,
    onType,
    onID,
    onClass,
    onPlaceHold,
    onStep,
    onAria,
    onRequired,
    onDataSizing,
    onMin,
    onMax,
    onPattern,
    onOptionNames,
  } = props;

  useEffect(() => {
    // console.log(onName + " " + state[onName]["val"]);
    // console.log(onName + " " + state[onName]["val"]);
    // console.log(onName + " dish: " + name.val);
    // console.log(onName + " time: " + preparation_time.val);
    // console.log(onOptionNames);
  });

  // const getOutputStyle = useCallback(
  const getOutputStyle = (inputVal, refObj, propName, unit) => {
    console.log(propName);
    refObj.forEach((el) => {
      // console.log(el);
      console.log(el.getAttribute("name"));
      // const elName = el.getAttribute('name');
      const elName = el.getAttribute("name");
      if (elName === propName && refObj !== undefined && refObj !== null) {
        let refObjMin = parseInt(el.getAttribute("min"));
        let refObjMax = parseInt(el.getAttribute("max"));
        if (refObjMin < 0) refObjMin = refObjMin * -1;
        return {
          left:
            ((parseInt(inputVal) + refObjMin) * 100) / (refObjMin + refObjMax) +
            unit,
        };
      }
    });
  };
  // },[spiciness_scale] );

  const options = useMemo(() => {
    console.log("options Fn");
    if (onTagType === "select") {
      return [...onOptionNames].map((name, ind) => {
        if (name === "default") {
          return (
            <option defaultValue hidden label=" " key={ind}>
              {/* // <option defaultValue disabled hidden key={ind}> */}
              select an option
            </option>
          );
        } else {
          return (
            <option value={name} key={ind}>
              {name}
            </option>
          );
        }
      });
    } else {
      return false;
    }
  }, [type]);

  const select = useMemo(() => {
    console.log("select Fn");
    return (
      <div className="col col-sm-3 col-sm-marg form-group input-cont">
        <div className="input-block">
          <label htmlFor={onName}>{onTitle}</label>
          <select
            // name="type"
            // id="type"
            // className="form-control form-control-lg"
            // required
            className={onClass}
            name={onName}
            aria-label={onAria}
            id={onID}
            required={onRequired}
            ref={addToInputRef}
            value={state[onName]["val"]}
            onChange={handleChanging}
          >
            {/* <option disabled defaultValue>
          {" "}
          -- select an option --{" "}
        </option> */}
            {options}
            {/* <option value="pizza">pizza</option>
        <option value="soup">soup</option>
        <option value="sandwich">sandwich</option> */}
          </select>
        </div>
      </div>
    );
  }, [type]);
  // (

  // );

  const input = useMemo(() => {
    console.log("input Fn");
    return (
      <div className="col col-sm-3 col-sm-marg form-group input-cont">
        <div className="input-block">
          <label htmlFor={onName}>{onTitle}</label>
          <input
            type={onType}
            placeholder={onPlaceHold}
            className={onClass}
            name={onName}
            aria-label={onAria}
            id={onID}
            step={onStep}
            required={onRequired}
            data-sizing={onDataSizing}
            min={onMin}
            max={onMax}
            pattern={onPattern}
            ref={addToInputRef}
            value={state[onName]["val"]}
            onChange={handleChanging}
            onKeyDown={handleChanging}
          />
        </div>
      </div>
    );
  }, [type]);

  const range = useMemo(() => {
    console.log("range Fn");
    return (
      <div className="col col-sm-3 col-sm-marg form-group input-cont">
        <div className="input-block">
          <label htmlFor={onName}>{onTitle}</label>
          <input
            type={onType}
            placeholder={onPlaceHold}
            className={onClass}
            name={onName}
            aria-label={onAria}
            id={onID}
            step={onStep}
            required={onRequired}
            data-sizing={onDataSizing}
            min={onMin}
            max={onMax}
            pattern={onPattern}
            ref={addToInputRef}
            value={state[onName]["val"]}
            onChange={handleChanging}
            onKeyDown={handleChanging}
          />
          <output
            className="bubble"
            style={getOutputStyle(
              state[onName]["val"],
              inputRef.current,
              onName,
              "%"
            )}
          >
            {state[onName]["val"] + "px"}
          </output>
        </div>
      </div>
    );
  }, [spiciness_scale, type]);

  return (
    <>
      {onTagType === "input" ? input : onTagType === "select" ? select : range}
    </>
  );
}

export default Input;
