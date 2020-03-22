module.exports = (api) => {
  api.cache(true)
  
  return {
    presets: ["next/babel"],
    plugins: [[
      "emotion",
      {
        "autoLabel": process.env.NODE_ENV !== 'production',
        "labelFormat": "[local]",
      }
    ]]
  }
}