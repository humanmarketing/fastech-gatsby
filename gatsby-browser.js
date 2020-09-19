const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }
export const onClientEntry = () => {
    window.onload = () => {
        addScript("//cdn.calltrk.com/companies/458470846/6c98d5841799741b1ab6/12/swap.js")        
    }
}