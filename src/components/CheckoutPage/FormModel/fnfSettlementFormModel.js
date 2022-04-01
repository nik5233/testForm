const formModel = {
  formId: 'FullandFinalSettlement',
  formField: {
    // page 1
    dateOfResignation: {
      name: 'dateOfResignation',
      label: 'Date of Resignation',
      requiredErrorMsg: 'Resignation date is required',
      invalidErrorMsg: 'Resignation date is not valid'
    },
    reasonForLeaving: {
      name: 'reasonForLeaving',
      label: 'Reason For Leaving',
      requiredErrorMsg: 'Reason required'
    },
    noticePeriodRequested: {
      name: 'noticePeriodRequested',
      label: 'Notice Period Requested',
      requiredErrorMsg: 'This Field required'
    },
    noticePeriodApproved: {
      name: 'noticePeriodApproved',
      label: 'Notice Period Approved',
      requiredErrorMsg: 'This Field required'
    },
    excessNoticePeriod: {
      name: 'excessNoticePeriod',
      label: 'Excess Notice Period',
      requiredErrorMsg: 'This Field required'
    },
    lastWorkingDate: {
      name: 'lastWorkingDate',
      label: 'Last Working Date',
      requiredErrorMsg: 'This Field required'
    },
    resignationLetter: {
      name: 'resignationLetter',
      label: 'Resignation Letter',
      requiredErrorMsg: 'Resignation Letter required'
    },

    // page 2
    availableEncashTypeOne: {
      name : 'availableEncashTypeOne',
      Label: '',
    },
    availableEncashTypeTwo: {
      name : 'availableEncashTypeTwo',
      Label: '',
    },
    availableEncashTypeThree: {
      name : 'availableEncashTypeThree',
      Label: '',
    },
    availableEncashTypeFour: {
      name : 'availableEncashTypeFour',
      Label: '',
    },
    EncashTypeOne: {
      name : 'EncashTypeOne',
      Label: '',
    },
    EncashTypeTwo: {
      name : 'EncashTypeTwo',
      Label: '',
    },
    EncashTypeThree: {
      name : 'EncashTypeThree',
      Label: '',
    },
    EncashTypeFour: {
      name : 'EncashTypeFour',
      Label: '',
    },
    availableInNoticeTypeOne: {
      name : 'availableInNoticeTypeOne',
      Label: '',
    },
    availableInNoticeTypeTwo: {
      name : 'availableInNoticeTypeTwo',
      Label: '',
    },
    availableInNoticeTypeThree: {
      name : 'availableInNoticeTypeThree',
      Label: '',
    },
    availableInNoticeTypeFour: {
      name : 'availableInNoticeTypeFour',
      Label: '',
    },
    returnedOne: {
      name: 'returnedOne',
      label: ''
    },
    returnedTwo: {
      name: 'returnedTwo',
      label: ''
    },
    returnedThree: {
      name: 'returnedThree',
      label: ''
    },
    returnedFour: {
      name: 'returnedFour',
      label: ''
    },
    duesClearedOne: {
      name: 'duesClearedOne',
      label: ''
    },
    duesClearedTwo: {
      name: 'duesClearedTwo',
      label: ''
    },
    duesClearedThree: {
      name: 'duesClearedThree',
      label: ''
    },
    duesClearedFour: {
      name: 'duesClearedFour',
      label: ''
    }
  }
};

export default formModel