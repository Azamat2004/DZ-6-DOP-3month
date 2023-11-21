let users = [
    {id: 1, name: "Aza"},
    {id: 2, name: "Nurs"},
    {id: 3, name: "Beka"}
  ];
  
  let filteredUsers = users.filter(user => user.id > 1);
  
  console.log(filteredUsers);