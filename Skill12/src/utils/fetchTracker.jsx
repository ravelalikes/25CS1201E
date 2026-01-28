const createFetchTracker = () => {
  let count = 0;

  return () => {
    count++;
    return count;
  };
};

export const trackFetch = createFetchTracker();
