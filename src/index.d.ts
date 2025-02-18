export type ChatMessage = {
  role: "user" | "assistant" | "system"; // Who sent the message
  content: string | Dictionary<string>; // The actual text of the message
  timestamp?: number; // Optional timestamp
};

export type Conversation = {
  messages: ChatMessage[]; // List of messages exchanged
  reasoning?: string[]; // Optional reasoning steps from the assistant
  contextSummary?: string; // Summary of the conversation context
  suggestions?: string[]; // Suggested follow-up questions
  confidence?: number;
};

export interface Dictionary<T> {
  [Key: string]: T;
}

export type Tool = {
  name: string;
  description: string;
  parameters: {
    type: any;
    properties: {
      string: { string: string };
    };
    required: string[];
  };
};

export type Task = {
  taskId: string;

  conversation: Conversation;
  tools?: Tool[];
  agent: Agent;
  created: number;
  description: string;
  deadline: number;
  priority: number;
};

export type Registry = {
  setJob(job: Job): void;
  setStatus(jobId: string, status: string): void;
  getStatus(jobId: string): string;
  getJob(jobId: string): Job;
  delete(jobId: string): void;
};

export type Agent = {
  name: string;
  role: string;
  goal: string;
  backstory?: string;
  allow_delegation: boolean;
  model?: string;
  memory?: boolean;
};

export type Job = {
  pubKey: string;
  name: string;
  agents: Agent[];
  tasks: Task[];
  verbose: boolean;
  concurrent: boolean;
  memory: boolean;
  location: "CF" | "HETZNER";
  status: "UNKNOWN" | "SCHED" | "RUN" | "DONE";
  timestamp: number;
};
