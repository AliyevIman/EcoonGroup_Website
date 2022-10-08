var myDictionary = {
    az : {
        'We Are Building The Future' : 'Biz Gələcəyi Qururuq',
        'Providing all kind of construction services':'Hər növ tikinti xidmətlərinin verilməsi',
        'About':"Haqqımızda"
    }
}
$.tr.dictionary(myDictionary);

$(document).ready(function() {
    
    // change the language
    $('#language').change(function() {
        $.tr.language($(this).val());
        var tr = $.tr.translator();
        $('#about').text(tr('About'));
        $('#welcome').text(tr('We Are Building The Future'));
        $('#providing').text(tr('Providing all kind of construction services'));
    });
    // default language is English if no cookies present
    var language = $.tr.language('en', true);
    $('#language').val(language);
    $('#language').change();
});