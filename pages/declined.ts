import {connect} from 'react-redux'
import Declined from "../js/components/PaymentDeclined";
import {getDataAfterPay} from "../js/store/index/actions";

const mapDispatchToProps = {
    getDataAfterPay
};

export default connect(state=>state, mapDispatchToProps)(Declined);
