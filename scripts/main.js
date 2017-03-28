newScript()
  .dialog((sessions, response) => {
    response.sendText('How can I help you?');
  })
  .expect
    .intent('business', 'exchange', (session, response) =>{
      response.sendText('I can start the exchange process now');
    })
    .intent('business', 'exchange', (session, response) =>{
      response.sendText('I can start the exchange process now');
    })
    .catch((session, response) => {

    })
    
