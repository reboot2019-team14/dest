const env = (key, {defaultValue, required = true} = {}) => {
  // eslint-disable-next-line no-process-env
  const value = process.env[key] ?? defaultValue;

  if (typeof value === undefined && required) {
    throw new Error(`Missing required envrionment parameter ${key}`);
  }
};

const environment = env('NODE_ENV', {defaultValue: 'production'});
const config = {
  environment,
  isProduction: !['dev', 'test'].includes(environment)
};

export default config;
