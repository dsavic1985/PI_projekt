const { validateAdminArgs } = require('firebase-admin/data-connect');

const connectorConfig = {
  connector: 'connector-functions',
  serviceId: 'deepiprojekt',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

function deletePlayer(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('DeletePlayer', inputVars, inputOpts);
}
exports.deletePlayer = deletePlayer;

function updatePlayer(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdatePlayer', inputVars, inputOpts);
}
exports.updatePlayer = updatePlayer;

function saveGameSession(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('SaveGameSession', inputVars, inputOpts);
}
exports.saveGameSession = saveGameSession;

function getPlayer(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetPlayer', inputVars, inputOpts);
}
exports.getPlayer = getPlayer;

