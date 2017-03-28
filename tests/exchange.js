// Created Tue Mar 28 2017

test('greeting', function() {
  return newTest()
    .checkForTrailingDialogs(true)
    .expectText('Welcome to our online store')
    .expectText('How can I help you?')
    .sendText('I need to exchange my dress for a smaller size')
    .expectText('You\'ll need to email us at help@shop.com to do a return')
    .expectText('How else can I help you?')
    .run();
})