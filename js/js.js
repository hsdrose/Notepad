if (window.attachEvent) {
	window.attachEvent("onload", index)

} else {
	window.addEventListener("load", index)

}

function index() {
	//全局定义变量
	var oMain = document.getElementById('main');
	var oCover = document.getElementById('cover');
	var i = 0;
	var j = 0;
	//菜单事件
	var oList = document.getElementById('list');
	var oListLi = oList.getElementsByTagName('li');
	var oMenu = document.getElementById('menu');
	var oMenuDiv = oMenu.getElementsByTagName('div');
	var oMenuLi = oMenu.getElementsByTagName('li');
	//主菜单事件
	for (i = 0; i < oListLi.length; i++) {
		oListLi[i].index = i;
		//主菜单鼠标经过事件
		oListLi[i].onmouseover = function(ev) {
				var oEven = ev || event;
				oEven.cancelBubble = true;
				oListLi[this.index].style.background = "#00B7EE";
				oMenuDiv[this.index].style.display = "block";
				oMenu.style.display = "block";
			}
			//主菜单鼠标离开事件
		oListLi[i].onmouseout = function(ev) {
			var oEven = ev || event;
			oEven.cancelBubble = true;
			oListLi[this.index].style.background = "#FFFFFF";
			oMenuDiv[this.index].style.display = "none";
		}
	}
	//次级菜单事件
	for (i = 0; i < oMenuDiv.length; i++) {
		oMenuDiv[i].index = i;
		//次级菜单鼠标经过事件
		oMenuDiv[i].onmouseover = function(ev) {
				var oEven = ev || event;
				oEven.cancelBubble = true;
				oListLi[this.index].style.background = "#00B7EE";
				oMenuDiv[this.index].style.display = "block";
			}
			//次级菜单鼠标经过事件
		oMenuDiv[i].onmouseout = function(ev) {
			var oEven = ev || event;
			oEven.cancelBubble = true;
			oListLi[this.index].style.background = "#FFFFFF";
			oMenuDiv[this.index].style.display = "none";
			//菜单关闭事件
			document.onclick = function() {
				oMenu.style.display = "none";
			}
		}
	}
	//次级菜单颜色改变事件
	for (j = 0; j < oMenuLi.length; j++) {
		oMenuLi[j].index = j;
		oMenuLi[j].onmouseover = function() {
			oMenuLi[this.index].style.background = "#00B7EE";
		}
		oMenuLi[j].onmouseout = function() {
			oMenuLi[this.index].style.background = "#f5f6f7";
		}
	}

	//文件事件
	//文件打印事件
	var oPrint = document.getElementById('print');
	oPrint.onclick = function() {
			a();
		}
		//文件页面设置事件
	var oPageSize = document.getElementById('pageSize');
	var oPageSetup = document.getElementById('PageSetup');
	var oPreview = document.getElementById('preview');
	var oPage = document.getElementById('page');
	var oLf = document.getElementById('lf');
	var oLine = document.getElementById('line');
	var oTransverse = document.getElementById('transverse');
	var oPmargin = document.getElementById('pagemargin');
	var oTop = document.getElementById('top');
	var oLeft = document.getElementById('left');
	var oRight = document.getElementById('right');
	var oBottom = document.getElementById('bottom');
	var oSure = document.getElementById('sure');
	var oRemove = document.getElementById('remove');
	var oPageClose = document.getElementById('pageClose');
	//文件页面设置纸张事件
	oPageSize.onclick = function() {
			if (oPageSize.value == 'A3') {
				oPreview.style.height = 155 + 'px';
				oPreview.style.width = 106 + 'px';
			} else if (oPageSize.value == 'A4') {
				oPreview.style.height = 165 + 'px';
				oPreview.style.width = 116 + 'px';
				oPreview.style.marginTop = 60 + 'px';
			} else if (oPageSize.value == 'A5') {
				oPreview.style.height = 175 + 'px';
				oPreview.style.width = 126 + 'px';
				oPreview.style.marginTop = 50 + 'px';
			}
		}
		//文件页面设置拖拽事件
	oPageSetup.onmousedown = function(ev) {
			move(ev, oPageSetup);
		}
		//文件页面设置打开事件
	oPage.onclick = function() {
			oPageSetup.style.display = "block";
			oCover.style.display = "block";
			oPageSetup.style.left = document.body.clientWidth / 3 + 'px';
			oPageSetup.style.top = oMain.offsetHeight / 5 + 'px';
		}
		//文件页面设置确实事件
	oSure.onclick = function() {
			oPageSetup.style.display = "none";
			oCover.style.display = "none";
		}
		//文件页面设置取消事件
	oRemove.onclick = function() {
			oPageSetup.style.display = "none";
			oCover.style.display = "none";
		}
		//文件页面设置预览事件
	var newHeight;
	var nerWidth;
	oLine.onclick = function() {
		if (oPreview.offsetWidth >= 150) {
			newHeight = oPreview.offsetWidth;
			nerWidth = oPreview.offsetHeight;
			oPreview.style.height = newHeight + 'px';
			oPreview.style.width = nerWidth + 'px';
			oPreview.style.marginTop = 50 + 'px';
		}
	}
	oTransverse.onclick = function() {
		if (oPreview.offsetHeight >= 150) {
			newHeight = oPreview.offsetWidth;
			nerWidth = oPreview.offsetHeight;
			oPreview.style.height = newHeight + 'px';
			oPreview.style.width = nerWidth + 'px';
			oPreview.style.marginTop = 85 + 'px';
		}
	}
	oPmargin.onkeyup = function() {
			oLf.style.top = oTop.value + 'px'
			oLf.style.left = oLeft.value + 'px'
			oLf.style.right = oRight.value + 'px'
			oLf.style.bottom = oBottom.value + 'px'
		}
		//文件页面设置关闭按钮
	oPageClose.onmouseover = function() {

		oPageClose.style.background = "#FF0000";
	}
	oPageClose.onmouseout = function() {

		oPageClose.style.background = "#FFFFFF";
	}
	oPageClose.onclick = function(ev) {
		var oEven = ev || event;
		PageSetup.style.display = "none";
		oCover.style.display = "none";
	}

	//编辑
	//编辑撤销事件
	var oCancel = document.getElementById('cancel');
	var U = oMain.value;
	var newU;
	oCancel.onclick = function() {
			newU = oMain.value;
			oMain.value = U;
			U = newU;
		}
		//编辑查看事件
	var oFnext = document.getElementById('Fnext');
	var oFindValue = document.getElementById('findValue');
	var oFindNext = document.getElementById('findNext');
	var oLookUp = document.getElementById('lookup');
	var oLookUpBox = document.getElementById('lookupBox');
	var oCheckbox3 = document.getElementById('checkbox3');
	var oCheckbox4 = document.getElementById('checkbox4');
	var oLookUpClose = document.getElementById('lookUpClose');
	var pos;
	var sos;
	//编辑查看显示事件
	oLookUp.onclick = function() {
			oLookUpBox.style.display = "block";
			oCover.style.display = "block";
		}
		//编辑查看拖拽事件
	oLookUpBox.onmousedown = function(ev) {
			move(ev, oLookUpBox);
		}
		//编辑查找查找事件	
	oFnext.onclick = function() {
			//编辑查找向下查找事件
			if (oCheckbox3.checked == true) {
				var str = oMain.value;
				pos = str.indexOf(oFindValue.value, pos + oFindValue.value.length)
				setSelectText(oMain, pos, pos + oFindValue.value.length);
			}
			//编辑查找向上查找事件
			if (oCheckbox4.checked == true) {
				var str = oMain.value;
				sos = str.lastIndexOf(oFindValue.value, sos - oFindValue.value.length)
				setSelectText(oMain, sos, sos + oFindValue.value.length);
			}
		}
		//编辑查找下一个事件
	oFindNext.onclick = function() {
			oLookUpBox.style.display = "block";
			oCover.style.display = "block";
		}
		//编辑查找关闭按钮
	oLookUpClose.onmouseover = function() {

		oLookUpClose.style.background = "#FF0000";

	}
	oLookUpClose.onmouseout = function() {

		oLookUpClose.style.background = "#FFFFFF";
	}
	oLookUpClose.onclick = function(ev) {
		var oEven = ev || event;
		oLookUpBox.style.display = "none";
		oCover.style.display = "none";
	}

	//编辑替换事件
	var oReplace = document.getElementById('replace');
	var oReplaceBox = document.getElementById('replaceBox');
	var oReplaceValue = document.getElementById('replaceValue');
	var oRdiv = document.getElementById('Rdiv');
	var oReplaceAs = document.getElementById('replaceAs');
	var oReplacebtn = document.getElementById('Replace');
	var oAllReplace = document.getElementById('AllReplace');
	var oReplaceClose = document.getElementById('replaceClose');
	var tos;
	//编辑替换显示事件
	oReplace.onclick = function() {
			oReplaceBox.style.display = "block";
			oCover.style.display = "block";
		}
		//编辑替换拖拽事件
	oReplaceBox.onmousedown = function(ev) {
			move(ev, oReplaceBox);
		}
		//查找替换查找事件
	oRdiv.onclick = function() {
			var str = oMain.value;
			tos = str.indexOf(oReplaceValue.value, tos + oReplaceValue.value.length)
			setSelectText(oMain, tos, tos + oReplaceValue.value.length);
		}
		//查找替换替换事件
	oReplacebtn.onclick = function() {
			if (oReplaceAs.value.length != 0) {
				var str = oMain.value;
				sos = str.indexOf(oReplaceValue.value, sos + oReplaceValue.value.length)
				setSelectText(oMain, sos, sos + oReplaceValue.value.length)
				var selectT = getSelectText();
				oMain.value = oMain.value.replace(selectT, oReplaceAs.value);
			}
		}
		//查找替换全部替换事件
	oAllReplace.onclick = function() {
		if (oReplaceValue.length == 0) {
			return;
		}
		oMain.value = oMain.value.replaceAll(oReplaceValue.value, oReplaceAs.value);

	}
	String.prototype.replaceAll = function(s1, s2) {
			return this.replace(new RegExp(s1, "gm"), s2);
		}
		//查找替换关闭按钮
	oReplaceClose.onmouseover = function() {

		oReplaceClose.style.background = "#FF0000";

	}
	oReplaceClose.onmouseout = function() {

		oReplaceClose.style.background = "#FFFFFF";
	}
	oReplaceClose.onclick = function(ev) {
		var oEven = ev || event;
		oReplaceBox.style.display = "none";
		oCover.style.display = "none";
	}

	//编辑转到事件
	var oGoTo = document.getElementById('goTo');
	var oGoToBox = document.getElementById('goToBox');
	var oGoToClose = document.getElementById('goToClose');
	//编辑转到显示事件
	oGoTo.onclick = function() {
			oGoToBox.style.display = "block";
			oCover.style.display = "block";
		}
		//编辑转到拖拽事件
	oGoToBox.onmousedown = function(ev) {
			move(ev, oGoToBox);
		}
		//编辑转到关闭按钮
	oGoToClose.onmouseover = function() {

		oGoToClose.style.background = "#FF0000";
	}
	oGoToClose.onmouseout = function() {

		oGoToClose.style.background = "#FFFFFF";
	}
	oGoToClose.onclick = function(ev) {
			var oEven = ev || event;
			oGoToBox.style.display = "none";
			oCover.style.display = "none";
		}
		//编辑全选事件
	var oSelectBtn = document.getElementById('selectbtn');
	oSelectBtn.onclick = function() {
		oMain.select();
	}
	oSelectBtn.onmouseover = function() {
		oSelectBtn.style.background = "#00B7EE";
	}
	oSelectBtn.onmouseout = function() {
			oSelectBtn.style.background = "#f5f6f7"
		}
		//编辑获取时间事件
	var oTime = document.getElementById('time');
	oTime.onclick = function() {
		insertAtCursor(oMain, getNowFormatDate())
	}

	//格式
	//格式自动换行事件
	var oCheckbox1 = document.getElementById('checkbox1');
	oCheckbox1.onclick = function() {
			if (oCheckbox1.checked == true) {
				oMain.style.width = '100%';
			} else {
				oMain.style.width = '300%';
			}
		}
		//格式字体事件
	var oFont = document.getElementById('font');
	var oFamily = document.getElementById('family');
	var oFamilyP = oFamily.getElementsByTagName('p');
	var oFamilyTxt = document.getElementById('famliyTxt');
	var oXian = document.getElementById('xian');
	var oShape = document.getElementById('shape');
	var oShapeP = oShape.getElementsByTagName('p');
	var oShapeTxt = document.getElementById('shapeTxt');
	var oSize = document.getElementById('size');
	var oSizeP = oSize.getElementsByTagName('p');
	var oSizeTxt = document.getElementById('sizeTxt');
	var oConfirm = document.getElementById('confirm');
	var oAbolish = document.getElementById('abolish');
	var oTypeface = document.getElementById('typeface');
	var oFontClose = document.getElementById('fontClose');
	var S;
	var Si;
	var newW;
	var newF;
	var newS;
	var newSi;
	//字体样式事件
	for (i = 0; i < oFamilyP.length; i++) {
		oFamilyP[i].index = i;
		oFamilyP[i].onclick = function() {
			oFamilyTxt.value = oFamilyP[this.index].innerHTML;
			newF = oFamilyTxt.value
			oXian.style.fontFamily = oFamilyP[this.index].innerHTML;
		}
		oFamilyP[i].onmouseover = function() {
			oFamilyP[this.index].style.background = "#00B7EE"
		}
		oFamilyP[i].onmouseout = function() {
			oFamilyP[this.index].style.background = "#FFFFFF"
		}
	}
	//字体字形事件
	for (i = 0; i < oShapeP.length; i++) {
		oShapeP[i].index = i;
		oShapeP[i].onmouseover = function() {
			oShapeP[this.index].style.background = "#00B7EE"
		}
		oShapeP[i].onmouseout = function() {
			oShapeP[this.index].style.background = "#FFFFFF"
		}
		oShapeP[0].onclick = function() {
			oShapeTxt.value = oShapeP[0].innerHTML;
			newS = "normal";
			newW = "normal";
			oXian.style.fontWeight = "normal"
			oXian.style.fontStyle = "normal"
		}
		oShapeP[1].onclick = function() {
			oShapeTxt.value = oShapeP[1].innerHTML;
			newS = "italic";
			newW = "normal";
			oXian.style.fontWeight = "normal"
			oXian.style.fontStyle = "italic";
		}
		oShapeP[2].onclick = function() {
			oShapeTxt.value = oShapeP[2].innerHTML;
			newS = "bold";
			newW = "bold";
			oXian.style.fontStyle = "normal"
			oXian.style.fontWeight = "bold"
		}
		oShapeP[3].onclick = function() {
			newS = "italic";
			newW = "bold";
			oXian.style.fontStyle = "italic"
			oXian.style.fontWeight = "bold"
		}
	}
	//字体大小事件
	for (i = 0; i < oSizeP.length; i++) {
		oSizeP[i].index = i;
		oSizeP[i].onclick = function() {
			oSizeTxt.value = oSizeP[this.index].innerHTML;
			newSi = oSizeTxt.value;
			oXian.style.fontSize = oSizeP[this.index].innerHTML + 'px';
		}
		oSizeP[i].onmouseover = function() {
			oSizeP[this.index].style.background = "#00B7EE"
		}
		oSizeP[i].onmouseout = function() {
			oSizeP[this.index].style.background = "#FFFFFF"
		}
	}
	//字体确定事件
	oConfirm.onclick = function(ev) {
			var oEven = ev || event;
			oEven.cancelBubble = true;
			oMain.style.fontFamily = newF;
			oMain.style.fontSize = newSi + 'px';
			oMain.style.fontStyle = newS;
			oMain.style.fontWeight = newW;
			oFont.style.display = "none";
			oCover.style.display = "none";
		}
		//字体字体取消事件
	oAbolish.onclick = function(ev) {
			var oEven = ev || event;
			oFamilyTxt.value = F;
			oShapeTxt.value = S;
			oSizeTxt.value = Si;
			oEven.cancelBubble = true;
			oMain.style.fontFamily = F;
			oMain.style.fontSize = Si + 'px';
			oMain.style.fontStyle = S;
			oFont.style.display = "none";
			oCover.style.display = "none";
		}
		//字体示例事件
	oTypeface.onclick = function() {
			F = oFamilyTxt.value;
			S = oShapeTxt.value;
			Si = oSizeTxt.value;
			oFont.style.left = document.body.clientWidth / 3 + 'px';
			oFont.style.top = oMain.offsetHeight / 5 + 'px';
			oFont.style.display = "block";
			oCover.style.display = "block";
		}
		//字体关闭按钮事件
	oFontClose.onmouseover = function() {

		oFontClose.style.background = "#FF0000";
	}
	oFontClose.onmouseout = function() {

		oFontClose.style.background = "#FFFFFF";
	}
	oFontClose.onclick = function(ev) {
			var oEven = ev || event;
			oFamilyTxt.value = F;
			oShapeTxt.value = S;
			oSizeTxt.value = Si;
			oEven.cancelBubble = true;
			oMain.style.fontFamily = F;
			oMain.style.fontSize = Si + 'px';
			oMain.style.fontStyle = S;
			oFont.style.display = "none";
			oCover.style.display = "none";
		}
		//字体拖拽事件
	oFont.onmousedown = function(ev) {
		move(ev, oFont);
	}

	//查看
	//查看状态栏事件
	var oNumber = document.getElementById('number');
	var oFooter = document.getElementById('footer');
	var oMainAuto = document.getElementById('mainAuto');
	var oCheckbox2 = document.getElementById('checkbox2');
	//查看状态栏 统计字数
	oMain.onkeyup = function() {
		oNumber.innerHTML = oMain.value.length + "字";
	}
	oCheckbox2.onclick = function() {
		if (oCheckbox2.checked == true) {
			oFooter.style.display = 'block';
			oMainAuto.style.marginBottom = 30 + 'px'
		} else {
			oFooter.style.display = 'none';
			oMainAuto.style.marginBottom = 0;
		}
	}

	//帮助
	//关于记事本事件		
	var oAbout = document.getElementById('about');
	var oAboutTxt = document.getElementById('aboutTxt');
	var oAboutClose = document.getElementById('aboutClose');
	//关于记事本显示事件
	oAbout.onclick = function(ev) {
			var oEven = ev || event;
			oEven.cancelBubble = true;
			oAboutTxt.style.display = "block";
			oAboutTxt.style.left = document.body.clientWidth / 3 + 'px';
			oAboutTxt.style.top = oMain.offsetHeight / 5 + 'px';
			Body.disable = "disable"
			oCover.style.display = "block";

		}
		//关于记事本关闭按钮事件
	oAboutClose.onclick = function() {
		oAboutTxt.style.display = "none";
		oCover.style.display = "none";
	}
	oAboutClose.onmouseover = function() {

		oAboutClose.style.background = "#FF0000";
	}
	oAboutClose.onmouseout = function() {

			oAboutClose.style.background = "#FFFFFF";
		}
		//关于记事本拖拽事件
	oAboutTxt.onmousedown = function(ev) {
		move(ev, oAboutTxt);
	}

}
//获取class样式
function getByClass(oParent, sClass) {
	var aEle = document.getElementsByTagName('*');
	var i = 0;
	var aResult = [];
	for (i = 0; i < aEle.length; i++) {
		if (aEle[i].className == sClass) {
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}
//窗口拖拽
function move(ev, obj) {
	var oEven = ev || event;
	var x = 0;
	var y = 0;
	x = oEven.clientX - obj.offsetLeft;
	y = oEven.clientY - obj.offsetTop;
	document.onmousemove = function(ev) {
		var oEvent = ev || event;
		var out1 = oEvent.clientX - x;
		var out2 = oEvent.clientY - y;

		var oWidth = document.documentElement.clientWidth - obj.offsetWidth;
		var oHeight = document.documentElement.clientHeight - obj.offsetHeight;

		if (out1 < 0) {
			out1 = 0;
		} else if (out1 > oWidth) {
			out1 = oWidth;
		}

		if (out2 < 0) {
			out2 = 0;
		} else if (out2 > oHeight) {
			out2 = oHeight;
		}

		obj.style.left = out1 + 'px';
		obj.style.top = out2 + 'px';
	}
	document.onmouseup = function() {
		document.onmousemove = null;
		document.onmouseup = null;
	}
	return false;
}
//获取时间
function getNowFormatDate() {

	var date = new Date();

	var seperator1 = "-";

	var seperator2 = ":";

	var month = date.getMonth() + 1;

	var strDate = date.getDate();

	if (month >= 1 && month <= 9) {

		month = "0" + month;

	}

	if (strDate >= 0 && strDate <= 9) {

		strDate = "0" + strDate;

	}

	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate

		+" " + date.getHours() + seperator2 + date.getMinutes()

	+seperator2 + date.getSeconds();

	return currentdate;

}
//打开文件
function handleFiles(files) {
	if (files.length) {
		var file = files[0];
		var reader = new FileReader();
		reader.onload = function() {
			document.getElementById("main").innerHTML = this.result;
		};
		reader.readAsText(file);
	}
}
//查找设置光标选中
function setSelectText(el, start, end) {
	if (el.createTextRange) {
		var Range = el.createRange();
		Range.moveEnd('character', end);
		Range.moveStart('character', start);
		Range.select();
	}
	if (el.setSelectionRange) {
		el.focus();
		el.setSelectionRange(start, end); //设光标 
	}
}
//获取光标位置输入时间
function insertAtCursor(myField, myValue) {
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		sel.text = myValue;
		sel.select();
	} else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var restoreTop = myField.scrollTop;
		myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
		if (restoreTop > 0) {
			myField.scrollTop = restoreTop;
		}
		myField.focus();
		myField.selectionStart = startPos + myValue.length;
		myField.selectionEnd = startPos + myValue.length;
	} else {
		myField.value += myValue;
		myField.focus();
	}
}
//获取选中文本
function getSelectText() {
	var txt;
	if (window.getSelection) {
		txt = window.getSelection();
	} else if (document.getSelection) {
		txt = document.getSelection();
	} else if (document.selection) {
		txt = document.selection.createRange().text;
	}
	return txt;
}
//jq打印
function a() {
	$("#main").jqprint();
}