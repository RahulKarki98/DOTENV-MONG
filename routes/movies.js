import express from "express";
import{ getAllMovies, getMovieById, deleteMovieById, addMovies, updateMovieById} from "../helper.js"
import { auth } from "../middleware/auth.js"

const router = express.Router();

//get all movies
router.get("/",async (request,response)=>{
    if(request.query.rating)
    {
      request.query.rating =  +request.query.rating
    }


     console.log(request.query)
     const movie = await getAllMovies(request);
    response.send(movie);
    
  });


//inbuild middleware - say data is in JSON

//post method  - to insert data to db
router.post("/", async (request, response) =>  {  
  const newMovies = request.body;
  console.log(newMovies);
  //db.movies.insertMany(movies) 
 const result = await addMovies(newMovies);
 response.send(result);
  });




//Task 2 - to get movies id
//        - to move object outside of array



//task - to send only movie with the matched id
router.get("/:id", async (request,response)=>{
const {id}= request.params;
console.log(id)
const movie = await getMovieById(id)

console.log(movie)
movie
? response.send(movie)
: response.status(404).send({ message:"No movie found"})
});


// To delete id 
router.delete("/:id", async (request,response)=>{
const {id}= request.params;
console.log(id)
const movie = await deleteMovieById(id);
response.send(movie)
});


// Update Movie id
router.put("/:id", async (request,response)=>{
    const {id}= request.params;
    const updateMovie = request.body;
    const result = await updateMovieById(updateMovie, id);
    response.send(result)
    });

export const moviesRouter = router;