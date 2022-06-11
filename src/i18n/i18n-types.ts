// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString, RequiredParams } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'fr'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	GUARDS: {
		/**
		 * This command is currently desactivated.
		 */
		DISABLED_COMMAND: string
		/**
		 * This bot is currently in maintenance mode.
		 */
		MAINTENANCE: string
		/**
		 * This command can only be used in a server.
		 */
		GUILD_ONLY: string
		/**
		 * This command can only be used in a NSFW channel.
		 */
		NSFW: string
	}
	ERRORS: {
		/**
		 * An unknown error occured.
		 */
		UNKNOWN: string
	}
	COMMANDS: {
		PREFIX: {
			/**
			 * Prefix changed to `{prefix}`.
			 * @param {string} prefix
			 */
			CHANGED: RequiredParams<'prefix'>
		}
		MAINTENANCE: {
			/**
			 * Maintenance mode set to `{state}`.
			 * @param {string} state
			 */
			SUCCESS: RequiredParams<'state'>
		}
	}
}

export type TranslationFunctions = {
	GUARDS: {
		/**
		 * This command is currently desactivated.
		 */
		DISABLED_COMMAND: () => LocalizedString
		/**
		 * This bot is currently in maintenance mode.
		 */
		MAINTENANCE: () => LocalizedString
		/**
		 * This command can only be used in a server.
		 */
		GUILD_ONLY: () => LocalizedString
		/**
		 * This command can only be used in a NSFW channel.
		 */
		NSFW: () => LocalizedString
	}
	ERRORS: {
		/**
		 * An unknown error occured.
		 */
		UNKNOWN: () => LocalizedString
	}
	COMMANDS: {
		PREFIX: {
			/**
			 * Prefix changed to `{prefix}`.
			 */
			CHANGED: (arg: { prefix: string }) => LocalizedString
		}
		MAINTENANCE: {
			/**
			 * Maintenance mode set to `{state}`.
			 */
			SUCCESS: (arg: { state: string }) => LocalizedString
		}
	}
}

export type Formatters = {}
