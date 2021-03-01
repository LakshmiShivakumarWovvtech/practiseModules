import {View, Text} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUsers} from './actions/UsersActions';
import {Body, Card, CardItem} from 'native-base';

class Users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const {users} = this.props.users;
    console.log(users);

    return (
      <View>
        {users.map((u) => (
          <React.Fragment key={u.id}>
            <Card>
              <CardItem>
                <Body>
                  <Text>Name :{u.name}</Text>
                  <Text>User Name:{u.username}</Text>
                  <Text>Address:{u.address.street}</Text>
                </Body>
              </CardItem>
            </Card>
          </React.Fragment>
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({users: state.users});

export default connect(mapStateToProps, {getUsers})(Users);
