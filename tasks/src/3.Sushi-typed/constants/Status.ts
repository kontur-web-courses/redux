const Status = {
  none: 0,
  loading: 1,
  loaded: 2
};

for (const key of Object.keys(Status)) {
  Status[Status[key]] = key;
}

export default Status;
