const modules = () => process.env.JETPACK ? ["serverless-jetpack"] : [];

module.exports = {
  modules
};