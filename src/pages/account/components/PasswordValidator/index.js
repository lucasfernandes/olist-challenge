/* Core */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Presentational */
import { View, Text } from 'react-native';

/* Redux */
import { connect } from 'react-redux';

import styles from './styles';

class PasswordValidator extends Component {
  static propTypes = {
    validations: PropTypes.shape({
      display: PropTypes.bool,
      sixMinPassw: PropTypes.bool,
      oneUpperCase: PropTypes.bool,
      oneNumber: PropTypes.bool,
    }).isRequired,
  };

  static state = {}

  getBars = (barStep) => {
    let bars = [];

    switch (barStep) {
      case 'red':
        bars = [
          { id: 1, styles: styles.red },
          { id: 2, styles: {} },
          { id: 3, styles: {} },
        ];
        break;
      case 'orange':
        bars = [
          { id: 1, styles: styles.orange },
          { id: 2, styles: styles.orange },
          { id: 3, styles: {} },
        ];
        break;
      case 'green':
        bars = [
          { id: 1, styles: styles.green },
          { id: 2, styles: styles.green },
          { id: 3, styles: styles.green },
        ];
        break;
      default:
        bars = [{ id: 1, styles: {} },
          { id: 2, styles: {} },
          { id: 3, styles: {} },
        ];
        break;
    }

    return bars;
  }

  getBarsStep = (steps) => {
    let barStep;

    switch (steps) {
      case 2:
        barStep = 'red';
        break;
      case 3:
        barStep = 'orange';
        break;
      case 4:
        barStep = 'green';
        break;
      default:
        barStep = 'gray';
        break;
    }

    return barStep;
  };

  toogleMatches = expression => (
    expression ? styles.green : styles.red
  );

  MatchesCount = steps => steps.filter(step => step === true).length

  renderBars = (steps) => {
    const barStep = this.getBarsStep(steps);
    const bars = this.getBars(barStep);

    return (
      <View style={styles.barsContainer}>
        { bars.map(bar => (
          <View key={bar.id} style={[styles.bar, bar.styles]} />
        ))}
      </View>
    );
  };

  render() {
    const {
      display,
      sixMinPassw,
      oneUpperCase,
      oneNumber,
    } = this.props.validations;

    const steps = this.MatchesCount([display, sixMinPassw, oneUpperCase, oneNumber]);

    return (
      <View style={styles.validationContainer}>
        { this.renderBars(steps) }

        <View style={styles.messagesContainer}>
          <View style={styles.messageItem}>
            <View style={[styles.bullet, display ? this.toogleMatches(sixMinPassw) : {}]} />
            <Text style={styles.message}>
              Pelo menos 6 caracteres
            </Text>
          </View>

          <View style={styles.messageItem}>
            <View style={[styles.bullet, display ? this.toogleMatches(oneUpperCase) : {}]} />
            <Text style={styles.message}>
              Pelo menos 1 letra maiúscula
            </Text>
          </View>

          <View style={styles.messageItem}>
            <View style={[styles.bullet, display ? this.toogleMatches(oneNumber) : {}]} />
            <Text style={styles.message}>
              Pelo menos 1 número
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  validations: state.validations,
});

export default connect(mapStateToProps)(PasswordValidator);
