//= require jquery.min
//= require what-input.min
//= require foundation.min
//= require typer
//= require clipboard

$(document).foundation();

// clipboard.js stuff
var clip = new Clipboard('.clipboard');
var hideTooltip = function() {
  $('#clipboard-tip').foundation('hide');
};
clip.on('success', function(e) {
    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);
    $('#clipboard-tip').foundation('show');
    setTimeout(hideTooltip, 2000);
    e.clearSelection();
});

// newsletter form modal
if ( ($('#autoModal').length > 0) && (Foundation.MediaQuery.atLeast('medium')) ){
  // $('#autoModal').foundation('open');
}

$(".noWidows").each(function() {
    var wordArray = $(this).html().split(" ");
    if (wordArray.length > 1) {
        wordArray[wordArray.length-2] += "&nbsp;" + wordArray[wordArray.length-1];

        var lastWord = wordArray.pop();
        lastWord = lastWord.replace(/.*((?:<\/\w+>)*)$/, "$1");
        $(this).html(wordArray.join(" ") + lastWord);
    }
});


// $('#offCanvas').foundation('open');

// //typekit async
// (function(d) {
//   var config = {
//     kitId: 'nzt8bcj',
//     scriptTimeout: 3000,
//     async: true
//   },
//   h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
// })(document);

// console.log("Yo.");
