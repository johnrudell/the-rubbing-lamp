# The Rubbing Lamp

<h3><a href="http://the-rubbing-lamp.herokuapp.com/#/">LIVE</a></h3>

The Rubbing Lamp, a Kickstarter clone, is a crowdfunding platform that grants users the ability to make a well thought-out project (wish). Other users (genies) can back a project and ultimately grant that wish when it is fully funded.

<img src="https://s3.amazonaws.com/the-rubbing-lamp-dev/screenshots/rub-home.png"></img>

## `WayUp` Front End Pipeline
For this example I will be showcasing the `SessionForm` component, which includes login and signup. Using React/Redux, the process is as follows:
 + The user enters their credentials into the `SessionForm` component and triggers a submit event.
  + `./frontend/components/session/session_form`
 + This dispatches either a login or signup action creator.
  + `./frontend/actions/session_actions`
 + That's a function that gets caught by our thunk middleware.
  + `./frontend/actions/session_actions`
 + It gets stopped here, because it's a function, and makes an AJAX call to fetch data from the backend.
  + `./frontend/util/session_api_util`
 + Backend magic happens here...
 + The promise will resolve when the AJAX request sends a response back.
  + `./frontend/actions/session_actions`
 + When resolves, it dispatches a new action, receiveCurrentUser.
  + `./frontend/actions/session_actions`
 + It hits all of our middleware, but doesn't get stopped because it's an action.
  + `./frontend/actions/session_actions`
 + It moves on to the reducers, creating new state with that new data.
  + `./frontend/reducers/session_reducer`
  + `./frontend/reducers/session_errors_reducer`
 + And finally it lands in our store.
  + `./frontend/store/store`
 + The `SessionFormContainer`, the container component of `SessionForm`, maps the state and dispatch to the presentational component, `SessionForm`.
  + `./frontend/components/session/session_form_container`
 + This will trigger a re-render and due to my React lifecycle method, componentWillReceiveProps, it will pushed the history to the root url.
  + `./frontend/components/session/session_form`

## Features
 + User Authentication
 + Project Create
 + Project Update
 + Rewards and Backings
 + Categories
 + Statistics Bar
 + Amazon Web Services and Paperclip Image Uploading

## Project Show Page

A user can create a "wish" with rewards. Other users can then back these rewards. I created the smooth interface using React components keeping my code DRY and scalable.


<img src="https://s3.amazonaws.com/the-rubbing-lamp-dev/screenshots/rub-create.png" />
<img src="https://s3.amazonaws.com/the-rubbing-lamp-dev/screenshots/rub-show.png" />

## Technologies
 + Ruby on Rails
 + React and Redux
 + jQuery
