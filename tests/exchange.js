// Created Tue Mar 28 2017

test('exchange', function() {
  return newTest()
    .checkForTrailingDialogs(true)
    .expectText('Welcome to our online store')
    .expectText('How can I help you?')
    .sendText('I need to exchange my dress for a smaller size')
    .run();
})