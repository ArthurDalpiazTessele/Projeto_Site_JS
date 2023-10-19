// schemas/home.js
//schemaTypes.js

// Exportar o objeto que representa a página FAQ
export default({
    // Perguntas
    name: 'perguntas',
    type: 'document',
    title: 'Perguntas FAQ',
    fields:[
        {
            name: 'Pergunta',
            type: 'string',
            title: 'Pergunta'
          },
          {
            name: "Resposta",
            type: "string",
            title: "Resposta"
          }
    ]
})