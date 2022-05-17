import { useMemo } from "react";

const useRounder = (count) => {
  return useMemo(
    () => (count < 1000 ? count : (count / 1000).toFixed(1) + "k"),
    [count]
  );
};

export default useRounder;
