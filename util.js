const branch = {
  "01": "backrooms-wiki",
  "02": "ru-backrooms-wiki",
  "03": "fr-backrooms-wiki",
  "04": "pl-backrooms-wiki",
  "05": "es-backrooms-wiki",
  "06": "pt-br-backrooms-wiki",
  "07": "backrooms-vn",
  "15": ""
}
const branchId = {
  "01": "4431268",
  "02": "4548260",
  "03": "4710749",
  "04": "4761123",
  "05": "4745515",
  "06": "4714912",
  "07": "4748367",
  "15": "",
}
const progressAlert = (progress) => {
  return !(progress % Math.pow(10, Math.max( Math.floor(Math.log10(progress)), 1 )))
}

module.exports = {
  branch,
  branchId,
  progressAlert,
}
