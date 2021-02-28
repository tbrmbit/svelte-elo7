const { render, fireEvent, waitFor } = require('@testing-library/svelte');
const SectionJobs = require('../components/SectionJobs.svelte');

test('The component shoud be exist', () => {
  const component = render(SectionJobs);
  expect(component).toBeTruthy();
});

test('makes a GET request to jobs', () => {
  let mockAPI = fireEvent.call(window, "fetch");
  waitFor(() => expect(mockAPI).toHaveBeenCalledWith("http://www.mocky.io/v2/5d6fb6b1310000f89166087b", { method: "GET" }));
});