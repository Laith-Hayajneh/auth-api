# auth-api

## LAB - 08

### Deployment Test

**Author:Laith_Hayajneh**

- [tests report](https://github.com/Laith-Hayajneh/basic-auth/actions).
- [back-end](https://tariq-auth-api.herokuapp.com/).
- [pull request](https://github.com/Laith-Hayajneh/basic-auth/pull/3).
**Setup**

`.env` **requirements**

- `PORT` - Port Number

- `DATABASE_URL` = Postgres DB

- `SECRET` = JWT SECRET

**Running the app**

- `npm start`

- Endpoint: `/signup`

> `{"username": "laith","password": "123","role": "admin"}`

- Returns Object

        {
  "user": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhaXRoIiwiaWF0IjoxNjMwNzg4MjExfQ.CL22Qh2UopDury2fTl2ByIf1fprYtz0zDjE4g7k-GlM",
    "capabilities": [
      "read",
      "create",
      "update",
      "delete"
    ],
    "id": 1,
    "username": "laith",
    "password": "$2b$10$J/VHzH/4A//s6XEOv1YYw.8g1hBOXtIxaq/4Pthf2EIlLAkJtAW0m",
    "role": "admin",
    "updatedAt": "2021-09-04T20:43:30.689Z",
    "createdAt": "2021-09-04T20:43:30.689Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhaXRoIiwiaWF0IjoxNjMwNzg4MjExfQ.CL22Qh2UopDury2fTl2ByIf1fprYtz0zDjE4g7k-GlM"
}

  }

- Endpoint: `/signin`

> - Username `laith`
> - Password `123`

- Returns Object

       {
  "user": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhaXRoIiwiaWF0IjoxNjMwNzg4NDc3fQ.mpDrjjIujKvjZKZYRZ7XQm-phlvH7HGmU9hZIJ6xE3E",
    "capabilities": [
      "read",
      "create",
      "update",
      "delete"
    ],
    "id": 1,
    "username": "laith",
    "password": "$2b$10$J/VHzH/4A//s6XEOv1YYw.8g1hBOXtIxaq/4Pthf2EIlLAkJtAW0m",
    "role": "admin",
    "createdAt": "2021-09-04T20:43:30.689Z",
    "updatedAt": "2021-09-04T20:43:30.689Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhaXRoIiwiaWF0IjoxNjMwNzg4NDc3fQ.mpDrjjIujKvjZKZYRZ7XQm-phlvH7HGmU9hZIJ6xE3E"
}

  }

- Endpoint: `/users`

> - Token `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhaXRoIiwiaWF0IjoxNjMwNzg4NDc3fQ.mpDrjjIujKvjZKZYRZ7XQm-phlvH7HGmU9hZIJ6xE3E`

- Returns Object

  [
  
  "laith"
  "test"
  ]

> - Token `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhaXRoIiwiaWF0IjoxNjMwNzg4NDc3fQ.mpDrjjIujKvjZKZYRZ7XQm-phlvH7HGmU9hZIJ6xE3E`

- Returns Object

{
"status": 500,
"message": "Access Denied"
}

- Endpoint: `/secret`

> - Token `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxhaXRoIiwiaWF0IjoxNjMwNzg4NDc3fQ.mpDrjjIujKvjZKZYRZ7XQm-phlvH7HGmU9hZIJ6xE3E`

- Returns Object

Welcome to the secret area!

- Endpoint: `/api/v1/food`

- Returns Object

        [
        {
        "id": 2,
         "name": "apple",
         "calories": 61,
         "type": "fruit",
         "updatedAt": "2021-09-04T20:54:47.489Z",
        "createdAt": "2021-09-04T20:54:47.489Z"
        },
        {
        
        ]

- Endpoint: `/api/v2/clothes`

> - Token `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IklicmFoaW0iLCJpYXQiOjE2Mjk4Mjg5ODd9.EOfSMKwQzROq-e4_-s2r4hXK0OCoedU2EnXmpVGb_E4`

- Returns Object

        [
        {
        "id": 1,
         "name": "Skirts",
        "color": "black",
         "size": "M",
         "updatedAt": "2021-09-04T20:56:17.248Z",
         "createdAt": "2021-09-04T20:56:17.248Z"
}
        ]

**Tests**

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`

**UML**

![UML](LAB8.png)
