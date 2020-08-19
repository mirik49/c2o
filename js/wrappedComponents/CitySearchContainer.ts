import {connect} from 'react-redux';
import {getDepartment} from "../store/index/actions";
import CitySearch from "../components/department/CitySearch";

const mapDispatchToProps = {
    getDepartment
};
export default connect(state => state, mapDispatchToProps)(CitySearch);
