$(function () {
	var bundleList = [
		{
			task: "Hello, I'm just a fucking awesome dude who's sick but helping this buddy of mine. Yeah I'm a nice guy right. Upon the fact I feel like shit, I'm still helping",
			date: '29th April 2018',
			img:'assets/images/face.jpg'
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
			
			var listDiv = $('<div>').attr('class', 'list-card'),
				cardDiv = $('<div>').attr('class', 'card'),
				title = $('<p>').text(bundleList.task),
				details = $('<div>').attr('class', 'details-row'),
			dateDiv = $('<div>').attr('id', 'due-date'),
			datePara = $('<p>').attr('class', 'date-input').text(bundleList.date),
			comment = $('<i>').addClass('fa fa-comment'),
				attach = $('<i>').addClass('fa fa-paperclip'),
				imgIcon = $('<div>').addClass('icon')
				image = $('<img>').attr('src', bundleList.img);
			
			
			container.append(listDiv);
			listDiv.append(cardDiv);
			cardDiv.append(title, details);
			details.append(dateDiv, comment, attach, imgIcon);
			dateDiv.append(datePara);
			imgIcon.append(image);

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
	$(document).ready(addnewBundle());
});