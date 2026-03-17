import axios from "axios";

// COUNTRY API
export const getCountries = async () => {
  try {
    const res = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name"
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// STATE API
export const getStates = async (country) => {
  try {
    const res = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/states",
      { country }
    );

    return res.data.data.states;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// CITY API
export const getCities = async (country, state) => {
  try {
    const res = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/state/cities",
      {
        country,
        state,
      }
    );

    return res.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};