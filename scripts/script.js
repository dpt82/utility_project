        const validDistricts = [3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        const cdInput = document.getElementById("cd-Input");
        const submitButton = document.getElementById("submit");

        // Add event listener to the submit button
        submitButton.addEventListener("click", function(event) {
                event.preventDefault(); // Prevent form submission
                promptForDistrict();
        });

     

        function promptForDistrict() {
                const userInput = cdInput.value;
                console.log(userInput); // Log the inputted data to the console

                if (userInput) {
                        // Check if user input is a number (will need to rethink this if this ever expands to districts outside of NY)
                        if (isNaN(userInput)) {
                                alert("Please Enter an NYC Congressional District!");
                                return;
                        }

                        // Check if user input is a valid district
                        if (!validDistricts.includes(parseInt(userInput))) {
                                alert("Invalid District! Enter an NYC Congressional District");
                                return;
                        }

                        // Create a pop-up so the user knows the results are loading.
                        const popup = document.createElement("div");
                        popup.textContent = "Loading District Information";
                        popup.style.position = "fixed";
                        popup.style.top = "26%"; // Set the pop up slightly above the capitol 
                        popup.style.left = "50%";
                        popup.style.transform = "translate(-50%, -50%)";
                        popup.style.padding = "10px";
                        popup.style.backgroundColor = "cornflowerblue";
                        popup.style.border = "1px solid black";
                        popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
                        popup.style.zIndex = "9999";
                        
                        document.body.appendChild(popup);

                        // Remove the pop-up after 3 seconds
                        setTimeout(function() {
                                popup.remove();
                                launchNewPage(userInput);
                        }, 3000);
                }
        }

        function launchNewPage(districtNumber) {
                // Define the URL of the new HTML page based on the district number
                const url = `district_${districtNumber}.html`;

                // Navigate to the new page
                window.location.href = url;
        }

        
cdButton.addEventListener("click", function() {
        // Create a pop-up to indicate that a popup is incoming
        const loadingPopup = document.createElement("div");
        loadingPopup.textContent = "Find My Election District Now Loading! A pop-up will soon appear.";
        loadingPopup.style.position = "fixed";
        loadingPopup.style.top = "26%"; 
        loadingPopup.style.left = "50%";
        loadingPopup.style.transform = "translate(-50%, -50%)";
        loadingPopup.style.padding = "10px";
        loadingPopup.style.backgroundColor = "cornflowerblue";
        loadingPopup.style.border = "1px solid black";
        loadingPopup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
        loadingPopup.style.zIndex = "9999";
                        
        document.body.appendChild(loadingPopup);

        // Remove the loading pop-up after 3 seconds
        setTimeout(function() {
                loadingPopup.remove();
                // Create a pop-up window to display the external website
                const popup = window.open("https://findmypollsite.vote.nyc", "_blank", "width=500,height=500");
        }, 3000);
});
                