import { knex as setupKnex, Knex } from 'knex'
import { env } from '../env'

export const config: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  migrations: {
    directory: './src/database/migrations',
  },
  useNullAsDefault: true,
}

export const knex = setupKnex(config)
