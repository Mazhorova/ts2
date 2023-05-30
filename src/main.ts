// Импорт делают чтобы не прописывать в head link js
import './style.css'
import './style.scss'
// import 'lite-youtube-embed/src/lite-yt-embed.css'
// import 'lite-youtube-embed/src/lite-yt-embed.js'
const user = {
  firsname: "Denis",
  age: 30,
  isAdmin: true,
  head: 3,
  email: 'testimoost.com',
  'user-address': {
    city:"Pekin"

  }
}
let value;
value = user.firsname;
value = user['head'];
value = user['user-address'];
value = user['user-address'].city;
user.firsname = 'Den'
value = user.firsname;
user['user-address'].city = 'Turin'
console.log(value);
 console.log(user);
