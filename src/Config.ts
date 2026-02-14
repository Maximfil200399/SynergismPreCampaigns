declare const PROD: boolean | undefined

export const version = '1.0.1 - Goodbye, Event and PseudoCoin Tabs'

/**
 * PSEUDO DO NOT CHANGE THIS LINE
 * PSEUDO DO NOT CHANGE THIS LINE
 * PSEUDO DO NOT CHANGE THIS LINE
 * PSEUDO DO NOT CHANGE THIS LINE
 * PSEUDO DO NOT CHANGE THIS LINE
 * PSEUDO DO NOT CHANGE THIS LINE
 */
export const testing: boolean = false
export const lastUpdated = new Date('##LAST_UPDATED##')
/**
 * CHANGE THIS ONE INSTEAD
 */
export const prod = typeof PROD === 'undefined' ? false : PROD
