import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tabs, Tab } from "material-ui/Tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderColumn,
  TableRowColumn,
} from "material-ui/Table";

import * as actions from "../../actions/places";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
  content: {
    flex: 6,
  },
  side: {
    flex: 2,
  },
};

const PlaceHeader = (props) => {
  const { place } = props;
  return (
    <div>
      <img src={place.image.large} alt={place.name} />
    </div>
  );
};

const Overview = (props) => {
  const { place } = props;
  return (
    <div>
      <h2>Overview about {place.name}</h2>
      <p>{place.description}</p>
    </div>
  );
};

const Schedule = (props) => {
  const rows = props.place.schedules.map((schedule) => {
    return (
      <TableRow key={schedule.id}>
        <TableRowColumn>{schedule.start_date}</TableRowColumn>
        <TableRowColumn>{schedule.max_users}</TableRowColumn>
        <TableRowColumn>{schedule.max_users}</TableRowColumn>
        <TableRowColumn>{schedule.price}</TableRowColumn>
        <TableRowColumn><a>Join</a></TableRowColumn>
      </TableRow>
    );
  });
  return (
    <div>
      <Table multiSelectable={false}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Date</TableHeaderColumn>
            <TableHeaderColumn>Limit</TableHeaderColumn>
            <TableHeaderColumn>Remain</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn />
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} stripedRows>
          {rows}
        </TableBody>
      </Table>
    </div>
  );
};

const Review = (props) => {
  return (
    <div>Review</div>
  );
};

const Map = (props) => {
  return (
    <div>Map</div>
  );
};

const Content = (props) => {
  return (
    <div style={styles.content}>
      <Tabs>
        <Tab label="Overview">
          <Overview {...props} />
        </Tab>
        <Tab label="Schedule" onActive={props.fetchSchedules}>
          <Schedule {...props} />
        </Tab>
        <Tab label="Reviews">
          <Review {...props} />
        </Tab>
        <Tab label="Map">
          <Map {...props} />
        </Tab>
      </Tabs>
    </div>
  );
};

class PlacePage extends React.Component {
  componentWillMount() {
    const { slug } = this.props.match.params;
    this.props.actions.getPlace(slug);
  }
  fetchSchedules = () => {
    const { slug } = this.props.match.params;
    this.props.actions.getSchedules(slug);
  }
  render() {
    const place = this.props.places.active;
    if (!place) {
      return null;
    }
    return (
      <div>
        <PlaceHeader place={place} />
        <div style={styles.container}>
          <Content
            {...this.props}
            place={place}
            fetchSchedules={this.fetchSchedules}
          />

          <div style={styles.side}>
            Side Content
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({ actions: bindActionCreators(actions, dispatch) }),
)(PlacePage);
