# accounts-office365

A login service for Microsoft Office 365 accounts.

## Getting Started

Add package to your project.
```shellscript
meteor add lindoelio:accounts-office365
```

Settup the service configuration for your Microsoft Office 365 application.
```javascript
  ServiceConfiguration.configurations.upsert({service: 'office365'}, {
    $set: {
      clientId: 'Your_Office365_Application_ClientID",
      secret: 'Your_Office365_Application_Secret',
      tenant: 'Your_Tenant' // or 'common' for not tenant specific
    }
  })
```

This package depends of other base package named lindoelio:office365-oauth, which will be automatically added in your packages.

Enjoy the [Microsoft Graph](https://developer.microsoft.com/en-us/graph/docs/concepts/overview)! :-)