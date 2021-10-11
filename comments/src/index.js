import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          uniqueComment="Wow, awesome work!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Charlie"
          timeAgo="Yesterday at 1:45PM"
          uniqueComment="Dude... that is so stupid.."
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Oleg"
          timeAgo="Today at 5:00AM"
          uniqueComment="Come on!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
