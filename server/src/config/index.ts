const ORIGIN = 'http://localhost:3000/';
export const DB_ENDPOINT = 'mongodb://slavals:paqura616@ds333098.mlab.com:33098/dashboard';

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
