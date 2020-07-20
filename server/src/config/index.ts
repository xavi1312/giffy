const config = {
  jwtSecret: process.env.JWT_SECRET || 'somesecrettoken',
  DB: {
    port: process.env.PORT || 3300,
    URI: process.env.MONGODB_URI || 'mongodb://localhost/giffy',
    USER: process.env.MONGODB_USER || '',
    PASSWORD: process.env.MONGODB_PASSWORD || '',
  },
};

export default config;
