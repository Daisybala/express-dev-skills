const skills = [
    {id: 1, skill: 'Python',level: 'beginner'},
    {id: 2, skill: 'JavaScript',level: 'beginner'},
    {id: 3, skill: 'HTML',level: 'Advanced'},
    {id: 4, skill: 'CSS',level: 'Advanced'}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };

  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.level = 'beginner';
    console.log(skill);
    skills.push(skill);
  }

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
  