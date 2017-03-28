test('greeting', function() {
  return newTest()
    .expectText('Welcome to our online store')
    .expectText('How can I help you?')
    .run();
})

test('returns', function() {
  return newTest()
    .checkForTrailingDialogs(true)
    .expectText('Welcome to our online store')
    .expectText('How can I help you?')
    .sendText('need to return my last order')
    .expectText('I can start the exchange process now')
    .expectText('What is the order number?')
    .sendText('12345')
    .expectText('I found order 12345 👍')
    .expectText('Print the label, put label on the box, ship the box, get 💰')
    .expectButtons('', [
        {
            type: 'url',
            text: 'Get label',
            url: 'http://google.com'
        },
    ])
    .expectText('How else can I help you?')
    .run();
})