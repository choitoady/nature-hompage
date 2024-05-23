import axios from "axios";
import React, { useEffect } from "react";

function Main() {
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("http://placeimg.com/640/480/animals");
        console.log(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }

    getData();
  }, []);

  return <div>Main</div>;
}

export default Main;
