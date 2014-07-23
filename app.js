function mouseXY() {
	var X = event.clientX;
	var Y = event.clientY;
	var height = document.getElementById("tooltip").clientHeight;
	var width = document.getElementById("tooltip").clientWidth;
	document.getElementById("tooltip").style.top= Y - height - 10;
	document.getElementById("tooltip").style.left=X + 30;
}
window.onload=mouseXY;

function toFixed(x) {
	var e = parseInt(x.toString().split('+')[1]);
	if (e > 20) {
	    e -= 20;
	    x /= Math.pow(10,e);
	    x += (new Array(e+1)).join('0');
	}
	return x;
}

var b64 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";

function toB64(value) {
    var out = "";
    for (var i = value.length; i > 0; i -= 6) {
        var j = Math.max(0, i - 6);
        var chunk = value.slice(j, i);
        var char = 0;
        for (var x = chunk.length - 1, y = 1; x >= 0; x -= 1, y *= 2) {
            if (chunk.charAt(x) == '1') {
                char += y;
            }
        }
        out = b64.charAt(char) + out;
    }
    return out;
}
function fromB64(value) {
    var out = '';
    for (var i = 0; i < value.length; i += 1) {
        var char = b64.indexOf(value.charAt(i));
        var chunk = "";
        while (chunk.length < 6) {
            chunk = (char % 2) + chunk;
            char = Math.floor(char / 2);
        }
        out += chunk;
    }
    return out;
}

var skillsApp = angular.module('skillsApp', []);

skillsApp.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});
 
skillsApp.controller('SkillCtrl', function($scope, $location) {
	$scope.all_classes = classes;
	$scope.setClass = function(cls) {
		$scope.current_class = cls;
		$scope.stats = $scope.current_class.stats;
		// $scope.buffs = {
		// 	armor: 0,
		// 	recovery: 0,
		// 	agility: 0
		// };
		generate_link();
	};
	$scope.tooltip = {
		name: '',
		description: '',
		binding: ''
	};
	$scope.locked = false;

	generate_link = function(){
		var output = '';
		// first digit is class
		// second digit is subclass
		// TODO: Add alternate subclasses.

		// For each row, each skill, add either 0 or 1
		for (var i in $scope.current_class.skills) {
			if (i=='$hashKey') continue;
			i = parseInt(i);
			var skill_row = $scope.current_class.skills[i];
			for (var ii in skill_row) {
				if (ii=='$$hashKey') continue;
				ii = parseInt(ii);
				output += (skill_row[ii].active ? "1" : "0");
			}
		}
		output += '00';
		output = toB64(output);
		output += $scope.current_class.index;
		$location.hash(output);
	};

	decode_link = function(){
		var input = $location.hash();
		var c_index = parseInt(input.charAt(input.length-1));
		var input = fromB64(input.substr(0, input.length-1)).split('');
		$scope.current_class = classes[c_index];
		$scope.stats = $scope.current_class.stats;

		for (var i=0;i<$scope.current_class.skills.length;i++) {
			if (i=='$hashKey') continue;
			i = parseInt(i);
			for (var ii=0;ii<$scope.current_class.skills[i].length;ii++) {
				if (ii=='$hashKey') continue;
				ii = parseInt(ii);
				if (input.shift() === '1') $scope.current_class.skills[i][ii].active = true;
				if (ii === 8 && $scope.current_class.skills[i][ii].active) $scope.locked = true;
			}
		}
	}
	
	if ($location.hash())
		decode_link();
	else {
		$scope.setClass(classes[0]);
	}

	$scope.showSkill = function(i1, i2) {
		$scope.tooltip = $scope.current_class.skills[i1][i2];
		// if (!skill.active && skill.buffs) {
		// 	$scope.buffs = skill.buffs;
		// }
	};
	$scope.clearTooltip = function() {
		$scope.tooltip = {name:'',description:'',binding:''};
		// $scope.buffs = {
		// 	armor: 0,
		// 	recovery: 0,
		// 	agility: 0
		// };
	};

	// deactivateBuffs = function(skill) {
	// 	if (skill.active && skill.buffs) {
	// 		$scope.stats.armor -= skill.buffs.armor;
	// 		$scope.stats.recovery -= skill.buffs.recovery;
	// 		$scope.stats.agility -= skill.buffs.agility;
	// 	}
	// }

	$scope.toggleSkill = function(row, col) {
		var skill = $scope.current_class.skills[row][col];
		if (col==8) {
			skill.active = !skill.active;
			$scope.locked = skill.active;
			generate_link();
			return true;
		}
		else if ($scope.current_class.skills[1][8].active) return true;
		
		// deactivate all skills in the clicked column
		for (var i=0;i<4;i++) {
			var tcol = col;
			if (row == 3 || i == 3) tcol += 1;
			if ($scope.current_class.skills[i][tcol]) {
				// If this is the jump, super, or melee column, do not disable the skill in the first row
				if (i==0 && (tcol==1||tcol==2||tcol==3)) continue;
				// deactivateBuffs($scope.current_class.skills[i][tcol]);
				$scope.current_class.skills[i][tcol].active = false;
			}
		}

		// if (!skill.active && skill.buffs) {
		// 	$scope.stats.armor += skill.buffs.armor;
		// 	$scope.stats.recovery += skill.buffs.recovery;
		// 	$scope.stats.agility += skill.buffs.agility;
		// 	$scope.buffs = {armor: 0, recovery: 0, agility: 0};
		// }
		$scope.current_class.skills[row][col].active = true;

		generate_link();
	}
	$scope.getImagePath = function(i1, i2) {
		var skill = $scope.current_class.skills[i1][i2];
		if (skill.image) return skill.image;
		else return 'skill-icon.png';
	};
	$scope.calcLeft = function(width) {
		return width + 3;
	};
});