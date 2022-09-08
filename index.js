//const express = require('express'); 
//3rd party package

import express from "express";
import { MongoClient } from "mongodb";
import  dotenv from 'dotenv' ;
import { getAllMovies, addMovies, getMovieById, deleteMovieById } from "./helper.js";
import {moviesRouter} from './routes/movies.js'

dotenv.config()
console.log(process.env.MONGO_URL)

const app = express();
const PORT = process.env.PORT;

  
const MONGO_URL = process.env.MONGO_URL


// const MONGO_URL = ""


async function createConnection() {
  const client = new MongoClient(MONGO_URL)
  await client.connect();
  console.log(" Mongo is connected");
  return client;

}


export const client = await createConnection();

app.use(express.json());

// Rest Api Endpoint

app.get("/",(request,response)=>{
    response.send("hello everyone")
});


//Task 1  to get movies

// app.get("/movies",(request,response)=>{
//     response.send(movies)
// });  



//Task - 3  get movie by query

// allthe movies
// only english movies
// filter by language & rating
// only rating with 8 movies need to display


// Task - get all movie : must come from th mongodb
//app.get("/movies",async (request,response)=>{
      // const {language,rating}= request.query;
      // console.log(request.query, language);
       //let filteredMovies  =   movies;
       
      //  if(language) {
      //   filteredMovies =filteredMovies.filter((mv) => mv.language === language)
      //  }

          
      //  if(rating) {
      //   filteredMovies =filteredMovies.filter((mv) => mv.rating == rating)
      //  }

      


  

  //specify movie router

  app.use('/movies', moviesRouter)




//create a server
app.listen(PORT ,() => console.log("SERver satred on port", PORT));


