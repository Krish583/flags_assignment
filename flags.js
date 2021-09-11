let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi"
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin"
    },
    {
      name: "United States",
      population: "323,947,000",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C"
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia"
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik"
    }
    
  ]
  
  const divMain = document.createElement('div');
  divMain.setAttribute('class','contain') 
  document.body.append(divMain);
  
  for(let i=0;i<countriesInfo.length;i++)
    {
  const container=document.createElement('div');
  container.className="inside";
  container.innerHTML =`
  <img src=${countriesInfo[i].flag} alt="United States of America" width="200" height="150">
  <h3> ${countriesInfo[i].name}</h3>
  <p> <b>Population:</b>  ${countriesInfo[i].population}</p>
  <p> <b>Region: </b> ${countriesInfo[i].region} </p>
  <p><b>Capital:</b> ${countriesInfo[i].capital}</p>
  `;
  divMain.appendChild(container);
    }
  
  