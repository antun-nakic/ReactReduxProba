import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInputChange, addWordToSentence } from "./sentenceSlice";

export class SentenceComposerKlasni extends Component {
  constructor(props) {
    super(props);
    this.referencaInputa = React.createRef(null);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addWordToSentence();
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type='text'
            ref={this.referencaInputa}
            onChange={() => {
              this.props.handleInputChange(this.referencaInputa.current.value);
            }}
            value={this.props.input}></input>
        </form>
        <dl>
          <dt>Trentuna rečenica</dt>
          <dd>{this.props.totalSentence}</dd>
        </dl>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  input: state.sentence.input,
  totalSentence: state.sentence.totalSentence,
});

const mapDispatchToProps = {
  handleInputChange,
  addWordToSentence,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SentenceComposerKlasni);
