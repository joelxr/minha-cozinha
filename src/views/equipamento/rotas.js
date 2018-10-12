const EquipamentoConsulta = () => import('./EquipamentoConsulta')
const EquipamentoCadastro = () => import('./EquipamentoCadastro')

export default [
  {
    path: '/equipamento/cadastro',
    name: 'EquipamentoCadastro',
    component: EquipamentoCadastro,
    meta: {
      menu: {
        agregador: 'Equipamento',
        nome: 'Cadastrar'
      }
    }
  },
  {
    path: '/equipamento',
    name: 'EquipamentoConsulta',
    component: EquipamentoConsulta,
    meta: {
      menu: {
        agregador: 'Equipamento',
        nome: 'Consultar'
      }
    }
  }
]
