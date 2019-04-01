$(function () {
	var bundleList = [
		{
			task: "Lorem ipsum doloerns,, djfkfjsjdn f",
			date: '"29th April 2018',
			img:'./dhdjd/hvjff'
		},
		{
			task: "Lorem ipsum doloerns,, djfkfjsjdn f",
			date: '"29th April 2018',
			img:'./dhdjd/hvjff'
		}
	];
	var addnewBundle = function () {
		var container = $('.bundleCon');
		$.each(bundleList,function(i,bundleList){
    
			// Let's create the DOM
			var div = $('<div>'),
					para = $('<p>'),
				icon = $('<i>'),
				img = $('<img>');
			
			var listDiv = div.attr('class', 'list-card'),
				cardDiv = div.attr('class', 'card'),
				title = para.text(bundleList.task),
				details = div.attr('class', 'details-row')
			dateDiv = div.attr('id', 'due-date')
			datePara = para.attr('class', 'date-input')
				comment = ;
			
			
			container.append(listDiv);
			listDiv.append(cardDiv);

			// Add content to the DOM
			// link.attr('href',bundleList.docSrc)
			// .text(bundleList.docTitle)
			// .appendTo(title);
			
			// info.text(bundleList.docInfo);
			
			// // Append the infos to the item
			// item.append(title,info);
			
			// // Append the item to the container
			// item.appendTo(container);
	});
	}
});