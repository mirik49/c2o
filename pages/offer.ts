import {connect} from 'react-redux'
import Offer from "../js/components/Offer";
import {getOffer, setActionData} from "../js/store/index/actions";

const mapDispatchToProps = {
    getOffer,
    setActionData,

};

export default connect(state=>state, mapDispatchToProps)(Offer);
