export interface TestProgress {
  currentQuestionIndex: number;
  answers: number[];
  startTime: number;
}

export class TestStorage {
  private static readonly PROGRESS_KEY = 'tetoEgenProgress';
  private static readonly RESULT_KEY = 'tetoEgenResult';

  static saveProgress(progress: TestProgress): void {
    localStorage.setItem(this.PROGRESS_KEY, JSON.stringify(progress));
  }

  static loadProgress(): TestProgress | null {
    const saved = localStorage.getItem(this.PROGRESS_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  }

  static clearProgress(): void {
    localStorage.removeItem(this.PROGRESS_KEY);
  }

  static saveResult(resultType: string, sessionId: string): void {
    const result = {
      resultType,
      sessionId,
      completedAt: new Date().toISOString()
    };
    localStorage.setItem(this.RESULT_KEY, JSON.stringify(result));
  }

  static loadResult(): { resultType: string; sessionId: string; completedAt: string } | null {
    const saved = localStorage.getItem(this.RESULT_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return null;
      }
    }
    return null;
  }

  static clearResult(): void {
    localStorage.removeItem(this.RESULT_KEY);
  }
}
