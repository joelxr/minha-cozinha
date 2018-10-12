const ProfissionalConsulta = () => import('./ProfissionalConsulta')
const ProfissionalCadastro = () => import('./ProfissionalCadastro')

export default [
  {
    path: '/profissional/cadastro',
    name: 'ProfissionalCadastro',
    component: ProfissionalCadastro,
    meta: {
      menu: {
        agregador: 'Profissional',
        nome: 'Cadastrar'
      }
    }

  },
  {
    path: '/profissional',
    name: 'ProfissionalConsulta',
    component: ProfissionalConsulta,
    meta: {
      menu: {
        agregador: 'Profissional',
        nome: 'Consultar'
      }
    }
  }
]
