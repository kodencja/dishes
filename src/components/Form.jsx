import React from "react";
import Input from "./Input";

function Form({ onType, onSubmit }) {
  console.log("Type: " + onType);

  const forPizza = (
    <div>
      <Input
        onTagType="input"
        onTitle="# of slices"
        onName="no_of_slices"
        onType="number"
        onID="no_of_slices"
        onClass="form-control"
        onPlaceHold={null}
        onStep={1}
        onAria="no_of_slices"
        onRequired={onType === "pizza" ? true : false}
        onDataSizing={null}
        onMin={0}
        onMax={null}
      />
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
        onMin={0}
        onMax={null}
      />
    </div>
  );

  return (
    <form id="dishes-form">
      <div className="row center">
        <Input
          onTagType="input"
          onTitle="Dish name"
          onName="dishName"
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

        <Input
          onTagType="input"
          onTitle="Preparation time"
          onName="prepTime"
          onType="time"
          onID="preparation_time"
          onClass="form-control"
          onPlaceHold={null}
          onStep="1"
          onAria="preparation_time"
          onRequired={true}
          onDataSizing={null}
          onMin="00:12:00"
          onMax={null}
          // onPattern={"[0-9]{2}:[0-9]{2}:[0-9]{2}"}
          onPattern={"([0-2][0-3]):([0-5][0-9]):([0-5][0-9])"}
        />

        <Input
          onTagType="select"
          onTitle="Type"
          onName="type"
          onID="type"
          onClass="form-control form-control-lg"
          // onOptionNames={["pizza", "soup", "sandwich"]}
          onOptionNames={["default", "pizza", "soup", "sandwich"]}
          onPlaceHold={null}
          onAria="type"
          onRequired={true}
        />
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
        {onType === "pizza" ? forPizza : ""}
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

export default Form;
