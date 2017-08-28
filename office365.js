/* globals Office365 */

Accounts.oauth.registerService('office365');

if (Meteor.isClient) {
  const loginWithOffice365 = function(options, callback) {
    if (! callback && typeof options === 'function') {
      callback = options;
      options = null;
    }

    Office365.requestCredential(options, Accounts.oauth.credentialRequestCompleteHandler(callback));
  };

  Accounts.registerClientLoginFunction('office365', loginWithOffice365);

  Meteor.loginWithOffice365 = function() {
    return Accounts.applyLoginFunction('office365', arguments);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.office365'],
    forOtherUsers: ['services.office365.mail']
  });
}
