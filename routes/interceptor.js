const axios = require("axios");
const  constants  = require("../middleware/constants");
const hasAccess = async (appId, accessToCheck, env, idToken) => {
    try{
// interceptor for token validation
const headers = {
    "Content-Type": "application/json",
    idtoken: idToken,
  };

  const response = await axios.post(
    constants.AUTH_URL,
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
