const dados = {
  prontuarios: [
    {
      id: 'PBCG0001',
      mae: 'Maria da Silva',
      filhos: [
        {
          nome: 'Sandro Cavanlcanti',
          idade: '6 meses',
          ultimoAcomp: '15/01/2017'
        }
      ]
    },
    {
      id: 'PBCG0002',
      mae: 'Neide Oliveira',
      filhos: [
        {
          nome: 'Sandro Cavanlcanti',
          idade: '6 meses',
          ultimoAcomp: '15/01/2017'
        },
        {
          nome: 'Maria Cavanlcanti',
          idade: '1 ano e 2 meses',
          ultimoAcomp: '15/01/2017'
        }
      ]
    },
    {
      id: 'PBCG0003',
      mae: 'Sílvia Braz',
      filhos: [
        {
          nome: 'Maria Cavanlcanti',
          idade: '1 ano e 2 meses',
          ultimoAcomp: '15/01/2017'
        }
      ]
    },
    {
      id: 'PBJP0001',
      mae: 'Luíza Santos',
      filhos: [
        {
          nome: 'Maria Cavanlcanti',
          idade: '1 ano e 2 meses',
          ultimoAcomp: '15/01/2017'
        }
      ]
    },
    {
      id: 'PBCZ0001',
      mae: 'Helena Barbosa',
      filhos: [
        {
          nome: 'Sandro Cavanlcanti',
          idade: '6 meses',
          ultimoAcomp: '15/01/2017'
        }
      ]
    },
    {
      id: 'PBCG0004',
      mae: 'Maria do Patrocínio',
      filhos: [
        {
          nome: 'Sandro Cavanlcanti',
          idade: '6 meses',
          ultimoAcomp: '15/01/2017'
        }
      ]
    },
    {
      id: 'PBCG0005',
      mae: 'Ofélia Cavalcanti',
      filhos: [
        {
          nome: 'Sandro Cavanlcanti',
          idade: '6 meses',
          ultimoAcomp: '15/01/2017'
        }
      ]
    },
    {
      id: 'PBCG0006',
      mae: 'Marina Aparecida',
      filhos: [
        {
          nome: 'Sandro Cavanlcanti',
          idade: '6 meses',
          ultimoAcomp: '15/01/2017'
        },
        {
          nome: 'Maria Cavanlcanti',
          idade: '1 ano e 2 meses',
          ultimoAcomp: '15/01/2017'
        }
      ]
    },
    {
      id: 'PBCG0007',
      mae: 'Ana Gouveia',
      filhos: [
        {
          nome: 'Sandro Cavanlcanti',
          idade: '6 meses',
          ultimoAcomp: '15/01/2017'
        },
        {
          nome: 'Maria Cavanlcanti',
          idade: '1 ano e 2 meses',
          ultimoAcomp: '15/01/2017'
        }
      ]
    },
    {
      id: 'PBCG0008',
      mae: 'Emanuela da Silva',
      filhos: [
        {
          nome: 'Sandro Cavanlcanti',
          idade: '6 meses',
          ultimoAcomp: '15/01/2017'
        }
      ]
    }
  ]
};

class BancoDeDados {
  constructor() {
    this.dados = dados;
  }

  findProntuarioById(id) {
    for(var i = 0; i < this.dados.prontuarios.length; i++) {
      var p = this.dados.prontuarios[i];
      if (p.id === id) {
        return p;
      }
    }

    return null;
  }
}

export default BancoDeDados;