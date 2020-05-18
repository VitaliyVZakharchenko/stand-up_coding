import { createLogger } from './index.js';

it('', () => {
    const logger = createLogger();
    logger.warn('eee');
    logger.warn('ttt');
    logger.error('ppp');
    logger.log('ooo');

    let actual = loger.getRecords('warn');
    let expected = [{ message: 'eee', dateTime: expect.any(Date), type: 'warn' }]
    
    expect(actual).toEqual(expected);
});