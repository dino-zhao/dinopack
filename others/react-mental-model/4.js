function memoize(fn) {
    var cachedArg;
    var cachedResult;
    return function(arg) {
      if (cachedArg === arg) {
        return cachedResult;
      }
      cachedArg = arg;
      cachedResult = fn(arg);
      return cachedResult;
    };
  }
  
  var MemoizedNameBox = memoize(NameBox);
  
function NameBox(name) {
//标记是否执行
  console.log('正在执行')
  return { fontWeight: 'bold', labelContent: name };
}

function FancyBox(children) {
  return {
    borderStyle: '1px solid blue',
    children: children
  };
}

function FancyNameBox(user, likes, onClick) {
    return FancyBox([
      'Name: ', MemoizedNameBox(user.firstName + ' ' + user.lastName),
      'Likes: ', likes,
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
        setTimeout(callback,3000)
      }
      return 'fakeBtn'
  }
  const render=()=>console.log(FancyNameBox(
    { firstName: 'Sebastian', lastName: 'Markbåge' },
    likes,
    addOneMoreLike
  )) ;
 
  // Init
   render()