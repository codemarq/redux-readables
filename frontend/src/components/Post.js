import React from 'react'
import { Glyphicon, Button, ButtonGroup, ButtonToolbar, PanelGroup, Panel } from 'react-bootstrap/lib'

const Post = (props) => {
  const { posts, openNewComment } = props
  
  return (
    <PanelGroup>
    { posts.map(post => (
      <Panel 
        key={post.id} 
        bsStyle='primary'
        header={<h2>{post.title}</h2>}
        footer={
          <ButtonToolbar>
          <Button onClick={openNewComment}><Glyphicon glyph="comment"/></Button>
          <ButtonGroup>
          <Button><Glyphicon glyph="thumbs-up"/></Button>
          <Button disabled><span>{post.voteScore}</span></Button>
          <Button ><Glyphicon glyph='thumbs-down'/></Button>
          </ButtonGroup>
          </ButtonToolbar>
        }>
        <p>By: {post.author}</p>
        <p>{post.body}</p>
      </Panel>
      ))}
    </PanelGroup>
  )
}

export default Post