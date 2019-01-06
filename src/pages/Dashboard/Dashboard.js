import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import Sidebar from '../../components/Sidebar/Sidebar';
import OrderList from '../../components/OrderList/OrderList';
import Order from '../Order/Order';
import Topbar from '../../components/Topbar/Topbar';
import { AuthContext } from '../../contexts';
import { orderFields, specialOrderFields } from '../Order/orderFields';
import { ORDERS_BY_STATUS, SPECIAL_ORDERS_BY_STATUS } from '../../queries';
import CreateSpecialOrder from '../CreateSpecialOrder/CreateSpecialOrder';

class Dashboard extends Component {
  static contextType = AuthContext;

  state = {
    sidebarOpen: false,
  };

  handleToggleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  render() {
    if (!this.context.state.token) return <Redirect to="/" />;

    return (
      // need to add the check token
      <Layout>
        <Sidebar
          isOpen={this.state.sidebarOpen}
          onClick={this.handleToggleSidebar}
        />
        <Main>
          <Topbar
            onClick={this.handleToggleSidebar}
            email={this.context.state.email}
            userName={this.context.state.name}
          />
          <Switch>
            <Route
              exact
              path="/dashboard/specialorderform"
              component={CreateSpecialOrder}
            />
            <Route
              path="/dashboard/orders/:id"
              render={props => <Order {...props} type="order" />}
            />
            <Route
              path="/dashboard/specialorders/:id"
              render={props => <Order {...props} type="specialOrder" />}
            />
            <Route
              path="/dashboard/specialorders"
              render={props => (
                <OrderList
                  {...props}
                  query={SPECIAL_ORDERS_BY_STATUS}
                  fields={specialOrderFields}
                  type="specialOrders"
                />
              )}
            />
            <Route
              path="/dashboard/orders"
              render={props => (
                <OrderList
                  {...props}
                  query={ORDERS_BY_STATUS}
                  fields={orderFields}
                  type="customerOrders"
                />
              )}
            />
          </Switch>
        </Main>
      </Layout>
    );
  }
}

export default Dashboard;

const Layout = styled.div`
  display: block;
  min-height: 100vh;
  width: 100%;

  @media (min-width: 1000px) {
    padding-left: 255px;
  }
`;

const Main = styled.div`
  padding: 4rem 0 0 0;
  font-size: 0.9rem;
  height: 100%;

  @media (min-width: 1000px) {
    padding: 5.8rem 1.8rem;
    background-color: ${props => props.theme.backgroundColor};
    min-height: 100vh;
  }
`;
