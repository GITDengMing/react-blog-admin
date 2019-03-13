import React ,{Component}from 'react';
import BasicLayout from '../../layouts/BasicLayout';
import {connect} from 'react-redux';
import LoginCherker from '../../hoc/LoginChecker';
import {Route,Switch} from 'react-router-dom';

class Home extends Component {
    componentWillMount(){
    }
    componentDidMount(){
    }
    render(){
        let {auth_user} = this.props.auth;
        return (
            <LoginCherker auth_user={auth_user}>
                <BasicLayout>
                    <Switch>
                        <Route exact path="/" component={ () => <div>这里是首页</div> } />
                        <Route path="/a" component={ () => <div>这里是a</div> } /> 
                    </Switch>
                </BasicLayout>
            </LoginCherker>   
        );
    }
}
const mapStateToProp = (state) => {
    return state;
};

const mapDispatchToProp = (dispatch, ownProps) => {  
    return {
    }
};
export default connect(mapStateToProp,mapDispatchToProp)(Home);
