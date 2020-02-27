import { createCard, getCards, omitTemporaryFields } from '../card';
import { CardState, Card, QueryCard, CardField, Priority } from '../../components/Board/Cards.entities';

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
      priority: Priority.Low,
    };

    expect(actual).toEqual(expected);
  });
});

describe('getCards', () => {
  it('should return the courses with Open status', () => {
    const cards: Card[] = [
      { id: '1', title: 'title1', description: 'd1', state: CardState.Open, boardId: '1', priority: Priority.Low, },
      { id: '2', title: 'title2', description: 'd2', state: CardState.Progress, boardId: '1', priority: Priority.Low, },
      { id: '3', title: 'title3', description: 'd3', state: CardState.Progress, boardId: '1', priority: Priority.Low, },
    ];

    const actual = getCards(cards)(CardState.Open);

    const expected: Card[] = [{ id: '1', title: 'title1', description: 'd1', state: CardState.Open, boardId: '1', priority: Priority.Low, }];

    expect(actual).toEqual(expected);
  });
});

describe('omitTemporaryFields', () => {
  it('should return course without field from fn arg', () => {
    const card: QueryCard = {
      id: '1',
      title: 'title1',
      description: 'd1',
      state: CardState.Open,
      boardId: '1',
      priority: Priority.Low,
      __typename: 'Card',
    };

    const actual = omitTemporaryFields(card, [CardField.id]);

    const expected: Omit<QueryCard, CardField.id> = {
      title: 'title1',
      description: 'd1',
      state: CardState.Open,
      boardId: '1',
      priority: Priority.Low,
      __typename: 'Card',
    };

    expect(actual).toEqual(expected)
  });
});
