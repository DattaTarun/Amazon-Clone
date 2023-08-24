
const functions=require("firebase-functions");
const express=require("express");
const cors=require("cors");

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const stripe=require("stripe")("sk_test_51NTiVHSBfN5I5yfEtBUGiXYa6e6oHQGCMxnIaiG6ndMvDikZE2MLpb0WINdq8qzarzhkhGS386XO2tztgR4IKcJT008BDG9hal");


const app=express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response)=>{
  const total = request.query.total;
  console.log("Payment received for this>", total);
  const paymentIntent=await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api=functions.https.onRequest(app);
// http://127.0.0.1:5001/clone-975c2/us-central1/api
