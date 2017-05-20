var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
  keyPath: './certs/private.pem.key',
  certPath: './certs/certificate.pem.crt',
  caPath: './certs/root-CA.crt',
  clientId: 'HUB-01',
  region: 'ap-northeast-2'
});

device
  .on('connect', function() {
    console.log('connected');
    device.publish('switcher/on', JSON.stringify({
      message: '[HUB-01] AWS IoT SDK TEST'
    }));
  });