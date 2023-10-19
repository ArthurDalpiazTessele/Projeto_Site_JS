// schemas/home.js
//schemaTypes.js

// Exportar o objeto que representa a página inicial
export default({
    // QrCode
    name: 'qrCode',
    type: 'document',
    title: 'qrCode',
    fields:[
      {
        name:'qrCode',
        type: "image",
        title: "QrCode"
      }
    ]
})