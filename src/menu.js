import Receita from './views/'

export default [
  {
    id: 1,
    descricao: 'Receita',
    rota: {
      path: '/receita',
      name: 'Receita',
      componet: Receita 
    }
  }
]
