$(function(){
	//window.alert("hoge");

	// ページ内を加工
	
	$("body").html(
		$("body").html()
		.replace( /[あかさたなはまやらわ]/g, "にゃ" )
		.replace( /[アカサタナハマヤラワ]/g, "ニャ" )
		.replace( /[。]/g, "にゃ。" )
	);
	
});