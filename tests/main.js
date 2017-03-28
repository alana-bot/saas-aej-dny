test('greeting', function() {
  return newTest('adam')
    .expectText('Welcome to our online store')
    .expectText('How can I help you?')
    .run();
})

test('returns', function() {
  return newTest('adam')
    .checkForTrailingDialogs(true)
    .expectText('Welcome to our online store')
    .expectText('How can I help you?')
    .sendText('need to return my last order')
    .expectText('I can start the exchange process now')
    .expectText('What is the order number?')
    .run();
})