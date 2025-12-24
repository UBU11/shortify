import { MetricsTime, Queue } from "bullmq";

const myQueue = new Queue("url");

async function addJobs() {
  await myQueue.add("myJobName", { foo: "bar" });
  await myQueue.add("myJobName", { qux: "baz" });
}

const metrics = await myQueue.getMetrics(
  "completed",
  0,
  MetricsTime.ONE_WEEK * 2
);

await addJobs();
