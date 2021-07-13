# ReWorth Coding Challenge Documentation

This is a React app which shows the list of the Reworth affiliates and the cashback they offer.

## Technical specifications

The challenge consists in the next activities:

-   Perform a GET request to the directory and fetch the offer array.

        The fetch of the requested information was made with the fetch API and the state was managed with hooks. This function verify if the data was obtained or if there is an error. If the data isn't loaded, it prints a loading text, if it is, the list is displayed.

-   Display the offers in a list using the data you have available from the API (get creative).

        The list is displayed when the data is loaded. The information presented to the user is the name of the business, the cashback they offer and the category.

-   Based on the colors of ReWorth, make it look cool. No design is provided but a nice UI is expected.

        The colors selected for the UI elements were taken from the Reworth site, which are:

        - $primary-color: #2e58ff
        - $accent-color: #001c69
        - $text-color: #636363

-   Create as many components or assets as you need, be careful to organize the files in a clear way and use comments when necessary.

        The components of the list are reusable and organized by files. The components of the list items are in their own directory.

        The Category component has a switch function that translates the category name to Spanish, in order to keep consistency across the website.

*   **Bonus** Implement list ordering by any of the object attributes and explain how you did it.

        There is an ordering function that uses the sort() array method. When the user clicks the button "Ordenar por mayor recompensa", the function is called and it orders the list from the greatest cashback to the smallest.
