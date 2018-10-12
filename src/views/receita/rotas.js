const ReceitaConsulta = () => import('./ReceitaConsulta')
const ReceitaCadastro = () => import('./ReceitaCadastro')

export default [
  {
    path: '/receita/cadastro',
    name: 'ReceitaCadastro',
    component: ReceitaCadastro,
    meta: {
      menu: {
        agregador: 'Receita',
        nome: 'Cadastrar'
      }
    }
  },
  {
    path: '/receita',
    name: 'ReceitaConsulta',
    component: ReceitaConsulta,
    meta: {
      menu: {
        agregador: 'Receita',
        nome: 'Consultar'
      }
    }
  }
]
