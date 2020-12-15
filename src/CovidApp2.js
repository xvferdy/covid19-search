import React, { useState, useEffect } from "react";
import axios from "axios";

import Paper from "@material-ui/core/Paper";

import CountryStats2 from "./CountryStats2";
import BreakingNews from "./BreakingNews";

export default function CovidApp2() {
  const [allcountry, setAllcountry] = useState([]);
  const [countrySummary, setCountrySummary] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    const getData = () => {
      const getCountry = async () => {
        let res = await axios.get("https://api.covid19api.com/countries");
        //Country & Slug (array with object)
        setAllcountry(res.data.map((country) => country));
      };

      // country with covid
      const getCountrySummary = async () => {
        let res = await axios.get("https://api.covid19api.com/summary");
        setCountrySummary(res.data.Countries);
      };

      getCountry();
      getCountrySummary().catch((err) => {
        alert("https://api.covid19api.com/summary ~Sedang ada gangguan~");
        console.log(err);
      });
    };
    getData();
  }, []);

  //sorted array only country
  let allcountryArr = allcountry.map((country) => country.Country).sort();
  return (
    <Paper
      style={{
        textAlign: "center",
        height: "100vh",
        backgroundImage: "url(bg2.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      elevation={0}
      // variant="outlined"
      square
    >
      <BreakingNews />
      <CountryStats2
        searchCountry={searchCountry}
        countrySummary={countrySummary}
      />

      <datalist id="mylist">
        {allcountryArr.map((country, i) => (
          <option key={i} value={country} />
        ))}
      </datalist>

      <div style={{ marginTop: "40px" }}>
        <input
          style={{
            height: "50px",
            width: "360px",
            fontSize: "20px",
          }}
          placeholder="Search..."
          type="search"
          list="mylist"
          autoFocus
          onChange={(e) => {
            setSearchCountry(e.target.value);
          }}
        />
      </div>
    </Paper>
  );
}
