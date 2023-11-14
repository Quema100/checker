const originalFetch = window.fetch;
window.fetch = async (...args) => {
  const [url, options] = args;

  const request = { method: options.method || 'GET', url: url };
  console.log(request);

  try {
    const response = await originalFetch(url, options);

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
