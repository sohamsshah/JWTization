# JWTization
JWTization is a web service developed that enables the authentication of the Users by making use of JWT Tokens. This includes actions
such as Register, Login, View profile and Log Out.

---
---

## Introduction

A simple frontend website a setup for ease of understanding using EJS. It is 'Web 51'. A user has to first register and then when the User enters correct LOGIN Credentials, a verification link (with JWT token embedded) is sent to the User. When User clicks on the Link, then he is authenticated and can access the personal/secret content.

Another variant of the Project focusses solely on the Authentication process rather than UI. When the data is sent to the "register" route, the User is registered into the Database. Afterwards, when user Logins with correct Credentials, a JWT token is generated. If the User tries to access the profile route without the token, access is denied. With JWT token passed in the Authorization Header, the User now can access the profile content. This can be tested using API testing tool such as POSTMAN.

### What is JWT?

> A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature

### What is Passport and Passport-jwt?

> Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. Passport.js has more than 500 authentication strategies for authentication and security. Passport-jwt is one of those strategies. It is a Middleware that enables the user to direct at the Protected Routes after authenticating with a JWT token. If the User possesses the JWT token, the login activity is successful, else not.

### What is Mongoose?

> Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks. It is a powerful tool to handle database efficiently.

### What is Nodemailer?

> Nodemailer is a module for Node.js applications to ease the email sending processes. It is secure, Unicode support, multiple receipents capabilities etc. makes it more robust.

---
---

## FEATURES:

* Simple yet beautiful UI design 
* Database enabled
* Register new User
* Password Encyrption
* Login Activity Authentication
* Email Verification Link to the user
* Access to the route only after authentication of token 
* Authenticated only after JWT token is verified
* Profile Page
* Logout 
---
---

## Technologies used:

* Runtime Environment: Node.js  
* Back-end Framework: Express 
* Database: MongoDB
* Database ODM : Mongoose
* Middleware: Passport.js
* Authentication Strategy : Passport-jwt
* Frontend : HTML, CSS, EJS
* Password Encyrption : BcryptJS
* Mailing Service: Nodemailer
* Database GUI : Robo3T
* API testing Tool: POSTMAN

---
---

## Demonstration:


### (A) *Authentication Service (tested using POSTMAN)*  

#### 1. Signup Route
---
![Image-1](https://github.com/sohamsshah/JWTization/blob/master/Images/Postman_Images/signup.PNG "Signup Route")

#### 2. Login Route

---

![Image-2](https://github.com/sohamsshah/JWTization/blob/master/Images/Postman_Images/login.PNG "Login Route")

#### 3. Generated Token      

---

![Image-3](https://github.com/sohamsshah/JWTization/blob/master/Images/Postman_Images/generated_token.PNG "Generated Token")

#### 4. Authenticated Access

---

![Image-4](https://github.com/sohamsshah/JWTization/blob/master/Images/Postman_Images/authenticated_access.PNG "authenticated_access")

---
---

### (B) *Web 51 Website*  

#### 1. Home Page
---
![Image-1](https://github.com/sohamsshah/JWTization/blob/master/Images/UI_images/home.PNG "Home Page")

#### 2. Register Page

---

![Image-2](https://github.com/sohamsshah/JWTization/blob/master/Images/UI_images/register_page.PNG "Register Page")

#### 3. Login Page      

---

![Image-3](https://github.com/sohamsshah/JWTization/blob/master/Images/UI_images/login_page.PNG "Login Page")

#### 4. Verification Link on Email

---

![Image-4](https://github.com/sohamsshah/JWTization/blob/master/Images/UI_images/email_ss.PNG "Email SS")

#### 5. Profile Page

---

![Image-5](https://github.com/sohamsshah/JWTization/blob/master/Images/UI_images/profile_page.PNG "Profile Page")

#### 6. Email sent Page

---

![Image-4](https://github.com/sohamsshah/JWTization/blob/master/Images/UI_images/email_verification_success_page.PNG "Email Sent Page")

#### 7. Failure Page

---

![Image-4](https://github.com/sohamsshah/JWTization/blob/master/Images/UI_images/failure_page.PNG  "Failure Page")
















