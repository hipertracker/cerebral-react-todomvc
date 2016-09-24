export default function toggleTodoCompleted({input, state}) {
  const {id} = input
  const todoPath = `app.entries.${id - 1}`
  state.set(`${todoPath}.completed`, !state.get(`${todoPath}.completed`))
}
