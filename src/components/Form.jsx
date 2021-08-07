import React, { useContext } from "react";
import { DishContext } from "../App";
import Input from "./Input";
import Feedback from "./Feedback";

function Form({ onType, onSubmit }) {
  // console.log("Type: " + onType);
  const dishContext = useContext(DishContext);
  const { addToFeedbackRef } = dishContext.onAddToFeedbackRef;
  // const { onAddToFeedbackRef, onState, onOutputStyle } =
  // dishContext;
  const state = dishContext.onState;
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
    // if (refObj !== undefined && refObj !== null) {
    //   let refObjMin = parseInt(refObj.getAttribute("min"));
    //   let refObjMax = parseInt(refObj.getAttribute("max"));
    //   if (refObjMin < 0) refObjMin = refObjMin * -1;
    //   return {
    //     left:
    //       ((parseInt(inputVal) + refObjMin) * 100) / (refObjMin + refObjMax) +
    //       unit,
    //   };
    // }
  };

  const forPizza = (
    <div>
      <Input
        onTagType="input"
        onTitle="No of slices"
        onName="no_of_slices"
        onType="number"
        onID="no_of_slices"
        onClass="form-control"
        onPlaceHold={null}
        onStep={1}
        onAria="no_of_slices"
        onRequired={onType === "pizza" ? true : false}
        onDataSizing={null}
        onMin={1}
        onMax={null}
      />
      <Feedback
        msgResponse={no_of_slices.check}
        onAddToFeedbackRef={addToFeedbackRef}
      />
      {/* <span className="answer"></span> */}
      <Input
        onTagType="input"
        onTitle="diameter"
        onName="diameter"
        onType="number"
        onID="diameter"
        onClass="form-control"
        onPlaceHold={null}
        onStep={0.1}
        onAria="diameter"
        onRequired={onType === "pizza" ? true : false}
        onDataSizing={null}
        onMin={0.1}
        onMax={null}
      />
      <Feedback
        msgResponse={diameter.check}
        onAddToFeedbackRef={addToFeedbackRef}
      />
      {/* <span className="answer"></span> */}
    </div>
  );

  const forSoup = (
    <div>
      <Input
        onTagType="range"
        onTitle="Spiciness scale"
        onName="spiciness_scale"
        onType="range"
        onID="spiciness_scale"
        onClass="form-control form-control-range"
        onPlaceHold={null}
        onStep={1}
        onAria="spiciness_scale"
        onRequired={onType === "soup" ? true : false}
        onDataSizing="px"
        onMin={1}
        onMax={10}
      />

      <Feedback
        msgResponse={spiciness_scale.check}
        onAddToFeedbackRef={addToFeedbackRef}
      />
    </div>
  );

  const forSandwich = (
    <div>
      <Input
        onTagType="input"
        onTitle="No of slices"
        onName="slices_of_bread"
        onType="number"
        onID="slices_of_bread"
        onClass="form-control"
        onPlaceHold={null}
        onStep={1}
        onAria="slices_of_bread"
        onRequired={onType === "sandwich" ? true : false}
        onDataSizing={null}
        onMin={1}
        onMax={null}
      />
      <Feedback
        msgResponse={slices_of_bread.check}
        onAddToFeedbackRef={addToFeedbackRef}
      />
    </div>
  );

  return (
    <form id="dishes-form">
      <div className="row center">
        <Input
          onTagType="input"
          onTitle="Dish name"
          onName="name"
          onType="text"
          onID="name"
          onClass="form-control"
          onPlaceHold="Type dish name"
          onStep={null}
          onAria="name"
          onRequired={true}
          onDataSizing={null}
          onMin={null}
          onMax={null}
          onPattern={null}
        />
        <Feedback
          msgResponse={name.check}
          onAddToFeedbackRef={addToFeedbackRef}
        />
        {/* <span className="answer"></span> */}

        <Input
          onTagType="input"
          onTitle="Preparation time"
          onName="preparation_time"
          onType="time"
          onID="preparation_time"
          onClass="form-control"
          onPlaceHold={null}
          onStep={1}
          onAria="preparation_time"
          onRequired={true}
          onDataSizing={null}
          // onMin="00:12:00"
          onMin={null}
          onMax={null}
          onPattern={"[0-9]{2}:[0-9]{2}:[0-9]{2}"}
          // onPattern={"([0-2][0-3]):([0-5][0-9]):([0-5][0-9])"}
          // onPattern={null}
        />
        {/* <input
          type="time"
          className="form-control"
          name="preparation_time"
          aria-label="preparation_time"
          id="preparation_time"
          required={true}
          pattern={onPattern}
          ref={addToInputRef}
          value={state[onName]["val"]}
          onChange={handleChanging}
          onBlur={handleChanging}
        /> */}
        <Feedback
          msgResponse={preparation_time.check}
          onAddToFeedbackRef={addToFeedbackRef}
        />
        {/* <span className="answer"></span> */}

        <Input
          onTagType="select"
          onTitle="Type"
          onName="type"
          onID="type"
          onClass="form-control form-control-lg"
          onOptionNames={["default", "pizza", "soup", "sandwich"]}
          onPlaceHold={null}
          onAria="type"
          onRequired={true}
        />
        <Feedback
          msgResponse={type.check}
          onAddToFeedbackRef={addToFeedbackRef}
        />
        {/* <span className="answer"></span> */}
        {/* <Input
          onTagType="input"
          onTitle="diameter"
          onName="diameter"
          onType="number"
          onID="diameter"
          onClass="form-control"
          onPlaceHold={null}
          onStep={0.1}
          onAria="diameter"
          onRequired={true}
          onDataSizing={null}
          onMin={0}
          onMax={1000}
        /> */}
        {onType === "pizza"
          ? forPizza
          : onType === "soup"
          ? forSoup
          : onType === "sandwich"
          ? forSandwich
          : ""}
        {/* {forPizza} */}
      </div>
      <div className="row center">
        <div className="buttons col">
          <button
            type="submit"
            className="btn btn-success btn-check"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default React.memo(Form);
