function replacer(match) {
  return `${match} target="_blank" rel="noopener noreferrer"`
}

function addTargetBlank(html) {
  const externalLink = /<a.+(href=")(http|https):\/\/.*?(")/g

  return html.replace(externalLink, replacer)
}

export default addTargetBlank
