// Write your JavaScript code here!
   window.addEventListener("load", function() {
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(
      function(response) {
        let destination = response.json();

        destination.then(function(json) {
          let container = document.getElementById("missionTarget");

          for (mission of json) {
            let missionHTML = `<h2>Mission Destination</h2>
          <ol>
             <li>Name: ${mission.name}</li> 
             <li>Diameter: ${mission.diameter}</li>
             <li>Star: ${mission.star}</li>
             <li>Distance from Earth: ${mission.distance}</li>
             <li>Number of Moons: ${mission.moons}</li>
          </ol>
          <img src= "${mission.image}"></img>
          `;
            container.innerHTML = missionHTML;
          }
        });
      }
    );
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let pilotNameInput = document.querySelector("input[name=pilotName]");
         let copilotNameInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput= document.querySelector("input[name=fuelLevel]");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
         document.getElementById("pilotStatus").innerHTML = `Pilot ${ pilotNameInput.value + " "} Ready`
      document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${ copilotNameInput.value + " "} Ready`
         if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
         } else if (!isNaN(pilotNameInput.value)){
            alert("Pilot Name has to be a string");
            event.preventDefault();
         } else if (!isNaN(copilotNameInput.value)){
            alert("Copilot Name has to be a string");
            event.preventDefault();
         } else if (isNaN(fuelLevelInput.value)){
            alert("Fuel Level has to be a number");
            event.preventDefault();
         } else if (isNaN(cargoMassInput.value)){
            alert("Cargo Mass has to be a number");
            event.preventDefault();
         } else {
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`
            document.getElementById("copilotStatus").innerHTML = `Co-Pilot ${copilotNameInput.value} is ready for launch`
            if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
               document.getElementById("faultyItems").style.visibility = "visible";
               document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
               document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
               document.getElementById("launchStatus").style.color = "red"; 
               document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
            }
            else if (fuelLevelInput.value < 10000) {
               document.getElementById("faultyItems").style.visibility = "visible";
               document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
               document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
               document.getElementById("launchStatus").style.color = "red"; 
            }
            else if (cargoMassInput.value > 10000) {
               document.getElementById("faultyItems").style.visibility = "visible";
               document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
               document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
               document.getElementById("launchStatus").style.color = "red"; 
            }
            else {
               document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
               document.getElementById("launchStatus").style.color= "green";
               document.getElementById("faultyItems").style.visibility = "visible";
               document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
               document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";               
            }

            event.preventDefault();

         } 
      });
   });
