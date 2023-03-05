declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: number;
      MYSQL_HOST: string;
      MYSQL_USER: string;
      MYSQL_PASSWORD: string;
      MYSQL_DB: string;
    }
  }
}

export {};
