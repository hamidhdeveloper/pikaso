import { registration } from "../../api";
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