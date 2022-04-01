// import * as Yup from 'yup';
// import moment from 'moment';
// import formModel from './fnfSettlementFormModel';
// const {
//   formField: {
//     dateOfResignation,
//     reasonForLeaving,
//     noticePeriodRequested,
//     noticePeriodApproved,
//     excessNoticePeriod,
//     lastWorkingDate,
//     resignationLetter,

//     availableEncashTypeOne,
//     availableEncashTypeTwo,
//     availableEncashTypeThree,
//     availableEncashTypeFour,
//     EncashTypeOne,
//     EncashTypeTwo,
//     EncashTypeThree,
//     EncashTypeFour,
//     availableInNoticeTypeOne,
//     availableInNoticeTypeTwo,
//     availableInNoticeTypeThree,
//     availableInNoticeTypeFour,

//     duesClearedTypeOneOne,
//     duesClearedTypeOneTwo,
//     duesClearedTypeOneThree,
//     duesClearedTypeOneFour,

//     returnedOne,
//     returnedTwo,
//     returnedThree,
//     returnedFour,
//     duesClearedOne,
//     duesClearedTwo,
//     duesClearedThree,
//     duesClearedFour
//   }
// } = formModel;

// const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

// export default [
//   Yup.object().shape({
//     [resignationLetter.name]: Yup.string().required(`${resignationLetter.requiredErrorMsg}`),
//     [reasonForLeaving.name]: Yup.string()
//       .nullable()
//       .required(`${reasonForLeaving.requiredErrorMsg}`),
//     [noticePeriodRequested.name]: Yup.string()
//       .required(`${noticePeriodRequested.requiredErrorMsg}`)
//       .test(
//         'len',
//         `${noticePeriodRequested.invalidErrorMsg}`,
//         val => val && val.length === 5
//       ),
//       [lastWorkingDate.name]: Yup.string()
//       .nullable()
//       .required(`${lastWorkingDate.requiredErrorMsg}`)
//       .test('lastWorkingDate', lastWorkingDate.invalidErrorMsg, val => {
//         if (val) {
//           const startDate = new Date();
//           const endDate = new Date(2050, 12, 31);
//           if (moment(val, moment.ISO_8601).isValid()) {
//             return moment(val).isBetween(startDate, endDate);
//           }
//           return false;
//         }
//         return false;
//       }),
//   }),
//   Yup.object().shape({

//   })
// ];
