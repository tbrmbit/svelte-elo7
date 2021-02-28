import { writable } from "svelte/store";

const JOBS_API = 'http://www.mocky.io/v2/5d6fb6b1310000f89166087b';
const JOBS_LIST_INITIAL = [];

export const jobs = writable(JOBS_LIST_INITIAL);

export const fetchJobs = (async () => {
  const resp = await fetch(JOBS_API, { method: "GET" });

  if (resp.ok) {
    const data = await resp.json();
    jobs.set(data.vagas);
  } else {
    throw new Error(resp);
  }
});