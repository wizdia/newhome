import App from "../App";

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

