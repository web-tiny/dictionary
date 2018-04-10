import home from './components/home.vue';
import fllow from './components/fllow.vue';
import column from './components/column.vue';
import user from './components/user.vue';
import article from './components/article.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';
//import error from './components/error.vue';
const routes=[
  {path:'/home',component:home},
  {path:'/fllow',component:fllow},
  {path:'/column',component:column},
  {path:'/user',component:user},
  {path:'/article/:aid',component:article},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  // {path:'*',component:error},
  {path:'/',redirect:'/home'}
];
export default routes;