function isPrime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
        return true
    }
}

this.addEventListener('message', function () {
    var primes = []
    for (var i = 2; i < 20000000; i++) {
        if (isPrime(i)) {
            primes.push(i)
        }
    }
    postMessage(primes)
}, false)
