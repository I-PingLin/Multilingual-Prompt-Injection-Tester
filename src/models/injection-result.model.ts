
export interface Language {
  code: string;
  name: string;
  flag: string;
}

export type TestStatus = 'PENDING' | 'SUCCESSFUL' | 'BLOCKED' | 'ERROR';

export interface InjectionResult {
  language: Language;
  translatedPrompt: string;
  systemResponse: string;
  status: TestStatus;
}
