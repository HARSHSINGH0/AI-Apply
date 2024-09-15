import { useState } from 'react';
import * as aiService from '../services/aiService';

export function useAI() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callAIService = async (serviceFunction, ...args) => {
    setLoading(true);
    setError(null);
    try {
      const result = await serviceFunction(...args);
      setLoading(false);
      return result;
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null;
    }
  };

  return { loading, error, callAIService };
}
