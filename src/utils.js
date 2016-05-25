import {red500, green500, orange500, grey500} from 'material-ui/styles/colors'

const utils = {
    errorColor: red500,
    warningColor: orange500,
    successColor: green500,
    greyColor: grey500,
    getValidationColor: state=> state === 'success' ? utils.successColor : state === 'warning' ? utils.warningColor : state === 'error' ? utils.errorColor : undefined
};

export default utils;