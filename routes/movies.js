import express from "express";
import{ getAllMovies, getMovieById, deleteMovieById, addMovies} from "../helper.js"

const router = express.Router();
router.get("/",async (request,response)=>{
    if(request.query.rating)
    {
      request.query.rating =  +request.query.rating
    }


     console.log(request.query)
     const movie = await getAllMovies(request);
    response.send(movie);
    
  });




// task - POST method - to insert data to db
router.post("/",  async (request,response)=>{
const newMovies = request.body;
console.log(newMovies) 
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
const movie = await deleteMovieById(id, response);
});

export const moviesRouter = router;