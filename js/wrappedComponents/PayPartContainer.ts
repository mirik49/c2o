import {connect} from 'react-redux';
import {getRegion, initFullPay, setActionData} from "../store/index/actions";
import PayPart from "../components/index/PayPart";

const mapDispatchToProps = {
    setActionData,
    getRegion,
    initFullPay
};
export default connect(state=>state, mapDispatchToProps)(PayPart);
