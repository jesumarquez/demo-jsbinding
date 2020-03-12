 var viewData = {};

$(function () {
    function updateViewData(key, value) {
        viewData[key] = value;
    }

    function detectBindableElements() {
        var bindableEls = $('[data-bind]');

        bindableEls.on('change', function () {
            var $this = $(this);

            updateViewData($this.data('bind'), $this.val());

            $(document).trigger('updateDisplay');
        });

        bindableEls.each(function() {
            updateViewData($(this));
        });
    }

    // $(document).on('updateBindableElements', detectBindableElements);

    detectBindableElements();
});

$(function () {
    function updateDisplay() {
        var updateEls = $('[data-update]');

        updateEls.each(function () {
            $(this).html(viewData[$(this).data('update')]);
        });
    }

    $(document).on('updateDisplay', updateDisplay);
});