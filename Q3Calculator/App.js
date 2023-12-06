import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: 80,
      height: 80,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      backgroundColor: '#e0e0e0',
    },
    buttonText: {
      fontSize: 24,
    },
  });

  class Calculator extends Component {
    constructor() {
      super();
      this.state = {
        displayValue: '0',
      };
    }

    handleButtonPress = (value) => {
      if (value === 'C') {
        this.setState({
          displayValue: '0',
          operator: null,
          firstValue: '',
          nextValue: '',
        });
      } else if (/\d/.test(value)) {
        if (this.state.operator) {
          this.setState({
            nextValue: this.state.nextValue + value,
            displayValue: this.state.nextValue + value,
          });
        } else {
          this.setState({
            firstValue: this.state.firstValue + value,
            displayValue: this.state.firstValue + value,
          });
        }
      } else if (value === '=') {
        const first = parseFloat(this.state.firstValue);
        const next = parseFloat(this.state.nextValue);
        switch (this.state.operator) {
          case '+':
            this.setState({ displayValue: (first + next).toString() });
            break;
          case '-':
            this.setState({ displayValue: (first - next).toString() });
            break;
          case '*':
            this.setState({ displayValue: (first * next).toString() });
            break;
          case '/':
            this.setState({ displayValue: (first / next).toString() });
            break;
        }
      } else {
        this.setState({ operator: value });
      }
    };

    renderButton = (value) => (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.handleButtonPress(value)}
      >
        <Text style={styles.buttonText}>{value}</Text>
      </TouchableOpacity>
    );

    render() {
      return (
        <View style={styles.container}>
        <Text style={{ fontSize: 36, marginBottom: 20 }}>
          {this.state.displayValue}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          {this.renderButton('1')}
          {this.renderButton('2')}
          {this.renderButton('3')}
          {this.renderButton('+')}
        </View>
        <View style={{ flexDirection: 'row' }}>
          {this.renderButton('4')}
          {this.renderButton('5')}
          {this.renderButton('6')}
          {this.renderButton('-')}
        </View>
        <View style={{ flexDirection: 'row' }}>
          {this.renderButton('7')}
          {this.renderButton('8')}
          {this.renderButton('9')}
          {this.renderButton('*')}
        </View>
        <View style={{ flexDirection: 'row' }}>
          {this.renderButton('C')}
          {this.renderButton('0')}
          {this.renderButton('=')}
          {this.renderButton('/')}
        </View>
      </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
}
