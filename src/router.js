import Vue from 'vue'
import Router from 'vue-router'

const importAll = (r) => { return r.keys().map(r) }
const importRotas = importAll(require.context('.', true, /rotas.js$/))
const routes = importRotas.map(r => r.default).reduce((a, b) => a.concat(b))

const menu = routes
  .reduce(
    (a, b) => b.meta ? a.concat( {
      nome: b.meta.menu.nome,
      agregador: b.meta.menu.agregador,
      rota: b.path }) : a, [])
  .reduce(
    (a, b) => {
      const menuItem = a.find(a => a.nome === b.agregador)
      if (menuItem) {
        menuItem.submenu.push(b)
      } else {
        a.push({ nome: b.agregador, submenu: [b] })
      }
      return a
    }, [])

Vue.use(Router)
Vue.prototype.$menu = menu

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
