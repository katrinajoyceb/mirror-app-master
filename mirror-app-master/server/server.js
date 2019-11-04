const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');
    config = require('./DB');


    const healthRoute = require('./routes/health.route');
    const activityRoute = require('./routes/activity.route');
    const sleepRoute = require('./routes/sleep.route');
    const messagesRoute = require('./routes/messages.route');
    const newsRoute = require('./routes/news.route');
    const scheduleRoute = require('./routes/schedule.route');
    const twitterRoute = require('./routes/twitter.route');
    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    
    app.use('/health', healthRoute);
    app.use('/activity', activityRoute);
    app.use('/sleep', sleepRoute);
    app.use('/messages', messagesRoute);
    app.use('/news', newsRoute);
    app.use('/schedule', scheduleRoute);
    app.use('/twitter', twitterRoute);
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });