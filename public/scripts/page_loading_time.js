function printNavTimingData() {
    const perfEntries = performance.getEntriesByType("navigation");
    const [p] = perfEntries;
    const domLoadTime = p.domContentLoadedEventEnd - p.domContentLoadedEventStart;
    console.log(p)
    console.log(p.duration)
}

