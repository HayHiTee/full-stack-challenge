### Instructions
1. Read the instructions and prompt
2. Clone repository to local machine
3. Set up tools/environment
4. Develop application
5. Commit/push changes to repository
6. Update README.md with any specific instructions for starting application

### Goal
Create a web application that allows users to find 
the **5 closest breweries** to their state's capital using the [Open Brewery API](https://www.openbrewerydb.org/)

### App Features
- Dropdown to select state
- Area to display search results

### Notes
- This is a full stack assignment - there must be a frontend and backend component (you may not fetch breweries directly from the client side).
- State capital location information is provided for you in `us_state_capitals.json`.
- This should take no more than 2-3 hours.
- There is no need to deploy this, although please ensure that it can run in a local development environment.
- There is no need for a persistent data store.
- There is no need to worry about styling (css).
- Preferred tools (present in repo) are: Django (python) and React (javascript). 
You may choose to remove this boilerplate and use your own tools or any additional tools of your liking. 
If you choose to use your own tools, please provide information for starting the application.

### Set environment variable in REACT
1. create .env file and copy .env.sample to it. 
2. start the python app then set REACT_APP_BACKEND_URL to the url of the python app
### Getting Started With Existing Tools
1. `cd app` > `yarn install` > `PORT=8001 yarn start`
2. `cd backend` > `pip install -r requirements.txt` > `python manage.py runserver`
