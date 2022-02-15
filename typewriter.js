const typewriter = function(sentence) {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, (delay += 50));
  }
  setTimeout(() => {
    console.log('');
  }, delay);
};

const sentence1 = "hello there from lighthouse labs";
typewriter(sentence1);