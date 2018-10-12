const ProdutoConsulta = () => import('./ProdutoConsulta')
const ProdutoCadastro = () => import('./ProdutoCadastro')

export default [
  {
    path: '/produto/cadastro',
    name: 'ProdutoCadastro',
    component: ProdutoCadastro,
    meta: {
      menu: {
        agregador: 'Produto',
        nome: 'Cadastrar'
      }
    }
  },
  {
    path: '/produto',
    name: 'ProdutoConsulta',
    component: ProdutoConsulta,
    meta: {
      menu: {
        agregador: 'Produto',
        nome: 'Consultar'
      }
    }
  }
]
