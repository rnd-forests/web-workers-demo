function getSite(name) {
    var lookup = {
        'angular': 'Google',
        'vuejs': 'Evant You',
        'reactjs': 'Facebook',
        'rails': 'David Heinemeier Hansson'
    }

    return lookup[name] || "Cannot find the given author"
}

console.log(this) // DedicatedWorkerGlobalScope

this.addEventListener('message', function (e) {
    console.log(e)
    this.postMessage(getSite(e.data))
})
