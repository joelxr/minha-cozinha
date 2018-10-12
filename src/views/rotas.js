const Home = () => import('./Home')
const Login = () => import('./Login')
const Sobre = () => import('./Sobre')
const _401 = () => import('./401')
const _404 = () => import('./404')

export default [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      menu: {
        agregador: '',
        nome: 'Home'
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre,
    meta: {
      menu: {
        agregador: '',
        nome: 'Sobre'
      }
    }
  },
  {
    path: '/401',
    name: '401',
    component: _401
  },
  {
    path: '/404',
    name: '404',
    component: _404
  }
]
