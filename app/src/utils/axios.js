import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 1000
  });
  instance.interceptors.request.use(function (config) {
    console.log(config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
  export const login=(name,psw)=>{
      console.log(name)
       return new Promise((resolve,reject)=>{
           instance.post('/user/login',{name:name,psw:psw}).then((res)=>{
                resolve(res.data)
           })
       })
  }

  export default instance
