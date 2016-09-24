import _ from 'lodash'

export default function toggleEntryCompleted({input, state}) {
  const {id, completed} = input
  const entries = state.get('app.entries')
  const newEntries = _.map(entries, entry => {
    if (entry.id === id) return {...entry, completed: !completed}
    return entry
  })
  state.set('app.entries', newEntries)
}
