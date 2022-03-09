const https = require('https');
const express = require('express');
const app = express();
const PaytmChecksum = require('paytmchecksum');
/**
 * import checksum generation utility
 * You can get this utility from https://developer.paytm.com/docs/checksum/
 */

const merchantId = 'EcWTAk01170313958935';
const merchantKey = 'Nm2SVBVbzvKyAWpI';
const referenceId = 'pinamsa234d42f21';

var paytmParams = {};

paytmParams.body = {
  mid: merchantId,
  referenceId: referenceId,
  cardPreAuthType: 'STANDARD_AUTH',
  preAuthBlockSeconds: '12321',
};

/**
 * Generate checksum by parameters we have in body
 * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
 */

app.get('/', (req, res) => res.send('paytm Server'));

app.post('/createOrder', async (req, res) => {
  try {
    // const order = await PaytmChecksum.generateSignature(
    //   { mid: merchantId, orderId: req.body.orderId },
    //   merchantKey
    // ).then(function (checksum) {
    //   paytmParams.head = {
    //     tokenType: 'CHECKSUM',
    //     token: checksum,
    //   };

    //   var post_data = JSON.stringify(paytmParams);

    //   var options = {
    //     /* for Staging */
    //     hostname: 'securegw-stage.paytm.in',

    //     /* for Production */
    //     // hostname: 'securegw.paytm.in',

    //     port: 443,
    //     path:
    //       '/theia/api/v1/token/create?mid=' +
    //       merchantId +
    //       '&referenceId=' +
    //       referenceId,
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Content-Length': post_data.length,
    //     },
    //   };

    //   var response = '';
    //   var post_req = https.request(options, function (post_res) {
    //     post_res.on('data', function (chunk) {
    //       response += chunk;
    //     });

    //     post_res.on('end', function () {
    //       console.log('Response: ', response);
    //       return response;
    //     });
    //   });

    //   post_req.write(post_data);
    //   post_req.end();
    // });
    const order = {}
    res.send({success:true,order});
  } catch (error) {
    res.send(error);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('server is running');
});
