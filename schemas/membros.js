// schemas/home.js
//schemaTypes.js

// Exportar o objeto que representa a página Comissão Avaliativa
export default {
    // Membros
    name: 'membros',
    type: 'document',
    title: 'Membros',
    fields: [
          {
            name: 'nome',
            type: 'string',
            title: 'Nome'
          },
          {
            name: 'cargo',
            type: 'string',
            title: 'Cargo'
          },
          {
            name: 'bio',
            type: 'text',
            title: 'Biografia'
          },
          {
            name: 'imagem',
            type: 'image',
            title: 'Imagem'
          },
        ]
    }