import { Job } from "./Types";

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
