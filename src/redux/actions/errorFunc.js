export default function checkErr(error, setLoading, toastAlert) {
    if(error?.response?.status === 400) {
        setLoading(false);
        if(error?.response?.data?.isOtpMessage) {

        } else if(error?.response?.data?.isUserExistsMessage) {

        } else if(error?.response?.data?.isPasswordMessage) {

        } else if(error?.response?.data?.userDoesNotExistMessage) {
            
        } else if(error?.response?.data?.isMailServiceMessage) {

        }
    } else {
        setLoading(false);
        
    }
}