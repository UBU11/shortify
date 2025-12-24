import { Worker } from 'bullmq';
import IORedis from 'ioredis';

const connection = new IORedis({ maxRetriesPerRequest: null });

const worker = new Worker(
  'url',
  async job => {
    console.log(job.data);
  },
  { connection },
);
