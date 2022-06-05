db.produtos.find({ $or: [{ vendidos: { $eq: 85 } },
  { curtidas: { $eq: 36 } }] }, { nome: true, curtidas: true, vendidos: true, _id: false });