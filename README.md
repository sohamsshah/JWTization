# JWTization
JWTization is a web service developed that enables the authorization of the Users by making use of JWT Tokens. This includes actions
such as Register, Login, View profile and Log Out.

---

## Introduction to the Project

A simple frontend website a setup for ease of understanding using EJS. It is 'Web 51'. A user has to first register and then when the User enters
correct LOGIN Credentials, a verification link (with JWT token embedded) is sent to the User. When User clicks on the Link, then he is authenticated and can access the personal/secret content.

Another variant of the Project focusses solely on the Authentication process rather than UI. When the data is sent to the "register" route, the User 
is registered into the Database. Afterwards, when user Logins with correct Credentials, a JWT token is generated. If the User tries to access 
the profile route without the token, access is denied. With JWT token passed in the Authorization Header, the User now can access the profile content.

### What is JWT?
A JSON web token(JWT) is JSON Object which is used to securely transfer information over the web(between two parties). It can be used for an authentication system and can also be used for information exchange.The token is mainly composed of header, payload, signature

### Passport-jwt

It is a Passport.js strategy for authenticating with a JWT token. It is a Middleware that enables the user to direct at the Protected Routes.
If the User possesses the JWT token, the login activity is successful.



