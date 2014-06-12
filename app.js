function mouseXY() {
	var X = event.clientX;
	var Y = event.clientY;
	 
	document.getElementById("tooltip").style.top= Y - document.getElementById("tooltip").clientHeight;
	document.getElementById("tooltip").style.left=X + 20;
}
window.onload=mouseXY;
 
function SkillCtrl($scope) {
	$scope.tooltip = {
		name: '',
		description: '',
		binding: ''
	};
	$scope.stats = {
		armor: 40,
		recovery: 10,
		agility: 10,
	};
	$scope.buffs = {
		armor: 0,
		recovery: 0,
		agility: 0
	};
	$scope.debuffs = {
		armor: 0,
		recovery: 0,
		agility: 0
	}
	$scope.showSkill = function(i1, i2) {
		var skill = $scope.current_class.skills[i1][i2];
		if (!skill.empty)
			$scope.tooltip = skill;
		if (!skill.active && skill.buffs) {
			$scope.buffs = skill.buffs;
		}
		else if (skill.active && skill.buffs) {
			$scope.debuffs = skill.buffs;
		}
	};
	$scope.clearTooltip = function() {
		$scope.tooltip = {name:'',description:'',binding:''};
		$scope.buffs = {
			armor: 0,
			recovery: 0,
			agility: 0
		};
		$scope.debuffs = {
			armor: 0,
			recovery: 0,
			agility: 0
		};
	};
	$scope.toggleSkill = function(i1, i2) {
		var skill = $scope.current_class.skills[i1][i2];
		if (skill.active && skill.buffs) {
			if (skill.buffs) {
				$scope.stats.armor -= skill.buffs.armor;
				$scope.stats.recovery -= skill.buffs.recovery;
				$scope.stats.agility -= skill.buffs.agility;
				$scope.buffs = skill.buffs;
				$scope.debuffs = {armor: 0,recovery: 0,agility: 0};
			}
		}
		else if (skill.buffs) {
			$scope.stats.armor += skill.buffs.armor;
			$scope.stats.recovery += skill.buffs.recovery;
			$scope.stats.agility += skill.buffs.agility;
			$scope.buffs = {armor:0,recovery:0,agility:0};
			$scope.debuffs = skill.buffs;
		}
		skill.active = !skill.active;
	}
	$scope.getImagePath = function(i1, i2) {
		var skill = $scope.current_class.skills[i1][i2];
		if (skill.image) return skill.image;
		else return 'skill-icon.png';
	};
	$scope.calcLeft = function(width) {
		return width + 3;
	};
	$scope.all_classes = classes;
	$scope.current_class = classes[0];
	$scope.setClass = function(cls) {
		$scope.current_class = cls;
	};
};