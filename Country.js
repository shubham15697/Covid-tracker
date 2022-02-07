document.getElementById("SubmitCountryText").addEventListener("click", function () {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.Countries);
        let allCountryData = data.Countries;
        // console.log(allCountryData[0]);

        for (let i = 0; i <= allCountryData.length - 1; i++) {
          let inputCounrty = document.getElementById("searchInputText").value;
          console.log(inputCounrty);
          let forLoopData = allCountryData[i];
          // console.log(forLoopData.Country);

          if (forLoopData.Country === `${inputCounrty}`) {
            // console.log(forLoopData.Country);

            // console.log("Country - ",forLoopData.Country);

            document.getElementById("New").innerHTML = forLoopData.Country;

            document.getElementById("Total").innerHTML = forLoopData.Country;

            console.log("Country Code - ", forLoopData.CountryCode);

            document.getElementById("TodayDate").innerHTML = `${forLoopData.Date}(${forLoopData.CountryCode})`;

            document.getElementById("NewConfirmed").innerHTML =
              forLoopData.NewConfirmed;

            document.getElementById("NewDeaths").innerHTML =
              forLoopData.NewDeaths;

            document.getElementById("NewRecoved").innerHTML =
              forLoopData.NewRecovered;

            document.getElementById("TotalConfirmed").innerHTML =
              forLoopData.TotalConfirmed;

            document.getElementById("TotalRecoverd").innerHTML =
              forLoopData.TotalRecovered;

            document.getElementById("TotalDeaths").innerHTML =
              forLoopData.TotalDeaths;
          }
        }
      });
  })
.catch(error=>{
  alert("error");
});