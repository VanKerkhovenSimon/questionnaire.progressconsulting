import React, { Component } from 'react';
import GenericContext from './GenericContext';
import GenericQuestion from './GenericQuestion';

export default class GenericQuestions extends Component {
    handleClick = (data) => {
        if (this.props.handleclick) {
            this.props.handleclick(data);
        }
    }

    render() {
        return (
            <GenericContext.Consumer>
                {value => (
                    <div className="questions">
                        <table className="questions-table">
                            <tbody>
                                {value.questions.map((question, index) => (
                                    <GenericQuestion
                                        key={index}
                                        index={index}
                                        question={question}
                                        handleclick={this.handleClick}
                                        trueLabel={value.trueLabel}
                                        falseLabel={value.falseLabel}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </GenericContext.Consumer>
        );
    }
}
