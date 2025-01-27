ig.module("game.feature.font.starcaller2-custom-icons").requires("game.feature.font.font-system").defines(function() {
	var fontIdx = sc.fontsystem.font.iconSets.length, smallFontIdx = sc.fontsystem.smallFont.iconSets.length;
	
	sc.fontsystem.font.pushIconSet(new ig.Font("media/font/starcaller2-font-icons.png", 16, ig.MultiFont.ICON_START));
	
	//large font icons
	sc.fontsystem.font.setMapping({"class-star" :[fontIdx, 0]});

	//small font icons

});