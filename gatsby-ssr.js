import React from "react"
export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setHeadComponents([
    
  ])
  setPostBodyComponents([
    <script
	    key="callrail"
        src="//cdn.calltrk.com/companies/458470846/6c98d5841799741b1ab6/12/swap.js"
        type="text/javascript"
        aysnc="true"
    />,    
  ])
}