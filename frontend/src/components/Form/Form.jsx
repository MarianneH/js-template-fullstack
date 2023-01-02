import axios from "axios";
import React, { useRef } from "react";

function Form() {
  const inputRef = useRef();

  function hSubmit(evt) {
    evt.preventDefault();

    const formData = new FormData();
    formData.append("avatar", inputRef.current.files[0]);

    axios.post(`http://localhost:5001/api/avatar`, formData);
  }

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={hSubmit}>
        <input type="file" name="avatar" ref={inputRef} />
        <button type="submit">Send!</button>
      </form>
    </div>
  );
}

export default Form;
