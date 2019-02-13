var BlockSDK = require('./blocksdk');

	var sdk = new BlockSDK();
	sdk.getContent(function (content) {
		var quill = new Quill('#editor-container', {
			theme: 'snow'
		});
		quill.root.innerHTML = content;
		function saveText() {
			var html = quill.root.innerHTML;
			sdk.setContent(html);
			sdk.setSuperContent('This is super content: ' + html);

			sdk.getData(function (data) {
				var numberOfEdits = data.numberOfEdits || 0;
				sdk.setData({
					numberOfEdits: numberOfEdits + 1
				});
			});
		}
		quill.on('text-change', saveText);
	});
