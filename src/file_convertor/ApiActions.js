import axios from "axios";

const SERVER_ADDRESS = "https://stark-escarpment-28883.herokuapp.com/";
const LOCAL_SERVER_ADDRESS = "http://localhost:8080";

const CLIENT_ID = Math.random()
  .toString(36)
  .substring(7);

export const uploadFlacFileForConversion = async file => {
  const formData = new FormData();
  console.log("file", file)
  formData.append("file", file);
  formData.append("client_id", CLIENT_ID);

  const config = {
    headers: {
      "content-type": "multipart/form-data"
    }
  };
  let res = await axios.post(SERVER_ADDRESS, formData, config);
  return res;
};
