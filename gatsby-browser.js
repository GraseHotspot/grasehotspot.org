import React from 'react'
import { Script } from 'gatsby'

export const wrapRootElement = ({ element }) => {
  return (
    <>
      {element}
      <Script
        id="goatcounter"
        data-goatcounter="https://stats.grasehotspot.org/count"
        src="//stats.grasehotspot.org/count.js"
        strategy="defer"
      />
    </>
  )
}

export const onRouteUpdate = ({ location }) => {
  const timer = setInterval(() => {
    if (window.goatcounter && typeof window.goatcounter.count === 'function') {
      clearInterval(timer)
      window.goatcounter.count({
        path: location.pathname + location.search + location.hash,
      })
    }
  }, 100)
}
