import React from 'react';
import { PageHeader, Form, FormGroup, Col, Button, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class UserEdit extends React.Component {
  //current form type: add or edit
  form_type;

  constructor(props) {
    super(props);

    //ste the current form type
    this.form_type = (props.initialValues.id > 0) ? "edit" : "add";
  }

  render() {
    return(
      <div>
        <PageHeader>{'edit'===this.form_type ? 'User edit' : 'User add'}</PageHeader>
        <Form horizontal>
          <Field name="username" component={UserEdit.renderUsername}/>
          <Field name="job" component={UserEdit.renderJob}/>
          <FormGroup>
            <Col smOffset={2} sm={2}>
              <Button type="submit">Save User</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }

  static renderUsername(props) {
  //  console.log(props)
    return(
      <FormGroup>
        <Col sm={2}>Username</Col>
        <Col sm={8}>
          <FormControl {...props.input} id="username" type="text"
            placeholder="Username"/>
        </Col>
      </FormGroup>
    );
  }
  static renderJob(props) {
    return(
      <FormGroup>
        <Col sm={2}>Job</Col>
        <Col sm={8}>
          <InputGroup>
            <FormControl {...props.input} id="job" type="text"
              placeholder="Job"/>
            <InputGroup.Addon>
              <Glyphicon glyph="briefcase"/>
            </InputGroup.Addon>
          </InputGroup>
        </Col>
      </FormGroup>
    );
  }
}
//decorate the form component, required with redux-form
UserEdit = reduxForm({
  form: 'user_edit',
})(UserEdit);

//export the connected class
function mapStateToPorps(state,own_props) {
  //console.log(state.users.list)
  //set the form data
  let form_data = {
    id: 0,
    username: '',
    job: '',
  };
  for(const user of state.users.list) {
     console.log(user)
    // console.log(user)
    if(user.id === Number(own_props.match.params.id)) {
      form_data = user;
      break;
    }
  }
  //pass the state values
  return {
    initialValues: form_data,
  }
}
export default connect(mapStateToPorps)(UserEdit);
