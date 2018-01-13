const mongoose = require('mongoose');

module.exports.getSkills = (req, res) => {
    const Skills = mongoose.model('skills');
    
        const frontendSkills = new Promise(resolve(Skills.find({type: 1}))
    );
        const backendSkills = new Promise(resolve(Skills.find({type: 2}))
    );
        const workflowSkills = new Promise(resolve(Skills.find({type: 3}))
    );
    
    Promise.all([frontendSkills, backendSkills, workflowSkills]).then(items => {
        res.json({ skills : items })  
    });
};
