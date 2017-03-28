newScript()
  .dialog((sessions, response) => {
    response.sendText('How can I help you?');
  })
  .expect
    .intent('business', 'exchange', (session, response) => {
      response.sendText('You\'ll need to email us at help@shop.com to do a return');
    })
    .intent('business', 'return procedure', (session, response) => {
      response.sendText('I can start the exchange process now');
      response.startScript('return');
    })
    .catch((session, response) => {
      response.sendText('I don\'t understand, can you try again?');
      console.log('unknown message', session.intent, session.message);
    })
    
