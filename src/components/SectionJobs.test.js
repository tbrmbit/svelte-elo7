const SectionJobs = require('../components/SectionJobs.svelte');

test('The component should exist', () => {
  const component = new SectionJobs({ target: document.body });

  expect(component).toBeTruthy();
});