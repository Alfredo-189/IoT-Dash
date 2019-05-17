import {
    withFormik
} from "formik";
import * as Yup from "yup";

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        email: Yup.string().required('Please Enter Email'),
        password: Yup.string().required('Please Enter Password'),
    }),
    handleSubmit: (values) => {},
    displayName: 'CustomValidationForm',
    enableReinitialize:true,
});

export default formikEnhancer;