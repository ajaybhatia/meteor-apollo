import React, { useState } from "react";
import { createUser } from "meteor-apollo-accounts";
import { initialize } from "meteor/cultofcoders:apollo";

const { client } = initialize();

const Links = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();

          // console.log(email, password);
          createUser({ email, password }, client);
        }}
      >
        <div>
          <label>Email</label>
          <input
            type="email"
            defaultValue={email}
            required
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            defaultValue={password}
            required
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Links;
