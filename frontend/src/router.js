import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Authentication from "./views/Authentication.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import VueSession from 'vue-session'
Vue.use(VueSession)
Vue.use(Router);


/* Function for authentication */
const ifNotAuthenticated = (to, from, next) => {
  if (!Vue.prototype.$session.exists()) {
    next()
    return
  }
  next('/profile')
}

const ifAuthenticated = (to, from, next) => {
  if (Vue.prototype.$session.exists()) {
    next()
    return
  }
  next('/authentication')
}
/* End Of authentication function */

export default new Router({
  linkExactActiveClass: "active",
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      },
      beforeEnter: ifAuthenticated
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/authentication",
      name: "authentication",
      components: {
        header: AppHeader,
        default: Authentication,
        footer: AppFooter
      },
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      },
      beforeEnter: ifAuthenticated
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
