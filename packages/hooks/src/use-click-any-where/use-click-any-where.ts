import { useEventListener } from '../use-event-listener'

/**
 * Custom hook that handles click events anywhere on the document.
 * @param {Function} handler - The function to be called when a click event is detected anywhere on the document.
 * @public
 * @example
 * ```tsx
 * const handleClick = (event) => {
 *   console.log('Document clicked!', event);
 * };
 *
 * // Attach click event handler to document
 * useClickAnywhere(handleClick);
 * ```
 */
export function useClickAnyWhere(handler: (event: MouseEvent) => void) {
  useEventListener('click', (event) => {
    handler(event)
  })
}
