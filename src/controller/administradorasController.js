



// const addAdmin = (request, response) => {
//     const senhaCriptografada = bcrypt.hashSync(request.body.senha)
//     request.body.senha = senhaCriptografada
//     request.body.grupo = 'admin'
//     const novoTreinador = new treinadoresModel(request.body)
  
//     novoTreinador.save((error) => {
//       if (error) {
//         return response.status(500).send(error)
//       }
  
//       return response.status(201).send(novoTreinador)
//     })
//   }
