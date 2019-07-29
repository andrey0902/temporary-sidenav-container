const webpush = require('web-push');
const express = require('express');
const fs = require('fs');
const path = require('path');
const PUBLIC_VAPID =
  'BDhQ2zt1c04yetTqoxbR9LPo-bX4KJthI5mvLEkWoUqT9ouRkmjJNO0ZPaiU3ThrZnN77L65dhX0_v_Kpv57pWo';
const PRIVATE_VAPID = 'syilIxA7itVhM45NwRFlrBRNBKaC9vvRWi6GKg9nX9A';
const cors = require('cors');
// Replace with your email
webpush.setVapidDetails('mailto:val@karpov.io', PUBLIC_VAPID, PRIVATE_VAPID);

const setDB = (subscription) => {
  fs.readFile('db.json', 'utf8', function readFileCallback(err, data){
    if (err){
      console.log(err);
    } else {
     let obj = JSON.parse(data); //now it an object
      obj.table.push(subscription); //add some data
      console.log(obj);
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile('db.json', json, 'utf8', () => {}); // write it back
    }});
};

const sendNotification = (payload) => {
  fs.readFile('db.json', 'utf8', function readFileCallback(err, data){
    if (err){
      console.log(err);
    } else {
    let obj = JSON.parse(data); //now it an object
      obj.table.forEach(subscription => {
        console.log('payload', payload);
        console.log('keys auth', subscription.keys.auth);
        console.log('keys p256dh', subscription.keys.p256dh);
        webpush.sendNotification(subscription, payload).catch(error => {
          console.error(error.stack);
        });
      });

    }});
};

const mainSubscription = [];

const app = express();
const hostname = '0.0.0.0';
const hostPort = process.env.PORT || 5000;
const defaultMessages = {
  result: [
    {
      created: '2019-01-30T13:11:49.050Z',
      userId: 1,
      userAvatarUrl:
        'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      content: 'some text lorem'
    },
    {
      created: '2019-01-30T13:11:49.050Z',
      userId: 1,
      userAvatarUrl:
        'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      content: 'some text lorem'
    },
    {
      created: '2019-01-30T13:14:49.050Z',
      userId: 2,
      userAvatarUrl: 'https://wordsmith.org/words/images/avatar2_large.png',
      content: 'some text lorem'
    },
    {
      created: '2019-01-30T13:14:55.050Z',
      userId: 2,
      userAvatarUrl: 'https://wordsmith.org/words/images/avatar2_large.png',
      content: 'some text lorem'
    },
    {
      created: '2019-01-30T13:15:49.050Z',
      userId: 1,
      userAvatarUrl:
        'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
      content: 'some text lorem'
    }
  ]
};

app.use(cors());
app.use(express.static( 'dist'));
app.use(require('body-parser').json());

app.get('/test', (req, res) => {
  console.log(req);
  res.send({ data: 'server work true' });
});

app.get('/stories', (req, res) => {
  console.log(req);
  res.send(defaultMessages);
});

app.post('/subscription', (req, res) => {
  const subscription = req.body;

  // mainSubscription.push(subscription);
  setDB(subscription);

  console.log('req.body', req.body);
  const notificationPayload = {
    notification: {
      title: 'Kiga Notification',
      body: 'You successfully subscription on the message from Kiga',
      icon: 'assets/icons/icon-512x512.png'
    }
  };
  res.status(201).json({});
  const payload = JSON.stringify(notificationPayload);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
  });
});

app.post('/total', (req, res) => {
  const body = req.body;
  console.log('req.body total', req.body);
  console.log('debugger');
  debugger;
  console.log('mainSubscription[0]', mainSubscription[0]);
  const notificationPayload = {
    notification: {
      title: 'New messages',
      body: 'You have not read messages' + body.total,
      icon: 'assets/icons/icon-512x512.png'
    }
  };
  res.status(201).json({ success: 'send success' });
  const payload = JSON.stringify(notificationPayload);

  // mainSubscription.forEach(subscription => {
  //   webpush.sendNotification(subscription, payload).catch(error => {
  //     console.error(error.stack);
  //   });
  // });

  sendNotification(payload);
});

app.listen(hostPort, () => {
  console.log(`Server started on port ${hostPort}`);
});
