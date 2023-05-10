import { errorToast } from "../../components/pages/toast/Toast";

export default function checkErr(error, setLoading) {
    setLoading(false);
    if(error?.response?.status === 400) {
        errorToast('Invalid Parameters');
    } else if(error?.response?.status === 403) {
        errorToast('Not Authorized!');
    } else {
        errorToast('Something went wrong!');
    }
}