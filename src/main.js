// Import a logger for easier debugging.
import debug from 'debug';
const log = debug('app:log');
// The logger should only be disabled if we’re not in production.
if (ENV !== 'production') {
    // Enable the logger.
    debug.enable('*');
    log('Logging is enabled!');
} else {
    debug.disable();
}