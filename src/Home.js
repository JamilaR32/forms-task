import { Form, Field, Formik } from "formik";
import React from "react";
import "./App.css";

const init = {
  productName: "",
  productQuantity: "",
};
const Home = () => {
  function searhing(values) {
    alert(values.productName + " : " + values.productQuantity);
  }
  return (
    <div className="main">
      <Formik initialValues={init} onSubmit={searhing}>
        <Form>
          <label>Product Name</label>
          <Field name="productName"></Field>

          <Field name="productQuantity"></Field>
          <button>Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Home;
