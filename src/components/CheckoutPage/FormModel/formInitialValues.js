import fnfSettlementFormModel from './fnfSettlementFormModel';
const {
  formField: {
    dateOfResignation,
    reasonForLeaving,
    noticePeriodRequested,
    noticePeriodApproved,
    excessNoticePeriod,
    lastWorkingDate,
    resignationLetter,
    availableEncashTypeOne,
    availableEncashTypeTwo,
    availableEncashTypeThree,
    availableEncashTypeFour,
    EncashTypeOne,
    EncashTypeTwo,
    EncashTypeThree,
    EncashTypeFour,
    availableInNoticeTypeOne,
    availableInNoticeTypeTwo,
    availableInNoticeTypeThree,
    availableInNoticeTypeFour,
    returnedOne,
    returnedTwo,
    returnedThree,
    returnedFour,
    duesClearedOne,
    duesClearedTwo,
    duesClearedThree,
    duesClearedFour,
  }
} = fnfSettlementFormModel;

let initialFormValues = {
  [dateOfResignation.name]: '',
  [reasonForLeaving.name]: '',
  [noticePeriodRequested.name]: '',
  [noticePeriodApproved.name]: '',
  [excessNoticePeriod.name]: '',
  [lastWorkingDate.name]: '',
  [resignationLetter.name]: '',
  [availableEncashTypeOne.name]: false,
  [availableEncashTypeTwo.name]: false,
  [availableEncashTypeThree.name]: false,
  [availableEncashTypeFour.name]: false,
  [EncashTypeOne.name]: '',
  [EncashTypeTwo.name]: '',
  [EncashTypeThree.name]: '',
  [EncashTypeFour.name]: '',
  [availableInNoticeTypeOne.name]: false,
  [availableInNoticeTypeTwo.name]: false,
  [availableInNoticeTypeThree.name]: false,
  [availableInNoticeTypeFour.name]: false,
  [returnedOne.name] : false,
  [returnedTwo.name] : false,
  [returnedThree.name] : false,
  [returnedFour.name] : false,
  [duesClearedOne.name] : false,
  [duesClearedTwo.name] : false,
  [duesClearedThree.name] : false,
  [duesClearedFour.name] : false,
};

export default initialFormValues