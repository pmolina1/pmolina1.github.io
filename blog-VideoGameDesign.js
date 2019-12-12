function goBack() {
  window.history.back();
}

var options = {
	page: 2,
	pdfOpenParams: {
		navpanes: 1,
		view: "FitH",
		pagemode: "thumbs"
	}
};

PDFObject.embed("/Users/pmoli/Desktop/Capstone/BlogPDFS/Honey,%20I'm%20Home.pdf");
PDFObject.embed("/Users/pmoli/Desktop/Capstone/BlogPDFS/COMP%20488%20Presentation.pdf");
PDFObject.embed("/Users/pmoli/Desktop/Capstone/BlogPDFS/Honey%20I'm%20Home%20Final%20Screenshots.pdf");
