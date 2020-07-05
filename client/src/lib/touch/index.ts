export const unify = (e: TouchEvent) => {
  return e.changedTouches ? e.changedTouches[0] : e;
};
