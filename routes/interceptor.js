const axios = require("axios");
const hasAccess = async (appId, accessToCheck, env, idToken) => {
    try{
// interceptor for token validation
const headers = {
    "Content-Type": "application/json",
    idtoken: idToken,
  };

  const response = await axios.post(
    "https://d0c9-2401-4900-5d12-1252-500c-a65e-75bc-54e3.in.ngrok.io/api/auth/check-app-access",
    { appId, accessToCheck, env },
    { headers }
  );
  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
    }catch(e){
        return false;
    }
  
};

exports.hasAccess = hasAccess;
