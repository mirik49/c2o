import {connect} from 'react-redux'
import Success from "../js/components/PaymentSuccess";
import {getDataAfterPay, setActionData} from "../js/store/index/actions";

const mapDispatchToProps = {
    getDataAfterPay,
    setActionData
};

export default connect(state=>state, mapDispatchToProps)(Success);
