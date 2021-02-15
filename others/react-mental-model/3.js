function FancyBox(children) {
    return {
      borderStyle: '1px solid blue',
      children: children
    };
  }

function FancyNameBox(user, likes, onClick) {
    return FancyBox([
      'Name: ', NameBox(user.firstName + ' ' + user.lastName),
      'Likes: ', LikeBox(likes),
      LikeButton(onClick)
    ]);
  }
  
  // Implementation Details
  
  var likes = 0;
  function addOneMoreLike() {
    likes++;
    render();
  }
  const LikeButton=(callback)=>{
      if(likes===0){
        setTimeout(callback,1000)
      }
  }
  const render=()=> FancyNameBox(
    { firstName: 'Sebastian', lastName: 'Markbåge' },
    likes,
    addOneMoreLike
  );
 
  // Init
   render()