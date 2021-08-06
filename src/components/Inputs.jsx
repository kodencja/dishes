import React, { useContext } from "react";
import { DishContext } from "../App";

function Inputs() {
  const dishContext = useContext(DishContext);
  const state = dishContext.onState;
  const dispatch = dishContext.onDispatch;
  const handleChanging = dishContext.onChanging;
  const {
    dishName,
    prepTime,
    type,
    inputTitle,
    inputName,
    inputType,
    inputID,
    inputClass,
    inputPlaceHold,
    inputStep,
    inputAria,
    required,
  } = state;

  return (
    <>
      {inputTitle.map((title, ind) => {
        return (
          <div className="col col-sm-3 col-sm-marg form-group" key={ind}>
            <label htmlFor={inputName[ind]}>{title}</label>
            <div>
              <input
                type={inputType[ind]}
                placeholder={inputPlaceHold[ind]}
                className={inputClass[ind]}
                name={inputName[ind]}
                aria-label={inputAria[ind]}
                id={inputID[ind]}
                step={inputStep[ind]}
                required={required[ind]}
                onChange={handleChanging}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Inputs;
