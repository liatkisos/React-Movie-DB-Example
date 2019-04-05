var express = require('express');
var router = express.Router();
var myDBHelper= require('../db/dbhelper');

/* GET all movies. */
router.get('/', async (req, res, next)=> {
let allmovies= await myDBHelper.pool.query(`SELECT * from allmovies`);
let allcategories= await myDBHelper.pool.query(`SELECT * from categories`);

var results= allmovies.map( function(movie) {
  let categoryObj = allcategories.find(function (cat) {
    return cat.id == movie.categoryid
  })

  return {
    id: movie.id, 
    name: movie.name, 
    year: movie.year, 
    img: movie.img,
    category: categoryObj.categoryname
  }
} )

res.json(results);
});

/* GET movie by id. */
router.get('/:id', async (req, res, next)=> {
  console.log(req.params.id)
  let results= await myDBHelper.pool.query(`SELECT * FROM allmovies WHERE id=${req.params.id}`);
  res.json(results[0]);
  });
  
  /* DELETE movie by id. */
router.post('/:id', async (req, res, next)=> {
  console.log(req.params.id)
  let results= await myDBHelper.pool.query(`DELETE FROM allmovies WHERE id=${req.params.id}`);
  res.json({msg:'movie deleted'});
  });
  

/* ADD movies. */
router.post('/', async (req, res, next)=> {
 // console.log('entered')
 console.log(req.body)
  let q= `
  INSERT INTO allmovies (name, year, img, categoryid)
  VALUES ('${req.body.name}', '${req.body.year}', '${req.body.img}', ${req.body.categoryid} );

  `;

let results= await myDBHelper.pool.query(q);
res.json(results);
});


//created at http://localhost:3000/api/movies/createdbandtables
// router.get('/createdbandtables', async (req, res) => {
//   await pool.query(`CREATE DATABASE movies`);
//   //create table1
//   await pool.query(`CREATE TABLE movies.categories (
// id int NOT NULL AUTO_INCREMENT,
// categoryname varchar(255) NOT NULL ,
// PRIMARY KEY (id) )`)
//   //create table2
//   await pool.query(`CREATE TABLE movies.allmovies (
//       id int NOT NULL AUTO_INCREMENT,
//       name varchar(255) ,
//       year varchar(255) ,
//       img varchar(1000) ,
//       categoryid int,
//       PRIMARY KEY (id) )`)
//   res.json({
//       msg: "Created db & tables"
//   })
// })

module.exports = router;

