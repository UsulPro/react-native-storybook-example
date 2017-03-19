import React from 'react';
import { View, Text } from 'react-native';
/**
 * A well documented button component for react
 */
const ButtonDocs = ({ disabled, label, style, onClick }) => (
  <View>
    <Text>g</Text>
  </View>
);

ButtonDocs.displayName = 'ButtonDocs';
ButtonDocs.propTypes = {
  /**
   * Label used on the button
   */
  label: React.PropTypes.string.isRequired,
  /**
   * Style of the button as an inline style object
   */
  style: React.PropTypes.object,
  /**
   * Sets disabled flag on the button component
   */
  disabled: React.PropTypes.bool,
  /**
   * Click event handler function (receives an event)
   */
  onClick: React.PropTypes.func,
};
ButtonDocs.defaultProps = {
  disabled: false,
  label: "Submit"
};

export default ButtonDocs;
