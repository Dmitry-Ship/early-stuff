$(function functionName() {


  var arr = []
  for (var i = 2; i < 100; i++) {
    arr[i] = true
  }
  var p = 2
  do {
    for (var i = 2 * p; i < 100; i += p) {
      arr[i] = false
    }
    for (i = p + 1; i < 100; i++) {
      if(arr[i]) break
    }
    p = i
  } while (p * p < 100);
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    if(arr[i]) {
      sum+=i
    }
  }


  function getPrimes(num){
    var sieve = [], i, j, primes = []
    for (i = 2; i <= num; ++i) {

      if (!sieve[i]) {
        primes.push(i)
        for (j = i < 1; j <= num; j += i) {
          sieve[j] = true
        }
      }
    }
    return sieve
  }

  var list = []
  nextPrime:
    for (var i = 2; i < 1000; i++) {

      for (var j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
      list.push(i)

    }
})
