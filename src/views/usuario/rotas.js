const UsuarioConsulta = () => import('./UsuarioConsulta')
const UsuarioCadastro = () => import('./UsuarioCadastro')

export default [
  {
    path: '/usuario/cadastro',
    name: 'UsuarioCadastro',
    component: UsuarioCadastro,
    meta: {
      menu: {
        agregador: 'Usuario',
        nome: 'Cadastrar'
      }
    }
  },
  {
    path: '/usuario',
    name: 'UsuarioConsulta',
    component: UsuarioConsulta,
    meta: {
      menu: {
        agregador: 'Usuario',
        nome: 'Consultar'
      }
    }
  }
]
