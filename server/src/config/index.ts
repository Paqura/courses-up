const ORIGIN = 'http://localhost:3000/';

const generatePath = (path: string) => {
  return ORIGIN + path;
};

export const config = {
  API_PATH: {
    courses: generatePath('courses'),
    course(id: string) {
      return generatePath('courses') + `/${id}`;
    },
  },
};
