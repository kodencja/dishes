import React, {
  useContext,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { DishContext } from "../App";

function Input(props) {
  const inputRef = useRef([]);
  const dishContext = useContext(DishContext);
  const state = dishContext.onState;
  const dispatch = dishContext.onDispatch;
  const handleChanging = dishContext.onChanging;
  const { dishName, prepTime, type } = state;

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
    console.log(onName + " " + state[onName]);
    // console.log(onOptionNames);
  });

  const addToInputRef = useCallback((el) => {
    if (el && !inputRef.current.includes(el)) {
      inputRef.current.push(el);
      console.log(inputRef.current);
    }
  }, []);

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
  }, []);

  const select = (
    <div className="col col-sm-3 col-sm-marg form-group">
      <label htmlFor="onName">{onTitle}</label>
      <div>
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
          value={state[onName]}
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

  const input = (
    <div className="col col-sm-3 col-sm-marg form-group">
      <label htmlFor={onName}>{onTitle}</label>
      <div>
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
          value={state[onName]}
          onChange={handleChanging}
        />
      </div>
    </div>
  );

  return <>{onTagType === "input" ? input : select}</>;
}

export default Input;
