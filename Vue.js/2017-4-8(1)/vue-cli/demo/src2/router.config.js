//导入组件
import home from './components/home.vue';
import news from './components/news.vue';
import user from './components/user.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';
import detail from './components/detail.vue';
//配置路由
const routes=[
  {path:'/home',component:home},
  {
    path:'/news',
    component:news,
    children:[
      {path:'detail/:aid',component:detail},
    ]
  },
  {
    path:'/user',
    component:user,
    children:[
      {path:'login',component:login},
      {path:'reg',component:reg},
    ]
  },
  {path:'/',redirect:'/home'}
];

export default {
  routes
}