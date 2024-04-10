const skills = [
    {id: 1, skill: 'Python',level: 'beginner'},
    {id: 2, skill: 'JavaScript',level: 'beginner'},
    {id: 3, skill: 'HTML',level: 'Advanced'},
    {id: 4, skill: 'CSS',level: 'Advanced'}
  ];
	
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    // URL params are strings - convert to a number
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding an object within an array
    return skills.find(skill => skill.id === id);
  }
	
  function getAll() {
    return skills;
  }
  