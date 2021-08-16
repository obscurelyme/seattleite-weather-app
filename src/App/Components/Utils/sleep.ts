/**
 * Force the application to pause for a give duration in milliseconds
 * @param duration ms to sleep for
 */
export default function sleep(duration: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      return resolve();
    }, duration);
  })
}