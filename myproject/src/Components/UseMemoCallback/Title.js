import React from 'react'

const Title = () => {
    console.log("I am Title")
  return (
    <div>
      <h1>This is to show the useCallback and useMemo</h1>
    </div>
  )
}

export default React.memo(Title)
