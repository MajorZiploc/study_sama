import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FlipCard from 'react-native-flip-card';
import Icon from 'react-native-vector-icons/AntDesign';
import OurModal from './OurModal';

export const Gray300 = '#E0E0E0'
export const Gray100 = '#F5F5F5'
export const Gray50 = '#FAFAFA'
export const White = '#ebede9'
export const Red = '#CE1126'
export const Green = '#007A3D'

export const { width, height } = Dimensions.get('window');

/**
 * @typedef {import('../interfaces').StudyCard} StudyCard
 */

/**
 * @param {{cardData: StudyCard, idx: number, cardCount: number}} props
 * @returns {React.ReactElement}
 */
function StudyCard(props) {
  const { cardData, idx, cardCount } = props;
  /** @type {import('../interfaces').useState<boolean>} */
  const [modalVisibleQuestionInfo, setModalVisibleQuestionInfo] = useState(false);

  const onPressQuestion = () => {
    console.log('modalVisibleQuestionInfo');
    console.log(modalVisibleQuestionInfo);
    setModalVisibleQuestionInfo(true);
  };

  /** @type {(text: string) => any} */
  const calcFontSize = (text) => {
    console.log('text.length');
    console.log(text.length);
    return {fontSize: Math.max(...[25 - Math.floor(text.length / 100), 1])};
  };

  const _setModalVisibleQuestionInfo = (b) => {
    return (async () => {
      setModalVisibleQuestionInfo(b);
    })();
  };

  const messageQuestion = (<View>
    <Text style={styles.questionInfoTitle}>
      How to study:
    </Text>
  </View>)

  const subMessageQuestion = (<View>
    <Text style={styles.questionInfoBody}>
      Tap the flashcard to flip it
    </Text>
    <Text style={styles.questionInfoBody}>
      Swipe the flashcard to the left to go to next card
    </Text>
    <Text style={styles.questionInfoBody}>
      Swipe the flashcard to the right to go to next card
    </Text>
    <Text style={styles.questionInfoBody}>
      Session loops infinitely
    </Text>
    <Text style={styles.questionInfoBody}>
      Tap back to decks view to pick another deck or to reshuffle this deck
    </Text>
  </View>);

  if (!cardData) return <></>;
  return (
    <ScrollView>
      <OurModal modalVisible={modalVisibleQuestionInfo} setModalVisible={_setModalVisibleQuestionInfo} message={messageQuestion} subMessage={subMessageQuestion} style={styles.infoModal} />
      <View>
        <Text style={styles.cardStats}>{idx + 1} of {cardCount}</Text>
      </View>
      <FlipCard
        style={styles.flipCard}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
      >
        <View style={styles.flipSide}>
          <Text style={[styles.face, calcFontSize(cardData.front)]}>{cardData.front}</Text>
        </View>
        <View style={styles.flipSide}>
          <Text style={[styles.back, calcFontSize(cardData.back)]}>{cardData.back}</Text>
        </View>
      </FlipCard>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.questionButton}
          onPressOut={onPressQuestion}
        >
          <Icon name="questioncircle" size={25} color="#000000" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flipCard: {
    backgroundColor: '#e0e7e4',
    alignItems: 'center',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    width: width - 20,
    height: height - 200,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 0,
  },
  flipSide: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  face: {
    fontSize: 25,
    textAlign: 'center',
    width: width - 40,
    color: Red,
  },
  back: {
    textAlign: 'center',
    width: width - 40,
    color: Green,
  },
  cardStats: {
    color: '#000000',
  },
  footer: {
    marginLeft: 'auto',
    marginRight: 8,
  },
  questionButton: {
    marginLeft: 10,
    padding: 5,
  },
  questionInfoTitle: {
    color: '#000000',
    fontSize: 16,
  },
  questionInfoBody: {
    color: '#000000',
    fontSize: 14,
  },
});

export default StudyCard;
