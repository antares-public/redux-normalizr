export function isError(error: unknown): asserts error is Error {
    if (!(error instanceof Error)) {
      throw error
    }
  }
  