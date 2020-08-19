import {connect} from 'react-redux';
import {initFullPay, setActionData} from "../js/store/index/actions";
import PayFull from "../js/components/index/PayFull";

const mapDispatchToProps = {
    setActionData,
    initFullPay
};
export default connect(state=>state, mapDispatchToProps)(PayFull);
