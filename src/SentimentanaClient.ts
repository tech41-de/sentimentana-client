import type { Job } from "./index.d.ts";

export class SentimentanaClient {
  serviceUrl = "";
  appId = "";
  appSecret = "";
  _isConnected = false;
  
  constructor(url: string, appId: string, appSecret: string) {
    this.serviceUrl = url;
    this.appId = appId;
    this.appSecret = appSecret;
  }

  isConnected(): boolean {
    return this._isConnected;
  }

  connect() {
    this._isConnected = true;
    console.log("conencting");
  }

  disconnect() {
    this._isConnected = false;
    console.log("disconnect");
  }

  async setJob(job: Job): Promise<string> {
    console.log(job);
    return "OK";
  }

  async setStatus(jobId: string, status: string): Promise<string> {
    console.log(jobId, status);
    return "OK";
  }

  async getStatus(jobId: string): Promise<string> {
    console.log(jobId);
    return "UNKNOWN";
  }

  async getJob(jobId: string): Promise<Job> {
    console.log(jobId);
    return {} as Job;
  }

  async delete(jobId: string): Promise<string> {
    console.log(jobId);
    return "OK";
  }
}
