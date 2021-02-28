const { render, fireEvent, waitFor } = require('@testing-library/svelte');
const SectionJobs = require('../components/SectionJobs.svelte');

test('The component shoud be exist', () => {
  const component = render(SectionJobs);
  expect(component).toBeTruthy();
});