import { sqliteTable, text, integer, primaryKey } from 'drizzle-orm/sqlite-core';
export const members=sqliteTable('members',{id:text('id').primaryKey(),name:text('name').notNull()});
export const sessions=sqliteTable('sessions',{user:text('user').notNull(),day:text('day').notNull(),values:text('values').notNull()},t=>[primaryKey({columns:[t.user,t.day]})]);
export const settings=sqliteTable('settings',{id:text('id').primaryKey(),start:text('start').notNull(),owner:text('owner').notNull()});

export const inviteAttempts=sqliteTable('invite_attempts',{id:text('id').primaryKey(),window:integer('window').notNull(),hits:integer('hits').notNull()});

