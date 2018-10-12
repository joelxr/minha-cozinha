const EquipeConsulta = () => import('./EquipeConsulta')
const EquipeCadastro = () => import('./EquipeCadastro')

export default [
  {
    path: '/equipe/cadastro',
    name: 'EquipeCadastro',
    component: EquipeCadastro,
    meta: {
      menu: {
        agregador: 'Equipe',
        nome: 'Cadastrar'
      }
    }
  },
  {
    path: '/equipe',
    name: 'EquipeConsulta',
    component: EquipeConsulta,
    meta: {
      menu: {
        agregador: 'Equipe',
        nome: 'Consultar'
      }
    }
  }
]
