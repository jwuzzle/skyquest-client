# Project Title
SkyQuest

## Overview

The app is designed to inspire users to travel more by offering personalized recommendations, challenges, and tools to find flights using credit card reward points. It aims to make travel more accessible and enticing for the everyday user.

### Problem

Travelers often encounter complexity when redeeming miles or points for flights. While transferring rewards to travel partners can offer better value, it requires users to visit each partner's site individually to compare flight options, posing inefficiencies and risking loss of reward value due to irreversible transfers

Choosing a travel destination can be challenging due to the vast number of options available worldwide. Many people tend to gravitate towards familiar destinations rather than exploring new places, which can limit their travel experiences and opportunities for discovery.

### User Profile

User types:
- Holds credit card(s) equipped with point-earning features that offer the ability to transfer points to travel partners (e.g., American Express cardholders).
- Aspires to embark on travels.
- Seeks opportunities to economize on travel expenses.
- Interested in discovering new destinations or uncertain about travel destinations.

How will it be used?
- MVP will have an experience focused for desktop use (internet browser), with future plans to allow users to use the product on their mobile phone.


### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

- Main feature: Search engine to find flights by points/miles. Data will include information provided by the external API vendor. For the MVP, users will be able to select their origin region (North America, Asia, etc) and their destination region when searching for flights.
- Entry / landing page that will use videos as the background and be the point of entry into my application.
- User account creation to allow users to create an account.
- Homepage for users who have an account. The homepage will be the centralized location for recommendations, challenges and more. 

## Implementation

### Tech Stack

- React, Javascript, CSS
- Node.js, Express
- API, JSON files

### APIs

- seats.aero API for flights by miles/points


### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

- Landing page: entry point and first page the user sees when coming to the site. 
- Home page: introduces the users to the website and the features available
- Sign up: page/process for the users to create an account/profile
- User homepage: page with all the features available to the users
- Flight search: page for the user to search flights by origin airport and destination region by points 
- Airline partners by credit cards: page with information on airline partners by credit card

### Mockups

- Housed in figma: https://www.figma.com/file/vI9ylGLvTDDfy9uALLq6r1/Capstone---SkyQuest?type=design&node-id=0%3A1&mode=design&t=mGSskYtrPbz7fVrV-1


### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

Data from the API:
- Frontend will initiate the call to the backend server to call the external API for the GET request.
- Data in the challenges will need to be saved for the user

JSON Files
- Will hold data for state information, airline information 

### Endpoints

- router.get('/', externalApiController.getExternalAPIData): flight information 

### Auth

- TBD on client side or server side authentication 


## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.

- Challenges: page that outlines fun travel challenges, such as "visit all states in the US", where users can track which states they've visited
- Addition filtering of the flight results
- Photo gallery where users can upload photos based on location / destination (social media type feed) 
