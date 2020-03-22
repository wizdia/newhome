import App from "../App";
import Router from 'vue-router'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'UserIndex',
      component: App
    }
  ]
});

