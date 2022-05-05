export interface FeedbacksData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create: (data: FeedbacksData) => Promise<void>;
}
