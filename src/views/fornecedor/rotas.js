const FornecedorConsulta = () => import('./FornecedorConsulta')
const FornecedorCadastro = () => import('./FornecedorCadastro')

export default [
  {
    path: '/fornecedor/cadastro',
    name: 'FornecedorCadastro',
    component: FornecedorCadastro,
    meta: {
      menu: {
        agregador: 'Fornecedor',
        nome: 'Cadastrar'
      }
    }
  },
  {
    path: '/fornecedor',
    name: 'FornecedorConsulta',
    component: FornecedorConsulta,
    meta: {
      menu: {
        agregador: 'Fornecedor',
        nome: 'Consultar'
      }
    }
  }
]
