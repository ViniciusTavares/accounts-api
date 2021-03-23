export default (connection: Record<string, any>): string => {
  const connectionString = connection.url;
  const isSrvHost = (connectionString || '').slice(0, 11) === 'mongodb+srv';

  if (isSrvHost) {
    const host = connectionString.slice(14);
    const { user, password } = connection;

    return `mongodb+srv://${user}:${password}@${host}`;
  }

  return connectionString;
};
