const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const response = await axios.post(process.env.COGNITO_TOKEN_URI, null, {
    auth: {
      username: process.env.COGNITO_CLIENT_ID,
      password: process.env.COGNITO_CLIENT_SECRET,
    },
    params: {
      grant_type: "authorization_code",
      client_id: process.env.COGNITO_CLIENT_ID,
      code: req.query.code,
      redirect_uri: process.env.COGNITO_CALLBACK_URI,
    },
  });

  res.json(response.data);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
