import { Box, FlexBox } from '../base/Box';
import { CloseIcon } from '../base/Icons';
import { IconButton } from '../base/Buttons';
import { removeNotification } from '../../actions/notifications';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const NotificationContainer = styled(Box)`
  background-color: var(--neutral-bg-color, #eaeaea);
  border-radius: 0.5rem;
  color: var(--neutral-color, #222222);
  height: 100%;
  opacity: 0;
  padding: 0.5rem 0.75rem;
  transition: opacity 0.3s cubic-bezier(0.75, 0.43, 0.73, 0.67), transform 0.3s ease-in-out;
  width: 100%;
  transform: translateY(200px);

  ${({ isError }) =>
    isError &&
    css`
      background-color: var(--danger-bg-color);
      color: var(--danger-color);
    `}

  ${({ isEntering }) =>
    isEntering &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}

  @media screen and (min-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

const StandardNotification = ({ onDismiss, text }) => (
  <FlexBox alignItems="center" justifyContent="space-between">
    <div>{text}</div>

    <IconButton onClick={onDismiss}>
      <CloseIcon />
    </IconButton>
  </FlexBox>
);

StandardNotification.propTypes = {
  onDismiss: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

function Notification({ notification }) {
  const [isEntering, setIsEntering] = useState(false);
  const { Component, isError, props } = notification;
  const dispatch = useDispatch();

  useEffect(() => {
    setIsEntering(true);
  }, []);

  const handleDismissClick = () => {
    setIsEntering(false);

    setTimeout(() => dispatch(removeNotification(notification.key)), 500);
  };

  return (
    <NotificationContainer
      className="notification"
      isEntering={isEntering}
      isError={isError}
      mt={2}
    >
      {Component ? (
        <Component {...props} onDismiss={handleDismissClick} />
      ) : (
        <StandardNotification {...props} onDismiss={handleDismissClick} />
      )}
    </NotificationContainer>
  );
}

Notification.propTypes = {
  notification: PropTypes.shape({
    Component: PropTypes.element,
    isError: PropTypes.bool,
    key: PropTypes.number,
    props: PropTypes.any,
  }).isRequired,
};

export default Notification;
