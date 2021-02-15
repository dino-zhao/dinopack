function NameBox(name) {
    return { fontWeight: 'bold', labelContent: name };
}

function FancyBox(children) {
    return {
      borderStyle: '1px solid blue',
      children: children
    };
  }
  
  function UserBox(user) {
    return FancyBox([
      'Name: ',
      NameBox(user.firstName + ' ' + user.lastName)
    ]);
  }
  console.log(UserBox({ firstName: 'Sebastian', lastName: 'Markbåge' }))