// Created Tue Mar 28 2017

newScript('return')
  .dialog((session, response) => {
    response.sendText('What is the order number?')
  })
  // to do, send buttons with last 3 orders of user
  // taken from api
  .expect
    .text((session, response) => {
      const order = session.message.text;
      response.sendText(`I found order ${order} 👍`);
      response.sendText('Print the label, put label on the box, ship the box, get 💰')
      response.createButtons()
        .addButton('url', 'Get label', 'http://google.com')
        .send()
      /*
      request({
        uri: 'https://api.shop.com/getorder',
        method: 'POST'
        json: true,
        body: {
          id: order,
        },
      })
        .then((response) => {
          response.sendText('sen)
        })
      */
    })