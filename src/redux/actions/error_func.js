import { errorToast } from "../../components/pages/toast/Toast";

export default function checkErr(error, setLoading) {
    setLoading(false);
    if(error?.response?.status === 400) {
        if(error?.response?.data?.isEmailExistsMessage) {
            errorToast('User already exists!');
        } else if(error?.response?.data?.isPasswordMessage) {
            errorToast('Password is not same!');
        } else if(error?.response?.data?.isNotUserMessage) {
            errorToast('User does not exists!');
        } else if(error?.response?.data?.isOtpMessage) {
            errorToast('Invalid OTP!');
        } else if(error?.response?.data?.isEmailServiceMessage) {
            errorToast('Problem in mail service!');
        }
        errorToast('Invalid Parameters');

    } else if(error?.response?.status === 403) {
        errorToast('Not Authorized!');
        localStorage.removeItem("token");
    } else if(error?.response?.status === 405) {
        errorToast('You Need To Subscribe!');
    } else {
        errorToast('Something went wrong!');
    }
}