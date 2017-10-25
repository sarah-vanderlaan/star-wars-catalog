# Star Wars Catalog
A Star Wars Character Catalog Using a GraphQL wrapper of the Star Wars API

Uses https://api.graphcms.com/relay/v1/swapi

## Get Started

1) Clone the project. `git clone https://github.com/sarah-vanderlaan/star-wars-catalog.git`
2) Navigate into `star-wars-catalog` folder
2) Install dependencies `npm install`
3) Run app with `npm start`. This command watches all files - everytime that code is rebuilt, linting runs and tests run.
4) Find app at localhost:3000. 

## Features

1) **React** for UI components
2) **Redux** for application state
2) **Apollo-Client** and **React-Apollo** for fetching and binding graphQL data
2) **Babel** to compile ES6
3) **Webpack** to bundle files and leverage hot reloading during development
4) **Express** server
5) **ESLint** to report style/syntax issues
6) **SCSS** for improved css syntax
7) **React-Router** for routing
8) **Expect/Sinon** for testing
9) **Halogen** for loading dots animation
10) **FlexboxGrid** for component layout on screen

### RESPONSIVE DESIGN:
Renders nicely in both desktop and mobile view:
#### Desktop:
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/star-wars-catalog/master/imgs/desktop.png)
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/star-wars-catalog/master/imgs/profilePage.png)
#### Mobile:
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/star-wars-catalog/master/imgs/mainMobile.png)
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/star-wars-catalog/master/imgs/profileMobile.png)

### LOADING STATE:
Displays loading dots when loading any data from graphQL:
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/star-wars-catalog/master/imgs/loading.png)
* Also shows smaller loading dots on profile page when loading

### ERROR STATE:
Handles graphQL errors:   
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/star-wars-catalog/master/imgs/graphQLError.png)
Also handles data-specific edge cases:
1) Handles null values for character properties (eg unknown height, planet, weight, etc) display as Unknown. Also shows user a message when character has no planet or no "friends" on planet.
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/star-wars-catalog/master/imgs/unknown.png)
2) Shows user a message when no data returned that matches search:
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/star-wars-catalog/master/imgs/noMatchingSearch.png)


## Other Functionality:

1) Ability to show/hide filter panel
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/star-wars-catalog/master/imgs/filterSectionClosed.png)
2) Navigate to characters from same planet via character profile page by clicking names of friends
3) Search for a character (searches based on if search term is contained in **any part** of the character name)
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/star-wars-catalog/master/imgs/search.png)
4) Sort character list in four different ways (Name asc/desc, Age asc/desc)
