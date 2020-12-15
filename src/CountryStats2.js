import React from "react";

export default function CountryStats2({ searchCountry, countrySummary }) {
  let countryStats = countrySummary.filter((country) => {
    if (searchCountry !== "") {
      return country.Country.toLocaleLowerCase().includes(
        searchCountry.toLocaleLowerCase()
      );
    } else {
      return country;
    }
  });

  return (
    <div style={{ marginTop: "25px" }}>
      {console.log(countryStats)}

      {/* {countryStats.length !== 0 ? (
        <>
          <h1>{countryStats[0].Country}</h1>
          <h3>{countryStats[0].TotalConfirmed}</h3>
        </>
      ) : (
        <h1>NO Data!</h1>
      )} */}

      {searchCountry ? (
        countryStats.length !== 0 ? (
          <div style={{ height: "170px", backgroundColor: "red" }}>
            <h1>{countryStats[0].Country}</h1>
            <h3>Confirmed: {countryStats[0].TotalConfirmed}</h3>
            <h3>Recovered: {countryStats[0].TotalRecovered}</h3>
            <h3>Deaths: {countryStats[0].TotalDeaths}</h3>
          </div>
        ) : (
          <h1 style={{ height: "170px", backgroundColor: "red" }}>NO Data!</h1>
        )
      ) : (
        <h2 style={{ height: "170px", backgroundColor: "red" }}>
          Select Country
        </h2>
      )}

      {/* <h1 style={{ height: "100px", backgroundColor: "red" }}>
        {searchCountry}
      </h1> */}
    </div>
  );
}
