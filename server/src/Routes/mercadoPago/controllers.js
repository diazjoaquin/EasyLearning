// const mercadopago = require("mercadopago");

// const { MP_TOKEN } = process.env;

// mercadopago.configure({
//   access_token: MP_TOKEN,
// });

// const postMercadoPago= (req,res) =>{
// const product = JSON.parse(req.body.prod)
// console.log("-----", product[0].name);
// let preference = {
//     items: [
//       {
//         title: product[0].name,
//         currency_id: "USD",
//         unit_price: product[0].price,
//         quantity: 1,
//       },
//     ],
//   };

//   mercadopago.preferences
//     .create(preference)
//     .then(function (response) {
//         globalurl = response.body.init_point;
//         console.log("ENTRO");
//         res.send(globalurl)
//       //console.log(response);// En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
//     })
//     .catch(function (error) {
//       console.log(error);
//     });

// }

// module.exports = { postMercadoPago };
