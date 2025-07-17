import React from "react";

// let api = "http://api.weatherapi.com/v1/current.json?key=199745bfd67e42dc9d2171937251607&q=London&aqi=no"

const Api = () => {
  let response;
  let data;
  const APIFunction = async () => {
    try {
      // response = await fetch(api);

      console.log(response);

      data = await response.json();
      console.log(data);
      console.log(data.location.region);
    } catch (error) {
      console.log("Error while fetch api",error)
    }
  };

  APIFunction();

  return (
    <>
      
    </>
  )
};

export default Api;
