var teoria = require('teoria');
var _ = require('lodash');

function getRandomNote(){
	return teoria.note.fromKey(_.sample(_.range(12)));
};

function getRandomScaleName(){
	return _.sample(teoria.Scale.KNOWN_SCALES);
};

function getRandomScale(){
	return getRandomNote().scale(getRandomScaleName());
};

function patternizer(num){
	return _.shuffle(_.range(num));
};

// map scale.get over array of note positions (i.e., pattern)
// truncate...where?