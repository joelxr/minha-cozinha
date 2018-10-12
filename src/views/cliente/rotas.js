const ClienteConsulta = () => import('./ClienteConsulta')
const ClienteCadastro = () => import('./ClienteCadastro')

export default [
  {
    path: '/cliente/cadastro',
    name: 'ClienteCadastro',
    component: ClienteCadastro,
    meta: {
      menu: {
        agregador: 'Cliente',
        nome: 'Cadastrar'
      }
    }
  },
  {
    path: '/cliente',
    name: 'ClienteConsulta',
    component: ClienteConsulta,
    meta: {
      menu: {
        agregador: 'Cliente',
        nome: 'Consultar'
      }
    }
  }
]
