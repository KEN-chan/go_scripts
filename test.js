import React, { Component } from 'react';
import Button from 'material-ui/Button/Button';
import LockIcon from 'material-ui-icons/Lock';
import ArrowForwardIcon from 'material-ui-icons/ArrowForward';
import { View, Text, StyleSheet } from 'react-native';
import theme from './../../theme';
import { Avatar } from 'react-native-elements';

export default class TargetUserChatBubble extends Component {
  handleAvatarClick = () => {
    this.props.onAvatarClick();
  };

  render() {
    const { text, locked, avatarPictureUrl, onUnlock } = this.props;

    const chatText = locked
      ? 'Hi, lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae inventore ab libero excepturi recusandae omnis error'
      : text;

    return (
      <View className={classes.root}>
        <View className={classes.wrapper}>
          <View className={classes.left}>
            <Avatar
              className={classes.avatar}
              onClick={this.handleAvatarClick}
              src={avatarPictureUrl}
            />
          </View>
          <View className={classes.bubble}>
            <Typography
              className={locked ? classes.blurredText : classes.chatText}
            >
              {chatText}
            </Typography>
            {locked && (
              <View className={classes.unlockAction}>
                <View className={classes.unlockButtonWrapper}>
                  <Button
                    onClick={onUnlock}
                    className={classes.unlockButton}
                    color="primary"
                  >
                    <LockIcon className={classes.leftIcon} />
                    Unlock Message
                    <ArrowForwardIcon className={classes.rightIcon} />
                  </Button>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing.unit / 2,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '20%',
    minWidth: '10%',
  },
  left: {
    paddingRight: theme.spacing.unit / 2,
    alignSelf: 'flex-end',
  },
  avatar: {
    width: 32,
    height: 32,
  },
  bubble: {
    position: 'relative',
    padding: theme.spacing.unit * 1.5,
    borderRadius: theme.spacing.unit * 1.5,
    borderBottomLeftRadius: 0,
    backgroundColor: '#EEE',
  },
  lockedChatText: {
    // whiteSpace: 'pre',
    visibility: 'hidden',
    minHeight: '2em',
    minWidth: '180px',
  },
  blurredText: {
    color: 'transparent',
    textShadow: '0 0 5px rgba(0,0,0,0.5)',
  },
  unlockAction: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  unlockButtonWrapper: {
    textAlign: 'center',
  },
  unlockButton: {
    borderRadius: 20,
    backgroundColor: '#e91e63',
    color: '#fff',
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});
