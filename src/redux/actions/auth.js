import { login, registration , resendOtp, verify } from "../../api";
import { successToast } from "../../components/pages/toast/Toast";
import checkErr from "./error_func";

export const Registeration = async (data, setLoading, setShowVerifyForm) => {
    try {
         const result = await registration(data);
         successToast('Verification code sent!');
         setLoading(false);
         setShowVerifyForm(true);
    } catch (err) {
        checkErr(err, setLoading)
    }
}

export const Verify = async (data, setLoading,onSuccess) => {
    try {
         const result = await verify(data);
         successToast('Verification successful!');
         setLoading(false);
         onSuccess();
    } catch (err) {
        console.log("error", err);
        checkErr(err, setLoading)
    }
}

export const LoginU = async (data, setLoading,onSuccess,setShowModal) => {
    try {
        
         const result = await login(data);
         successToast('Successfully logged in!');
         setLoading(false);
         if(setShowModal){
            setShowModal(false)
         }else{
            onSuccess();
         }
    } catch (err) {
        console.log("error", err);
        checkErr(err, setLoading)
    }
}

export const ResendOtp = async (data, setLoading) => {
    try {
         const result = await resendOtp(data);
         successToast('Verification code resent!');
         setLoading(false);
    } catch (err) {
        console.log("error", err);
        checkErr(err, setLoading)
    }
}