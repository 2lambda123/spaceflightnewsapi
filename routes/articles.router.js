const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/articles.controller');
const jwtVerify = require('../helpers/jwtVerify');

/**
 * @api {get} /v1/articles Get articles
 * @apiName GetArticles
 * @apiGroup Articles
 * @apiVersion 1.0.0
 *
 * @apiParam {String} title Title of the article.
 * @apiParam {String} news_site News site that published the article.
 * @apiParam {String} news_site_long Unformatted name of the news site that published the article.
 * @apiParam {String} url URL of the article.
 * @apiParam {String} featured_image Featured image of the article.
 * @apiParam {Number} id ID from the news site.
 * @apiParam {Number} _id ID generated by SNAPI.
 * @apiParam {Number} date_published Date when news site added the article
 * @apiParam {Number} date_added Date when article was added to SNAPI
 * @apiParam {Array} categories Array with categories.
 * @apiParam {Array} tags Array with tags.
 *
 * @apiSuccess {String} title Title of the article.
 * @apiSuccess {String} news_site News site that published the article.
 * @apiSuccess {String} news_site_long Unformatted name of the news site that published the article.
 * @apiSuccess {String} url URL of the article.
 * @apiSuccess {String} featured_image Featured image of the article.
 * @apiSuccess {Number} id ID from the news site.
 * @apiSuccess {Number} _id ID generated by SNAPI.
 * @apiSuccess {Number} date_published Date when news site added the article
 * @apiSuccess {Number} date_added Date when article was added to SNAPI
 * @apiSuccess {Array} categories Array with categories.
 * @apiSuccess {Array} tags Array with tags.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "date_published": 1545285660,
 *       "date_added": 1546254962,
 *       "tags": [
 *           "nasa",
 *           "astronaut",
 *           "crewmates",
 *           "return",
 *           "to",
 *           "earth",
 *           "197-day",
 *           "mission",
 *           "space"
 *       ],
 *       "categories": [],
 *       "_id": "5c29fa722568aa81ffd68a8a",
 *       "news_site": "nasa",
 *       "news_site_long": "NASA",
 *       "title": "NASA Astronaut, Crewmates Return to Earth After 197-Day Mission in Space",
 *       "url": "https://www.nasa.gov/press-release/nasa-astronaut-crewmates-return-to-earth-after-197-day-mission-in-space",
 *       "id": "",
 *       "featured_image": "https://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/nhq2018122000042.jpg?itok=K6RZ_O_U"
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Uh-oh, something went wrong. Please try again!"
 *     }
 */
router.get('/', ArticleController.getArticles);

/**
 * @api {post} /v1/articles Post articles
 * @apiName PostArticles
 * @apiGroup Articles
 * @apiVersion 1.0.0
 * @apiHeader {String} Authorization A bearer token
 * @apiPermission admin
 *
 * @apiParam {String} title Title of the article.
 * @apiParam {String} news_site News site that published the article.
 * @apiParam {String} news_site_long Unformatted name of the news site that published the article.
 * @apiParam {String} url URL of the article.
 * @apiParam {String} featured_image Featured image of the article.
 * @apiParam {Number} id ID from the news site.
 * @apiParam {Number} _id ID generated by SNAPI.
 * @apiParam {Number} date_published Date when news site added the article
 * @apiParam {Number} date_added Date when article was added to SNAPI
 * @apiParam {Array} categories Array with categories.
 * @apiParam {Array} tags Array with tags.
 *
 * @apiSuccess {String} title Title of the article.
 * @apiSuccess {String} news_site News site that published the article.
 * @apiSuccess {String} news_site_long Unformatted name of the news site that published the article.
 * @apiSuccess {String} url URL of the article.
 * @apiSuccess {String} featured_image Featured image of the article.
 * @apiSuccess {Number} id ID from the news site.
 * @apiSuccess {Number} _id ID generated by SNAPI.
 * @apiSuccess {Number} date_published Date when news site added the article
 * @apiSuccess {Number} date_added Date when article was added to SNAPI
 * @apiSuccess {Array} categories Array with categories.
 * @apiSuccess {Array} tags Array with tags.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "date_published": 1545285660,
 *       "date_added": 1546254962,
 *       "tags": [
 *           "nasa",
 *           "astronaut",
 *           "crewmates",
 *           "return",
 *           "to",
 *           "earth",
 *           "197-day",
 *           "mission",
 *           "space"
 *       ],
 *       "categories": [],
 *       "_id": "5c29fa722568aa81ffd68a8a",
 *       "news_site": "nasa",
 *       "news_site_long": "NASA",
 *       "title": "NASA Astronaut, Crewmates Return to Earth After 197-Day Mission in Space",
 *       "url": "https://www.nasa.gov/press-release/nasa-astronaut-crewmates-return-to-earth-after-197-day-mission-in-space",
 *       "id": "",
 *       "featured_image": "https://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/nhq2018122000042.jpg?itok=K6RZ_O_U"
 *     }
 *
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "message": "Uh-oh, something went wrong. Please try again!"
 *     }
 */
router.post('/', jwtVerify, ArticleController.postArticles);

module.exports = router;
