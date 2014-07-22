function mouseXY() {
	var X = event.clientX;
	var Y = event.clientY;
	var height = document.getElementById("tooltip").clientHeight;
	var width = document.getElementById("tooltip").clientWidth;
	document.getElementById("tooltip").style.top= Y - height - 10;
	document.getElementById("tooltip").style.left=X + 30;
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
	};
	$scope.setClass(classes[0]);
	$scope.tooltip = {
		name: '',
		description: '',
		binding: ''
	};
	$scope.locked = false;
	$scope.showSkill = function(i1, i2) {
		var skill = $scope.current_class.skills[i1][i2];
		if (!skill.empty)
			$scope.tooltip = skill;
		if (!skill.active && skill.buffs) {
			// $scope.buffs = skill.buffs;
		}
	};
	$scope.clearTooltip = function() {
		$scope.tooltip = {name:'',description:'',binding:''};
		$scope.buffs = {
			armor: 0,
			recovery: 0,
			agility: 0
		};
	};

	deactivateBuffs = function(skill) {
		if (skill.active && skill.buffs) {
			$scope.stats.armor -= skill.buffs.armor;
			$scope.stats.recovery -= skill.buffs.recovery;
			$scope.stats.agility -= skill.buffs.agility;
		}
	}

	$scope.toggleSkill = function(row, col) {
		var skill = $scope.current_class.skills[row][col];
		if (col==8) {
			skill.active = !skill.active;
			$scope.locked = skill.active;
			return true;
		}
		else if ($scope.current_class.skills[1][8].active) return true;
		
		for (var ii=0;ii<3;ii++) {
			if (ii != row && $scope.current_class.skills[ii][col]) {
				deactivateBuffs($scope.current_class.skills[ii][col]);
				if (ii==0&&col!=1&&col!=2&&col!=3||ii!=0)
					$scope.current_class.skills[ii][col].active = false;
			}
		}

		if (!skill.active && skill.buffs) {
			$scope.stats.armor += skill.buffs.armor;
			$scope.stats.recovery += skill.buffs.recovery;
			$scope.stats.agility += skill.buffs.agility;
			$scope.buffs = {armor: 0, recovery: 0, agility: 0};
		}
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