import { createCard, getCards, omitTemporaryFields } from '../card';
import { CardState, Card, QueryCard, CardField } from '../../components/Cards/Cards.entities';

describe('createCard', () => {
  it('should create a course with received title', () => {
    const courseData = {
      id: 'testId',
      title: 'new title',
    };

    const actual = createCard(courseData.title, courseData.id, '1');

    const expected: Card = {
      id: courseData.id,
      title: courseData.title,
      description: '',
      state: CardState.Open,
      boardId: '1',
    };

    expect(actual).toEqual(expected);
  });
});

describe('getCards', () => {
  it('should return the courses with Open status', () => {
    const cards: Card[] = [
      { id: '1', title: 'title1', description: 'd1', state: CardState.Open, boardId: '1' },
      { id: '2', title: 'title2', description: 'd2', state: CardState.Progress, boardId: '1' },
      { id: '3', title: 'title3', description: 'd3', state: CardState.Progress, boardId: '1' },
    ];

    const actual = getCards(cards)(CardState.Open);

    const expected: Card[] = [{ id: '1', title: 'title1', description: 'd1', state: CardState.Open, boardId: '1' }];

    expect(actual).toEqual(expected);
  });
});

describe('omitTemporaryFields', () => {
  it('should return course without field from fn arg', () => {
    const card: QueryCard = { id: '1', title: 'title1', description: 'd1', state: CardState.Open, __typename: 'Card', boardId: '1' };

    const actual = omitTemporaryFields(card, [CardField.id]);

    const expected = { title: 'title1', description: 'd1', state: CardState.Open,  __typename: 'Course' };

    expect(actual).toEqual(expected)
  });
});
