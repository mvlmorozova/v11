const showInfo = (str) => {
    const lines = str.trim().split('\n').slice(1);
    const data = lines.map((line) => line.split(','));
    // 1 step
    console.log(`Count: ${lines.length}`);
    // 2 step
    const continents = [...new Set(data.map((row) => row[2]))].join(', ');
    console.log(`Continents: ${continents}`);
    // step 3
    const monolangs = data.filter((row) => Number(row[4]) === 1).length;
    console.log(`Amount of languages with 1 country: ${monolangs}`);
    // step 4
    // most popular languages
    const mostPopular = data.map((row) => ({
      lang: row[0],
      speakers: Number(row[1]),
    }));
    // eslint-disable-next-line
    const mostLanguage = mostPopular.reduce((max, language) => language.speakers > max.speakers ? language : max,).lang;
    console.log(`The most popular language: ${mostLanguage}`);
    // step 5
    const complexityCounter = data.reduce((acc, row) => {
      const complexity = row[3];
      acc[complexity] = (acc[complexity] || 0) + 1;
      return acc;
    }, {});
    const complexityReturn = Object.entries(complexityCounter)
      .map(([key, value]) => `${key}: ${value}`)
      .join(', ');
    console.log(`Complexity: ${complexityReturn}`);
  }

export default showInfo;