import Index from "../pages/Index";
import Router from 'vue-router'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
});

