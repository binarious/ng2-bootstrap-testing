# Tests Errors in ng2-bootstrap

## Steps to reproduce
```
npm install
npm test
```

You will see the error:

```
No provider for NgModel ("[ERROR ->]<datepicker ngModel></datepicker>"): DatePickerComponent_Host
```

This repository is connected to the ng2-bootstrap version of https://github.com/binarious/ng2-bootstrap/tree/development which is a working (you can install it via npm) fork of this PR: https://github.com/valor-software/ng2-bootstrap/pull/931