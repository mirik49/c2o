import {connect} from 'react-redux';
import {getCity, getRegion, setActionData} from "../store/index/actions";
import RegionSearch from "../components/department/RegionSearch";

const mapDispatchToProps = {
    setActionData,
    getRegion,
    getCity,
};
export default connect(state=>state, mapDispatchToProps)(RegionSearch);
