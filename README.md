# URL-Shortener
A URL shortener service

# Working Stack:
- Node.js Runtime Env for JS
- MongoDB in the container (Compass for viewing)
- Mongoose to talk with DB
- Express.js to do the routing
- config package to allow global vars
- nodemon to watch the project (auto/hot restart after code saved)
- URL checking package: valid-url
- shortid package to generate short Id for short url
- Postman for checking requests

# To run locally:
- Go to default.js and change the mongoURI to "mongodb://localhost:27017/url-shortener" instead of "mongodb://url-mongo:27017/url-shortener",
- Create simple local Docker MongoDB container
- Run: npm run dev

# Run using Docker containers:
- Create external Docker network: docker network create short-url
- Build docker-compose file: docker-compose build
- Run docker-compose file: docker-compose up -d (in detach mode)
