import classNames from 'classnames';
import React from 'react';

import { bsClass, getClassSet, splitBsProps } from './utils/bootstrapUtils';

class InputGroupButton extends React.Component {
  render() {
    const { className, ...props } = this.props;
    const [bsProps, elementProps] = splitBsProps(props);

    const classes = getClassSet(bsProps);

    return (
      <span {...elementProps} className={classNames(className, classes)} />
    );
  }
}

export default bsClass('input-group-btn', InputGroupButton);
