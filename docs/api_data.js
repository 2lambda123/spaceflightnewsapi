define({ "api": [  {    "type": "get",    "url": "/v1/articles",    "title": "Get articles",    "name": "GetArticles",    "group": "Articles",    "version": "1.0.0",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Title of the article.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "news_site",            "description": "<p>News site that published the article.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "news_site_long",            "description": "<p>Unformatted name of the news site that published the article.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "url",            "description": "<p>URL of the article.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "featured_image",            "description": "<p>Featured image of the article.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID from the news site.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "_id",            "description": "<p>ID generated by SNAPI.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "date_published",            "description": "<p>Date when news site added the article</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "date_added",            "description": "<p>Date when article was added to SNAPI</p>"          },          {            "group": "Parameter",            "type": "Array",            "optional": false,            "field": "categories",            "description": "<p>Array with categories.</p>"          },          {            "group": "Parameter",            "type": "Array",            "optional": false,            "field": "tags",            "description": "<p>Array with tags.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Title of the article.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "news_site",            "description": "<p>News site that published the article.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "news_site_long",            "description": "<p>Unformatted name of the news site that published the article.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "url",            "description": "<p>URL of the article.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "featured_image",            "description": "<p>Featured image of the article.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID from the news site.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "_id",            "description": "<p>ID generated by SNAPI.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "date_published",            "description": "<p>Date when news site added the article</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "date_added",            "description": "<p>Date when article was added to SNAPI</p>"          },          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "categories",            "description": "<p>Array with categories.</p>"          },          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "tags",            "description": "<p>Array with tags.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"date_published\": 1545285660,\n  \"date_added\": 1546254962,\n  \"tags\": [\n      \"nasa\",\n      \"astronaut\",\n      \"crewmates\",\n      \"return\",\n      \"to\",\n      \"earth\",\n      \"197-day\",\n      \"mission\",\n      \"space\"\n  ],\n  \"categories\": [],\n  \"_id\": \"5c29fa722568aa81ffd68a8a\",\n  \"news_site\": \"nasa\",\n  \"news_site_long\": \"NASA\",\n  \"title\": \"NASA Astronaut, Crewmates Return to Earth After 197-Day Mission in Space\",\n  \"url\": \"https://www.nasa.gov/press-release/nasa-astronaut-crewmates-return-to-earth-after-197-day-mission-in-space\",\n  \"id\": \"\",\n  \"featured_image\": \"https://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/nhq2018122000042.jpg?itok=K6RZ_O_U\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Uh-oh, something went wrong. Please try again!\"\n}",          "type": "json"        }      ]    },    "filename": "routes/articles.router.js",    "groupTitle": "Articles"  },  {    "type": "post",    "url": "/v1/articles",    "title": "Post articles",    "name": "PostArticles",    "group": "Articles",    "version": "1.0.0",    "header": {      "fields": {        "Header": [          {            "group": "Header",            "type": "String",            "optional": false,            "field": "Authorization",            "description": "<p>A bearer token</p>"          }        ]      }    },    "permission": [      {        "name": "admin"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Title of the article.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "news_site",            "description": "<p>News site that published the article.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "news_site_long",            "description": "<p>Unformatted name of the news site that published the article.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "url",            "description": "<p>URL of the article.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "featured_image",            "description": "<p>Featured image of the article.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID from the news site.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "_id",            "description": "<p>ID generated by SNAPI.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "date_published",            "description": "<p>Date when news site added the article</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "date_added",            "description": "<p>Date when article was added to SNAPI</p>"          },          {            "group": "Parameter",            "type": "Array",            "optional": false,            "field": "categories",            "description": "<p>Array with categories.</p>"          },          {            "group": "Parameter",            "type": "Array",            "optional": false,            "field": "tags",            "description": "<p>Array with tags.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Title of the article.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "news_site",            "description": "<p>News site that published the article.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "news_site_long",            "description": "<p>Unformatted name of the news site that published the article.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "url",            "description": "<p>URL of the article.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "featured_image",            "description": "<p>Featured image of the article.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>ID from the news site.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "_id",            "description": "<p>ID generated by SNAPI.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "date_published",            "description": "<p>Date when news site added the article</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "date_added",            "description": "<p>Date when article was added to SNAPI</p>"          },          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "categories",            "description": "<p>Array with categories.</p>"          },          {            "group": "Success 200",            "type": "Array",            "optional": false,            "field": "tags",            "description": "<p>Array with tags.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"date_published\": 1545285660,\n  \"date_added\": 1546254962,\n  \"tags\": [\n      \"nasa\",\n      \"astronaut\",\n      \"crewmates\",\n      \"return\",\n      \"to\",\n      \"earth\",\n      \"197-day\",\n      \"mission\",\n      \"space\"\n  ],\n  \"categories\": [],\n  \"_id\": \"5c29fa722568aa81ffd68a8a\",\n  \"news_site\": \"nasa\",\n  \"news_site_long\": \"NASA\",\n  \"title\": \"NASA Astronaut, Crewmates Return to Earth After 197-Day Mission in Space\",\n  \"url\": \"https://www.nasa.gov/press-release/nasa-astronaut-crewmates-return-to-earth-after-197-day-mission-in-space\",\n  \"id\": \"\",\n  \"featured_image\": \"https://www.nasa.gov/sites/default/files/styles/1x1_cardfeed/public/thumbnails/image/nhq2018122000042.jpg?itok=K6RZ_O_U\"\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n  \"message\": \"Uh-oh, something went wrong. Please try again!\"\n}",          "type": "json"        }      ]    },    "filename": "routes/articles.router.js",    "groupTitle": "Articles"  }] });
