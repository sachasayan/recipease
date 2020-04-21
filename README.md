# Recipease

## Getting started

Don't forget to `yarn`. This project was bootstrapped with Create React App, so all of the usual procedures common to it apply here. 


To run the app in the development mode, simply `yarn start`. One the server is running, open [http://localhost:3000](http://localhost:3000) to view the project in the browser.


## Overview

We're running: 

* React as the base framework
* Axios for http fetching
* Tachyons for a quick styling solution
* React Dom for routing

And that's it! It's a fairly simple solution overall. 

The implementation is fairly naive, but should be reasonably robust. One assumption we make is that the shape of the data from the API will always be received and consistent in shape — that isn't always the case in the real world. We also don't do any image processing or much in the way of formatting the inputs, testing extremes or edge cases. Were this a real implementation, we'd likely focus on those first. 