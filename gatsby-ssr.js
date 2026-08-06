import React from 'react'
import { Script } from 'gatsby'

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="goatcounter-config"
      dangerouslySetInnerHTML={{
        __html: `window.goatcounter = { no_onload: true };`,
      }}
    />,
  ])
}

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
