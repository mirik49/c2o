import {connect} from 'react-redux'
import IndexContainer from "../js/components/index/Index";
import {getRegion, getUserData, sendMessage, setActionData} from "../js/store/index/actions";

const mapDispatchToProps = {
    getUserData,
    setActionData,
    getRegion,
    sendMessage
}

export default connect(state=>state, mapDispatchToProps)(IndexContainer);
