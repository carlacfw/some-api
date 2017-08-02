import request from 'superagent'

const nasaUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=START_DATE&end_date=END_DATE&api_key=API_KEY'

export function seeAsteroid (url, callback) {
  request
  .get(url)
  .query({api_key: '3EqkBoL9RHKZtMIby3gJn8tNyJB7rmrilIu4iY6B'})
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })

}
