import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.renameTable('transitions', 'transactions')
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.renameTable('transactions', 'transitions')
}
