import axios from 'axios';

export default axios.create({
  
   //baseURL:"https://057b-2603-8080-c900-3f49-d9f2-1848-91a-cb8e.ngrok-free.app ",
   baseURL:"http://localhost:8080",
    
    headers: {"ngrok-skip-browser-warning": "true"}
});