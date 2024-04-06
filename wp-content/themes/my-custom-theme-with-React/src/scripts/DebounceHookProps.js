// Import required dependencies
 import { useState, useEffect, useRef } from 'react';
/**
*/ /**
*
Complete the `useDebounceValue` Custom Hook - 04.03.24
Your task is to complete the `useDebounceValue` custom hook below, fulfilling all listed requirements. Refer back to the guidance regarding debouncing strategies. Good luck!
_`useDebounceValue.js`:_
* @typedef DebouncedHookProps
* @property {any} initialValue - Initial value of the internal state.
@property {number} delayDuration - Duration (ms) to wait before executing the
callback.
* @property {Function} callback - Function to call with debounced values.
* Creates a debounced hook capable of updating a value over time. Returns both
current value and setter function.
* When the returned setter function is invoked, does not immediately update the
value but schedules
* an update with the provided `delayDuration`. If another update occurs sooner,
restarts the timer.
* Once `delayDuration` elapses, invokes the `callback` with the latest scheduled
value.
*
 * @param {DebouncedHookProps} args - Props containing the configuration for the
 debounced hook.
 * @returns {[any, Function]} Tuple of current value and updated setter function.
*/
 // Declare a ref to store the latest queued value
 const useDebounceValue = ({ initialValue, delayDuration, callback }) => {
 // Initialize the state with given initial value
 const [value, _setValue] = useState(initialValue);
const queueValueRef = useRef(initialValue);
/**
*
 * @param {any} newValue - New value to schedule.
*/
//  * Setter function for updating the value internally, triggering the debouncer.
//   * Updates `queueValueRef` and sets a timeout for calling `callback`.
// * Cancels
//  any previously enqueued timeouts.
 const setValue = (newValue) => {
 queueValueRef.current = newValue;
 // TODO: Clear the previous timeout
 // HINT: Checkout
 https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#canceling_a_timeout
// Schedule the callback execution after `delayDuration` ms
setTimeout(() => {
// TODO: Invoke `callback` with the newest queued value
// HINT: Remember that `queueValueRef.current` contains the most recent
// scheduled value
 // Finally, update the actual value stored in state
 _setValue(queueValueRef.current);
 }, delayDuration);
};
  // TODO: Return both `value` and `setValue` in a tuple
};
export default useDebounceValue