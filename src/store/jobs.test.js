const { fireEvent, waitFor } = require('@testing-library/svelte');

test('makes a GET request to jobs', () => {
  let mockAPI = fireEvent.call(window, "fetch");
  waitFor(() => expect(mockAPI).toHaveBeenCalledWith("http://www.mocky.io/v2/5d6fb6b1310000f89166087b", { method: "GET" }));
});
