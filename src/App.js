import { useState, useMemo, useRef } from "react";
import "./App.css";
import UserLoginForm from "./UserLoginForm";
import submitForm from "./action";

export default function Search() {
  const ref = useRef(null);

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form
        ref={ref}
        action={async (formData) => {
          await submitForm(formData);
          ref.current.reset();
        }}
      >
        <UserLoginForm />
      </form>
    </>
  );
}
