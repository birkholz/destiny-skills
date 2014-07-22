function mouseXY() {
	var X = event.clientX;
	var Y = event.clientY;
	 
	document.getElementById("tooltip").style.top= Y - document.getElementById("tooltip").clientHeight;
	document.getElementById("tooltip").style.left=X + 20;
}
window.onload=mouseXY;
 
function SkillCtrl($scope) {
	$scope.all_classes = classes;
	$scope.setClass = function(cls) {
		$scope.current_class = cls;
		$scope.stats = $scope.current_class.stats;
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
	};
	$scope.setClass(classes[2]);
	$scope.tooltip = {
		name: '',
		description: '',
		binding: ''
	};
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
	$scope.toggleSkill = function(row, col) {
		var skill = $scope.current_class.skills[row][col];
		if (col==8) {
			skill.active = !skill.active;
			return true;
		}
		else if ($scope.current_class.skills[1][8].active) return true;
		
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
		if (col!=1&&col!=2&&col!=3) {
			$scope.current_class.skills[0][col].active = false;
		}
		$scope.current_class.skills[1][col].active = false;
		$scope.current_class.skills[2][col].active = false;
		if ($scope.current_class.skills[3][col])
			$scope.current_class.skills[3][col].active = false;
		$scope.current_class.skills[row][col].active = true;
	}
	$scope.getImagePath = function(i1, i2) {
		var skill = $scope.current_class.skills[i1][i2];
		if (skill.image) return skill.image;
		else return 'skill-icon.png';
	};
	$scope.calcLeft = function(width) {
		return width + 3;
	};
};