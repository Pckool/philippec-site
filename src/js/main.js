const NotFound = { template: '<p>Page not found</p>' };
const Home = { template: '<p>about page</p>' }

const About = { template: '<p>about page</p>' }
const routes = {
  '/': Home,
  '/about': About
}

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent () {
            return routes[this.currentRoute] || NotFound
        }
    },
    render (h) { return h(this.ViewComponent) }
});


Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            template: '<Home/>',
            component: Home
        }
    ]
});
