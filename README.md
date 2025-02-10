# Contact Management API

##  Setup Instructions
1. Clone the repository:
https://github.com/Ajay-kumar-Avula/contact-manager.git

2. Install dependencies:
   
    "dependencies": {
        "body-parser": "^1.20.3",
        "cors": "^2.8.5",
        "dotenv": "^16.4.7",
        "express": "^4.21.2",
        "express-validator": "^7.2.1",
        "mongoose": "^8.10.0"
    },
    "devDependencies": {
        "jest": "^29.7.0",
        "nodemon": "^3.1.9",
        "supertest": "^7.0.0"
    }

3. Start the server:
   
    npm start 
    npm run dev

##  API Endpoints

| Method | Endpoint          | Description |
|--------|------------------|-------------|
| GET    | `/contacts`      | Get all contacts |
| GET    | `/contacts/:id`  | Get a single contact |
| POST   | `/contacts`      | Create a new contact |
| PUT    | `/contacts/:id`  | Update a contact |
| DELETE | `/contacts/:id`  | Delete a contact |

##  Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- Jest for Testing
