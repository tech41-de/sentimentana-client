import { Job } from "./Types";

export class SentimentanaClient {
  serviceUrl = "";
  appId = "";
  appSecret = "";

  constructor(url: string, appId: string, appSecret: string) {
    this.serviceUrl = url;
    this.appId = appId;
    this.appSecret = appSecret;
  }

  connect() {}

  disconnect() {}

  async setJob(job: Job): Promise<string> {
    return "OK";
  }

  async setStatus(jobId: string, status: string): Promise<string> {
    return "OK";
  }

  async getStatus(jobId): Promise<string> {
    return "UNKNOWN";
  }

  async getJob(jobId: string): Promise<Job> {
    return {} as Job;
  }

  async delete(jobId: string): Promise<string> {
    return "OK";
  }
}
