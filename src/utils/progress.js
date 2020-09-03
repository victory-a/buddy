function computeProfileProgress(user) {
  let progress = 40;

  const userKeys = Object.keys(user ?? []);
  const userAttr = ["gender", "bio", "photo"];

  userAttr.forEach(attr => {
    if (userKeys.includes(attr)) progress += 20;
  });

  return progress;
}

export default computeProfileProgress;
