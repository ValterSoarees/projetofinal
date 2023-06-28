// import axios from "axios";

// export class Conexaoback {
//   constructor() {}

//   async registerUsers(data) {
//     console.log("registerUsers: " + JSON.stringify(data));
//     const result = await axios
//       .post(`${"http://localhost:3003"}/app/cadastro`, {
//         data: data,
//       })
//       .then((res) => {
//         console.log("Cadastrado:" + res);
//       })
//       .catch((error) => {
//         console.log("error:" + JSON.stringify(error));
//       });

//     console.log("resultado:" + JSON.stringify(result));
//     return result;
//   }

//   async loginUser({ data }) {

//     const resultLogin = await axios
//       .get(`${baseUrl}/api/login`, {
//         headers: {
//           email: data.email,
//           password: data.senha,
//         },
//       })
//       .then((res) => res)
//       .catch((error) => {
//         return {
//           msg: "Usuario não encontrado",
//         };
//       });

//     return resultLogin;
//   }
// }

// // router.post('/cadastro', async (req, res) => {
// //     const { nome, telefone, email, senha } = req.body;
  
// //     try {
// //       const cadastro = await CadastroModel.create({
// //         nome,
// //         telefone,
// //         email,
// //         password: senha,
// //       });
  
// //       if (cadastro) {
// //         res.json({ success: true });
// //       } else {
// //         res.json({ success: false });
// //       }
// //     } catch (error) {
// //       console.error('Erro ao cadastrar o usuário:', error);
// //       res.status(500).json({ error: 'Ocorreu um erro ao cadastrar o usuário.' });
// //     }
// //   });
  