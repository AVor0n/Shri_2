import Build from './Build';

const fakeBuilds = [];

const createRandomBuild = (id, message, branch) => {
  const statuses = ['done', 'pending', 'fail'];
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  return new Build(
    id,
    status,
    message,
    branch,
    '9c9f0b9',
    'Philip Kirkorov',
    '21 янв, 03:06',
    '1 ч 20 мин'
  );
};

fakeBuilds.push(
  new Build(
    1368,
    'done',
    'add documentation for postgres scaler',
    'master',
    '9c9f0b9',
    'Philip Kirkorov',
    '21 янв, 03:06',
    '1 ч 20 мин'
  ),
  new Build(
    1367,
    'fail',
    'Super cool UI kit for making websites that look like games',
    'master',
    '952e5567',
    'Philip Kirkorov',
    '21 янв, 03:06',
    '1 ч 20 мин'
  ),
  new Build(
    1366,
    'pending',
    "Merge branch 'master' of github.com:jaywcjlove/awesome",
    'master',
    'b4636ab',
    'Philip Kirkorov',
    '21 янв, 03:06',
    '1 ч 20 мин'
  ),
  new Build(
    1365,
    'done',
    'upgrade typescript to 3.8',
    'master',
    'b4636ab',
    'Philip Kirkorov',
    '21 янв, 03:06',
    '1 ч 20 мин'
  ),
  new Build(
    1364,
    'fail',
    'add documentation for postgres scaler',
    'master',
    '952e5567',
    'Philip Kirkorov',
    '21 янв, 03:06',
    '1 ч 20 мин'
  ),
  new Build(
    1362,
    'pending',
    'replace all `div` to `article`',
    'master',
    'e41e4cc',
    'Philip Kirkorov',
    '21 янв, 03:06',
    '1 ч 20 мин'
  )
);

export { fakeBuilds, createRandomBuild };
