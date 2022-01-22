This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).






[Live demo](https://abhisawesome.github.io/OTT-Clone/)

<br/><br/>
## Run on local

1. ```npm i ```
2. ```npm run start```

Running the app on: [http://localhost:3000](http://localhost:3000)
<br/><br/>


## Test cases

To run the test case ```npm run test -- --watchAll=false```
<br/>
Test are written on the folder  ```__test__```
<br/><br/>
## Design Decision

1. When Navigation bar height is set to 192px , height rapidly increase , so reduced the size

<br/><br/>
## Problems

1. When user initially moved to the bottom there will be loader for loading the remaining list. In realtime the data will be fetched from the api so added a ```setTimeOut()``` when fetching list
<br/>
[On file (Line No: 22)](https://github.com/abhisawesome/OTT-Clone/blob/main/src/hooks/fetchMovie.js)

2. For functional components only added the snapshot testing


<br/><br/><br/><br/>

## Add-on

1. added github actions for auto-deploy 
<br/>[File](https://github.com/abhisawesome/OTT-Clone/blob/main/.github/workflows/action.yml)
2. Docker file to run on local :
    <br/>
    ```docker build -t ott-clone . && docker run -p 3001:3000 ott-clone```