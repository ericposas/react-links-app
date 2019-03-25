
# Links
## A simple app that allows you to avoid emailing yourself links

### Logic Flow
- Users use "Add Link" button to add their inputted link url
- The "Add Link" action calls the POST API endpoint
- Server side, we receive the POST request and add the new link into MongoDB collection "links" in database "test"
- After async call to add a link finishes, we retrieve the updated list of links via the GET API endpoint
- Redux fires the render update to React and we see the updated array of links inline
- The same process repeats when we want to delete a link by pressing the "X", except that we call the DELETE endpoint, Mongo deletes a link insted. After the delete process finishes, we again call the GET endpoint to retrieve the updated list 


###Features
- MongoDB backend to store persistent link data across devices
  + save a link via phone, and easily access it on desktop or tablet
- React front-end with Redux state store
- Redux-Thunk as Middleware for async API calls


### Possible improvements to make
- Reverse the order of links
  + where the last one added gets pushed to the top of the list
- Improve UI look
- Start a new project called "Pages"
  + will add support for groups of links, or 'pages'
  + add login authentication support
