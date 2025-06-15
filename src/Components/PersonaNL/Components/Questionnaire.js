import React, { Component } from 'react';
import GenericHeader from '../../../common/GenericHeader';
import GenericContext from '../../../common/GenericContext';
import GenericQuestions from '../../../common/GenericQuestions';
import GenericAnswer from '../../../common/GenericAnswer';
import data from '../../../data/personaNL';

export default class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = data;
    this.handleAddPoint = this.handleAddPoint.bind(this);
  }

  handleAddPoint(data) {
    let questions = this.state.questions;
    let categories = this.state.categories;
    const qIndex = questions.findIndex(q => q.id === parseInt(data.question.id));
    if (qIndex > -1) {
      questions[qIndex].completed = true;
      questions[qIndex].value = (questions[qIndex].value || 0) + data.value;
      const cIndex = categories.findIndex(c => c.id === parseInt(data.question.categoryId));
      if (cIndex > -1) {
        categories[cIndex].value += data.value;
      }
    }
    this.setState({ questions, categories });
  }

  render() {
    return (
      <GenericContext.Provider value={this.state} className="survey">
        <GenericHeader />
        <GenericQuestions handleclick={this.handleAddPoint} />
        <GenericAnswer message={this.state.answerMessage} />
      </GenericContext.Provider>
    );
  }
}
