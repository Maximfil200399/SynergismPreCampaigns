declare const PROD: boolean | undefined

export const version = '3.1.2m January 7 2026: The \'I want to play Synergism before Campaigns existed\' Update'

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
