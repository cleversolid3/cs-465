# cs-465

Travlr Getaways is a full-stack web app I built using MongoDB, Express, Angular, and Node.js. It has a customer side built with Express and an admin single-page app built with Angular. The admin side allows secure login and lets you add, edit, and delete trips. The backend connects to MongoDB through REST API routes, and I used JWT authentication to protect admin actions.

The Express frontend reloads full pages from the server, while the Angular SPA updates only the parts of the page that change on screen. This made the admin side faster and more interactive. MongoDB worked well because it stores data in JSON-style documents, which fit naturally with the rest of the JavaScript stack.

JSON is just a format used to send data between the frontend and backend. Angular sends requests to the Express API, and the server responds with JSON that updates the UI. I refactored my code by moving HTTP logic into services and reusing UI components like TripCardComponent, which made the app cleaner and easier to manage.

I tested my endpoints using GET, POST, PUT, and DELETE requests and checked status codes in the browser. After adding JWT authentication, I confirmed that protected routes returned a 401 error when the user was not logged in. This helped me understand how security works in a full-stack app.

This course helped me understand how all parts of a full-stack application connect. I learned how to build routes, controllers, connect a database, secure endpoints, and debug issues. This project shows I can build and secure a full-stack application from start to finish
