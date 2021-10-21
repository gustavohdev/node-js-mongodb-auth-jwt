# API ENDPOINTS

-   POST /api/auth/signup signup new account

```json
{
    "username": "gustavo",
    "email": "gus@gus.com",
    "password": "123456",
    "roles": ["user", "moderator"]
}
```

-   POST /api/auth/signin login an account

```json
{
    "username": "gustavo",
    "password": "123456"
}
```

-   GET /api/test/all retrieve public content
-   GET /api/test/user access User’s content
-   GET /api/test/mod access Moderator’s content
-   GET /api/test/admin access Admin’s content

# TOKEN

-   For get user, mod or admin content, use x-access-token in the header, you can get that after login, copying the token received from the server
