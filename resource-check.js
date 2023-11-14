let performanceEntries = performance.getEntriesByType('resource');
console.log(performanceEntries);

if ('connection' in navigator) {
  let connection = navigator.connection;
  console.log(connection);
}
