import Column from './Column.js'

export default class Kanban {
  constructor(root) {
    this.root = root

    Kanban.columns().forEach(column => {
      const columnView = new Column(column.id, column.title)

      this.root.appendChild(columnView.elements.root)
    })
  }

  static columns() {
    return [
      {
        id: 1,
        title: 'Nome'
      },
      {
        id: 2,
        title: 'Etapa'
      },
      {
        id: 3,
        title: 'Prazo'
      },
      {
        id: 4,
        title: 'Status'
      },
      {
        id: 5,
        title: 'Completado'
      },
      {
        id: 6,
        title: 'Finalização'
      }
    ]
  }
}
