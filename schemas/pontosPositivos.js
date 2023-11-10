// schemas/home.js
//schemaTypes.js

// Exportar o objeto que representa a página inicial
export default({
    // Pontos Positivos
    name: 'pontosPositivos',
    type: 'document',
    title: 'pontosPositivos',
    fields:[
        {
            name: 'PontoPositivo1',
            type: 'string',
            title: 'Ponto Positivo 1'
          },
          {
            name: 'PontoPositivo2',
            type: 'string',
            title: 'Ponto Positivo 2'
          }
    ]
})