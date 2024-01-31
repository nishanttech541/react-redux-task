### Question 1

> Describe the process, in a react-redux project, to fetch a set of data from a remote API endpoint, then to store that data into redux and then to present it on the screen.

### Solution

- Set redux store.
- Define action creators.
- Creating reducers.
- Integrating redux with application.
- Creating component to show in UI.

### 1. Set redux store

- First you need to setup a redux store to implement redux funcationality throughout the application.

- For creating redux store you need to use redux and react-redux packages.

- Then you need to define `actions`, ` action types`, `reducers`, and `initial state` related to fetching and storing this specific set of data.

### 2. Define action creators

- Define `action creators` which will fetch data from the API.

- This action creators will make API requests using tools like `'axios'` or `'fetch'`.

- After receiving the data, dispatch actions with the fetched data as payload.

### 3. Creating reducers

- The actions you have dispatched using action creators now will be handled by the reducers based on the action type.

- Create a reducer function that will listen to the actions dispatched related to fetching data.

- Now update the redux store state with the data fetched.

### 4. Integrating redux with application

- Using the `'react-redux'` `'Provider'` at the top level of your app connect redux store with your application.

- To access redux store in your react components you can use `connect() function` or `'useSelector' hook`.

### 5. Creating component

- Now create a react component where you want to display the fetched data.

- You can use `useEffect` if using functional component or `componentDidMount` incase you are using class component, to dispatch action creator to fetch the data when component mounts for `inital loading` of data or calling the api.

- Now to access the data form the redux store you can use `mapStateToProps` if using class component and `useSelector` hook if using functional component.

- The data you will get now can be displayed by rendering it to the components JSX.


### Question 2

>Create a function `generateUrl` to generate a URL from the given parameters:


/*
{

width: 360,

height: 300,

locale: 'en',

toolbar_bg: '',

interval: '3h',

pair: 'BTC_USD',

}
*/
// You can use any lib but the generated result should be

// "http://testurl.bitfinx.com/?height=300&interval=3h&locale=en&pair=BTC_USD&width=360"

// More parameters are planned to be added/removed later and the result should neglect the empty params (ex: should not include toolbar_bg in URL when its value is empty).

## solution
1) Create a function named generateUrl that retrun the generated url
2) define base url
3) Filter out null values (undefined or null parameters)
4) Convert object into an array of key-value pairs using Object.entries
5) Concatenate the base URL and the serialized parameters to generate the final URL.
6) return generated url string

### Question 3

>Apply some refactoring to improve the code of the following function. Explain the reasons behind your changes and which benefit they bring into the code.

### solution

1) Create a function named setupVolumeUnitInterface that encapsulates the functionality for valume interface
2) Create a function named getVolumeUnit that encapsulates an object of volume units and returns the corresponding value based on the volume unit parameter passed as an argument.
3) Replace nested if-else conditions with object-based switching for cleaner code.
4) get values of volume with object

