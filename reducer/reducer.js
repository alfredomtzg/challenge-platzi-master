const user = {
  "_id": "5f73591e51d3390017a1a693",
  "username": "Carlos",
  "roles": [
      {
          "_id": "5f653764b88fc70017211ed3",
          "name": "user",
          "__v": 0
      },
      {
          "_id": "5f653764b88fc70017211ed4",
          "name": "admin",
          "__v": 0
      }
  ],
  "message": "Auth Succesful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNzM1OTFlNTFkMzM5MDAxN2ExYTY5MyIsImlhdCI6MTYwMTg1NTk2MywiZXhwIjoxNjAxOTQyMzYzfQ.GXRoGJwF8cY2jhmdgin0P_SHBcOdrFYMKQGU3wFtvho"
}


console.log(user.roles.map(role => role.name == "admin"));