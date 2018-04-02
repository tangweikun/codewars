export const getNumber = busStops =>
  busStops.reduce((acc, [on, off]) => acc + on - off, 0)
