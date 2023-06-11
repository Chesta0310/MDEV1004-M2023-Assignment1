import express from "express";
import { DisplayMovieList } from "../Controllers/movie";
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/movie-list", function (req, res, next) {
    DisplayMovieList(req, res, next);
});

export default router;
