import {useState, useMemo, useCallback} from 'react'

function useToggle(initValue = false) {
  const [value, setValue] = useState(initValue)

  const toggle = useCallback(
    () => setValue(previousValue => !previousValue),
    [],
  )

  const toggleUtils = useMemo(() => [value, toggle, setValue], [toggle, value])

  return toggleUtils
}

export default useToggle
