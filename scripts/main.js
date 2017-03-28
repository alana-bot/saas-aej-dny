newScript()
  .dialog((sessions, response) => {
    if (session.message.type === 'greeting') {
        // if we are comign from a greeting, don't send anything
        return;
    }
    response.sendText('How else can I help you?');
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
    
