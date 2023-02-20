import React from 'react';

export default function Icon(props) {
  return (
    <i className={`fa fa-${props.icon}`} style={{display: props.show ? 'inline-block' : 'none'}} />
  );
}
