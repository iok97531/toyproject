import React from "react";
import UserList from "./UserList";
import SearchBar from "./SearchBar";

class UserFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: "",
    };
  }
  render() {
    return (
      <div className="user-filter">
        <SearchBar handleChange={this.handleChange} />
        <UserList
          filterText={this.state.filterText}
          handleClick={this.props.handleClick}
        />
      </div>
    );
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };
}

export default UserFilter;
