const jwt = require('jsonwebtoken');
const axios=require('axios');


(async()=>{
    const privateKey= process.env.privateKey;
    let body={
            "uid": "vPO9UmX6wfCLbqHakZYICCUev",
            "email": "12345ttt@gmail.com",
            "deviceId": "string",
    }
    var token = jwt.sign(body, privateKey, { algorithm: 'HS256'});
    console.log("generated Token: ",token);
    console.log(jwt.decode(token));
})();