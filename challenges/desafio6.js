db.produtos.find({ $and: [{ curtidas: { $lt: 100 } },
  { curtidas: { $gt: 10 } }] }, { nome: true, curtidas: true, _id: false });