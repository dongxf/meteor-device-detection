Package.describe({
  name: "foodtrust:device-detection",
  summary: "Client-Side Device Type Detection & Template Switching with Optional Meteor-Router Support",
  version: "0.2.1",
  git: "https://github.com/dongxf/meteor-device-detection.git",
  documentation: "README.md"
});

Package.on_use(function (api) {
  //api.versionsFrom('METEOR@0.9.0');
  api.versionsFrom('1.0.1');
  api.use(['meteor', 'underscore', 'deps', 'session', 'templating', 'ui'], 'client');

  api.add_files(['device_detection.js', 'device_helpers.js'], 'client');
});

