import { renderHook } from '@testing-library/react'

import { useReadLocalStorage } from './use-read-local-storage'

describe('useReadLocalStorage()', () => {
  it('should use read local storage', () => {
    const { result } = renderHook(() => useReadLocalStorage('test'))

    expect(result.current).toBe(null)
  })
})
