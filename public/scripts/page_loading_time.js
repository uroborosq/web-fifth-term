!function () {
    const startTime = new Date().getTime()

    const perfEntries = performance.getEntriesByType("navigation");
    const [p] = perfEntries;
    let pageLoadTime = p.startTime;
    function inner() {
        let currTime = new Date().getTime()
        console.log(currTime - startTime)
    }
    inner()
}()
