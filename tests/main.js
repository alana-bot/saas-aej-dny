test('greeting', function() {
  return newTest('adam')
    .expectText('Welcome to our online store')
    .expectText('How can I help you?')
    .run();
})

// test('returns', function() {
//   return newTest('adam')
//     .sendText('')
//     .run();
// })