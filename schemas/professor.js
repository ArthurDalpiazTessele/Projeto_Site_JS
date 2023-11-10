// schemas/comissao-avaliadora.js
//schemaTypes.js

// Exportar o objeto que representa a página comissão avaliadora
export default {
  name: 'professor',
  type: 'document',
  title: 'Professor',
  fields: [
        {
          name: 'nome',
          type: 'string',
          title: 'Nome'
        },
        {
          name: 'Cargo',
          type: 'string',
          title: 'Cargo'
        },
        {
          name: 'Bio',
          type: 'text',
          title: 'Biografia Professor'
        },
        {
          name: 'Imagem',
          type: 'image',
          title: 'Imagem'
        },
    ] 
  }