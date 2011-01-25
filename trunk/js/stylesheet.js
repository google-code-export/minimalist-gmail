// ==UserScript==
// @name             Minimalist Gmail
// @author           Ansel Santosa
// @namespace        http://chrome.google.com/webstore
// @description      Stylesheet construction and injection
// ==/UserScript==

chrome.extension.sendRequest({elements: 'o'}, function(response) {
	var css = "";

	css += "html.cQ { overflow-y: auto !important; }\n"; // hide scrollbar when not in use

	// GENERAL
		if (response.o.BTN)
			css += ".J-Zh-I { color: " + response.o.BTNcolor + "; border: 1px solid " + response.o.BTNborder + "; background: -webkit-gradient(linear,0% 40%,0% 70%,from(" + response.o.BTNbottom + "),to(" + response.o.BTNtop + ")); }\n";
	// GOOGLE BAR
		if (response.o.gbar || response.o.f_activity_move)
			css += "#gbar { display: none !important; }\n";
		if (response.o.gbarH)
			css += "#gbarToggle { background-color: rgba(0,0,0,.1); height: 10px; cursor: pointer !important; text-align: center; }\n";
			css += "#gbarToggle:hover { background-color: rgba(0,0,0,.3); }\n";
	// HEADER
		if (response.o.header)
			css += "#headerToggle { background-color: rgba(0,0,0,.05); height: 10px; cursor: pointer !important; text-align: center; }\n";
			css += "#headerToggle:hover { background-color: rgba(0,0,0,.3); }\n";
		if (response.o.logo)
			css += "div.a9.Rgky9 { background-image: url(" + response.o.logoSRC + ") !important; background-position: 0% 0%; background-repeat: no-repeat no-repeat; }\n";
		if (response.o.s_all)
			css += "table.cf.d { display: none !important; }\n";
		if (response.o.s_mail)
			css += "td.bN.bM div:nth-child(3) { display: none !important; }\n";
		if (response.o.s_web)
			css += "td.bN.bM div:last-child { display: none !important; }\n";
		if (response.o.s_links)
			css += "td.bN.bR { display: none !important; }\n";
	// MAIN
		if (response.o.high) {
			if (response.o.highCLR != null && response.o.highCLR != "")
				css += "table.F.cf.dqpCVe tr.MT:hover, table.zt tr.zE:hover, table.zt tr.yO:hover { background-color: " + response.o.highCLR + " !important; }\n";
			else css += "table.F.cf.dqpCVe tr.MT:hover, table.zt tr.zE:hover, table.zt tr.yO:hover { background-color: #0099ff !important; }\n";
		}
		if (response.o.stars)
			css += "img.EqK8f { display: none !important; }\n";
		if (response.o.attach) {
			css += "table img[title $= 'xls'], table img[title $= 'XLS'], table img[title $= 'xlsx'], table img[title $= 'XLSX'] { width: 0px !important; height: 0px !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(https://mail.google.com/mail/u/0/images/xls.gif) !important; }";
			css += "table img[title $= 'mp3'], table img[title $= 'MP3'], table img[title $= 'wma'], table img[title $= 'WMA'], table img[title $= 'aac'], table img[title $= 'AAC'], table img[title $= 'wav'], table img[title $= 'WAV'], table img[title $= 'flac'], table img[title $= 'FLAC'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(https://mail.google.com/mail/u/0/images/sound.gif) !important; }";
			css += "table img[title $= 'doc'], table img[title $= 'DOC'], table img[title $= 'docx'], table img[title $= 'DOCX'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;  background-image: url(https://mail.google.com/mail/u/0/images/doc.gif) !important; }";
			css += "table img[title $= 'html'], table img[title $= 'HTML'], table img[title $= 'js'], table img[title $= 'xml'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;  background-image: url(https://mail.google.com/mail/u/0/images/html2.gif) !important; }";
			css += "table img[title $= 'zip'], table img[title $= 'ZIP'], table img[title $= 'rar'], table img[title $= 'RAR'], table img[title $= 'tgz'], table img[title $= 'TGZ'], table img[title $= 'tar'], table img[title $= 'TAR'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;background-image: url(https://mail.google.com/mail/u/0/images/zip.gif) !important; }";
			css += "table img[title $= 'pdf'], table img[title $= 'PDF'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(https://mail.google.com/mail/u/0/images/pdf.gif) !important; }";
			css += "td.yf img[title $= 'tif'], td.yf img[title $= 'tiff'], td.yf img[title $= 'jpeg'], td.yf img[title $= 'JPEG'], td.yf img[title $= 'TIF'], td.yf img[title $= 'TIFF'], td.yf img[title $= 'bmp'], td.yf img[title $= 'jpg'], td.yf img[title $= 'gif'], td.yf img[title $= 'png'], td.yf img[title $= 'BMP'], td.yf img[title $= 'JPG'], td.yf img[title $= 'GIF'], td.yf img[title $= 'PNG'], td.gH img[title $= 'tif'], td.gH img[title $= 'tiff'], td.gH img[title $= 'jpeg'], td.gH img[title $= 'JPEG'], td.gH img[title $= 'TIF'], td.gH img[title $= 'TIFF'], td.gH img[title $= 'bmp'], td.gH img[title $= 'jpg'], td.gH img[title $= 'gif'], td.gH img[title $= 'png'], td.gH img[title $= 'BMP'], td.gH img[title $= 'JPG'], td.gH img[title $= 'GIF'], td.gH img[title $= 'PNG'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAThQTFRF7vX/x938wNj78/n/AIM57PX/5vD6z8/PpN3/5/H9np2cwsXHqKmqysjIruL/3vL/9Pn/Aog1ipquvry99vr/AHo1qqOl4uLi1tXUpZ6gnKq71ez31evm8fr63+2mEZM7AIQ2ra+vtq2wwL6/vd+wteLr6PP5qd/+y8rKBIs78ff7o7DEvOLDnNjp/P3/2Oh+Paw+ubGzPaaAotz40dDQvLS32evQ2djYquD3V7SI3NzcHpdUM6NG4vH52+/iNaZCNKJr//Zrtbi5H5dDpKSke8qeyMfGkNLYAIA/AHw5J5xEPqpHWLhT9Pn8QahxsqqtAIRAkpGRveb9otzy7Pf/KZxZI5o5AHQ1r931eMRm7/n/2Ozar6epvOHuu9X81OX8zuH82+n+4e39097sxM7bUWuL////AAAA4YIzxgAAAGh0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wAf7P1LAAAAyklEQVR42mJIT09PgQFtIIcBJJAGAckMUmgCIgxCqAJpQBEGcXMrCXZeXjdh7rRkIEhlEPfVUrOVlomN4NYTYGZlS2WQkI0K4bdzlONzYgbyk1IZ2M2i+YNU9XU4FAWA/ESggEqkq7oxB0cwDwNnUmJ8KoOJj4G3O5+uXygPiJ+QyqBhbxNmaeEgqOAC4jOmMih7OctbG7EEeHCB+EypDMKagiwsop6i4Vwgflwqg6mhkn+MmJgkVyCIDxQAOR1sPpgPFUhFAgABBgBoTkHNkTEKJQAAAABJRU5ErkJggg%3D%3D) !important; }";
			css += "table img[title $= 'ppt'], table img[title $= 'pps'], table img[title $= 'PPT'], table img[title $= 'PPS'], table img[title $= 'pptx'], table img[title $= 'ppsx'], table img[title $= 'PPTX'], table img[title $= 'pot'], table img[title $= 'PPSX'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important;background-position: top left !important;background-image: url(https://mail.google.com/mail/u/0/images/ppt.gif) !important;}";
			css += "table img[title $= 'mov'], table img[title $= 'MOV'], table img[title $= 'm4v'], table img[title $= 'mp4'], table img[title $= 'M4V'], table img[title $= 'MP4'], table img[title $= 'avi'], table img[title $= 'AVI'], table img[title $= 'wmv'], table img[title $= 'WMV'], table img[title $= 'amv'], table img[title $= 'AMV'], table img[title $= 'mpeg'], table img[title $= 'MPEG'], table img[title $= 'mkv'], table img[title $= 'MKV'], table img[title $= 'flv'], table img[title $= 'FLV'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important;background-position: top left !important;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKVQTFRFx9387vX/wNj77PX/b6j/8/n/5vD65/H9VZj/RI7//5WVO4n/9Pn/ipqu/56e9vr//0ND/21t/319o7DESZH/nKq7QIz//0hIDA0N/0xM/1FRFBQV/1VV/1RU/09PPYr//2Vl/1xc/4CADAwN/1hY/zs7/P3//0VFExMU/1JSNYX/R5D/u9X81OX8zuH82+n+4e39097sxM7bUWuLFxgY////AAAAaiuerwAAADd0Uk5T////////////////////////////////////////////////////////////////////////ABBZnYsAAACNSURBVHjaXI7ZEoIwDABTBW0B8b7v+xYwtP//aSYoTnT7tDuZNOCce5Z0SYCDfZOp/l9oqsZvsFQg/2IzAsHm5TtEfrWGYsInTxE8Ty+3cbxZTyLyhII2g1MQrBYzVU+TO4I2veu00z7Pd+wPBHMJw9GwtT+O2UEuZa/Ib9lvcoKdAp9e7C/8E1DwEmAADRcodUJir08AAAAASUVORK5CYII%3D) !important;}";
			css += "table img[title $= 'txt'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(https://mail.google.com/mail/u/0/images/txt.gif) !important;}";
		}
		if (response.o.attachNew) {
			css += "table img[title $= 'xls'], table img[title $= 'XLS'], table img[title $= 'xlsx'], table img[title $= 'XLSX'] { width: 0px !important; height: 0px !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAwFBMVEX///9twmOXt5vV08ZivFXX1cc4n2BKnW3QzsE1k2AdlkxTsFceoEVjvV5rvVhCrkyMzWx5wVxauFbU7dLc2suo1nxemneSsJcmiFLS0MM3qErN5dU5p2BXs2jl4tKByGcqp0UAiDyv1YHg3s9Oq1KHyGzRz8JknnoAfT85l1ZMsk+cup8ZjUjk6+XMyr0BljrX1cljplhHs1Msp1Flrnr8/PsNgUcOkUVKnlYxhFXq9ukQnj2FxV/z8+9qp4Fzu4ZQkmYmAAAAAXRSTlMAQObYZgAAALxJREFUeF5lzEVuBFEQA9D6CM2Mw8wTZrj/reJWlFXeoiRbKtN/H2mUHeJZ8H69zuc7ojSNZHbo/oodRUOOuxnyb3ELL7Dfn5pXoMWiLNfj5bIoNBeby4VKmI4noI+Fai2FYZjd3X+DZ76AfN9fdcEDnMy2qipKkmQdjiYY0by11tIUshFy4erNUATgPWvt3FPjgFbQeZzzutnWQExKGTslWutqfAgixphvbpQQ5iiEInrL87zvP6E/4zz+ANk3GWWQfcMTAAAAAElFTkSuQmCC) !important; }";
			css += "table img[title $= 'mp3'], table img[title $= 'MP3'], table img[title $= 'wma'], table img[title $= 'WMA'], table img[title $= 'aac'], table img[title $= 'AAC'], table img[title $= 'wav'], table img[title $= 'WAV'], table img[title $= 'flac'], table img[title $= 'FLAC'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEX////JGBLBBwfFDwvPJRzVNCbNIhrDCgfKGhPIFRDXOCndSDTPKB7TMCP22NfHEg3bRDLMHRXjVD3BBAPaQC7hTzrfSzfSLSH88vHOJBq/AQHRKh7YOyvNKSP75+XNIBeaWx34AAAAAXRSTlMAQObYZgAAAHVJREFUeF5NywcKA0EIBVB1ai/bW5L73zIJLOt8EPTxhTvDEO6N4YKtg3mufu0byzKps3UQwqSiFSNDBRXRHA9UDzkiMcgEkBHxD+/fbFICx6sEpTGk9ZQfW/h71806QQ+80BVhRgaShsbDUWbRu9YEXYiI7y+jRgSXm47dBAAAAABJRU5ErkJggg==) !important; }";
			css += "table img[title $= 'txt'], table img[title $= 'doc'], table img[title $= 'DOC'], table img[title $= 'docx'], table img[title $= 'DOCX'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAwFBMVEX///9Jvv9qyP8Rq/4BjNAxtv8hsP+R1f97zf8stP8Fld4HmeMJneoEkNcWrf8Ne7QnW3wEktoKoO4ImuZaw/8/uv8esP8Glt8NpvgcmdhRmsUAicwCjtOJ0v8MpfYohrl0y/8LofCC0P8MpPRSwf8Bis4OqPsem9oRh8Qlsv9cos0Qgr06dJh5x/UweaNCu/+c2P8cmNYfnt45uf8ar/82t/8mTmcnVXK/5f8dZI0zoNkWe7K14f9Xwv9evvUXmtyLnD/iAAAAAXRSTlMAQObYZgAAAKlJREFUeF41ylOWBEEARNFE2bbRtsf731WnJv5enAsAUDUUQTi8gJhaa+jnKCun/6feF79TrN/U0zcX2u65g9e10w3iQYW3ieUEd0g80QRjee0sEBIPPF5pN8Fqu3U/ibjLukK6t0zDnl0ilMTBtMPUr8qSCIwX2ch7ZkfWjH1gmayZCL4ebWgarJkIP7yD4du0uUjtNrcribQQf5fLcpmf+agAkiRRLMAbyPoVvHcsEKMAAAAASUVORK5CYII%3D) !important; }";
			css += "table img[title $= 'html'], table img[title $= 'HTML'], table img[title $= 'js'], table img[title $= 'xml'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAYBQTFRFOEtOrlhX2gAARa5RZpdqh9GR7u3tx7FPKKYw/+kwuI2K3st1R2mErrGpbqdy/u1z8cwT89M8d5d829za+QEAIaUq/+pP/tsm8fHx/dYNGFV7raN21lZTq6KEeLb09NddTmN6NLQ7/9kNsayabNdzi6aNyjIx/9sbFpYeJpwu08rK6wAA78whzdHNzs/O9tAQ/f39/9sQzbq60CUl/+IRNZdF7x4gioBu5clKjsHzm7uWdJpbkLyht0Qswk1N20RFNZQ9nJF55+fn3woKwMfA6cUaIDRI694zRcVMX9Jl4xAP4hERK386y71ye6CDLrE2IYDCTYO8fpuBdWthYVVZlGJRvWlsa5R31cFRjkQ98ywri2koRZ3sv8LDgL75yFJSO3CBGXayAIUJDIsUpp10ibmNOJjgqp5n40hNvYZ0Nm9KzSoqpbVVnBwqvTMz4sAlu7A7J580L1t0h417Ob1CL5XqMJPnN5juR2+lOZ3v1tbV3NfX9RoZadZvdNl9////1FKScAAAAIB0Uk5T/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wA4BUtnAAAA/ElEQVR42mKoBwE2LSMjLQkwkwGIJbjis42N1ey4JCACekL2zkxe3kxMznnVIAFhVpuMGhlGRpkobW01tnoGAz4VVi5GhcAKhTAzEZHMegaXkhIVK4U0ubhKntDIXFthBlVFRc/UojI5y5gEX/eCaGUGvkJ/D1aGxNLyAAZuEyUdaQYWTVF/FSEGKSk3czFJfVdpBlVNDQ7FOr+QYFl+JUmBfGUGPYdkDVHTYm5+MSDflb2KoT6oMMnHUZ5T3FBJ31VQ1oCh3omlMEueU91QUl9HMN0J5HRhIWZrHRN1cUGLFGGI59h4w1lyItiledmgvgUK6cXqCUO8DxBgAGnMP5299Ij8AAAAAElFTkSuQmCC) !important; }";
			css += "table img[title $= 'zip'], table img[title $= 'ZIP'], table img[title $= 'rar'], table img[title $= 'RAR'], table img[title $= 'tgz'], table img[title $= 'TGZ'], table img[title $= 'tar'], table img[title $= 'TAR'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEX////gTTnaQS+/AADrcVfqZkzXdmjOJBray7zYVkTVk4TjWkS/DQqnHRXvfGHWNynbppbXtqjLHBXp1Mfr5tjPMya0SDzXSDnTLSHh3s/pkHvFKSPyd1a6eG9nal6GiHWkF23gAAAAAXRSTlMAQObYZgAAAIhJREFUeF6NykcKQkEQhOEOk/PLwXT/W9oOgogbv139FPznIe7iE6B7h3IVqpwlxoibBFn6nFpwk9ntCKC01m3yiDSsEkZQSpX51DpGjxvVCjnndVhzlwQgopoN1eX1T4mBiPzc6r4E5y6JGaoIh7F2bE02wy5sOAZj3I17oM77bbGCAfgL/HgCqrEIzdJPFbQAAAAASUVORK5CYII=) !important; }";
			css += "table img[title $= 'pdf'], table img[title $= 'PDF'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(https://mail.google.com/mail/u/0/images/pdf.gif) !important; }";
			css += "td.yf img[title $= 'tif'], td.yf img[title $= 'tiff'], td.yf img[title $= 'jpeg'], td.yf img[title $= 'JPEG'], td.yf img[title $= 'TIF'], td.yf img[title $= 'TIFF'], td.yf img[title $= 'bmp'], td.yf img[title $= 'jpg'], td.yf img[title $= 'gif'], td.yf img[title $= 'png'], td.yf img[title $= 'BMP'], td.yf img[title $= 'JPG'], td.yf img[title $= 'GIF'], td.yf img[title $= 'PNG'], td.gH img[title $= 'tif'], td.gH img[title $= 'tiff'], td.gH img[title $= 'jpeg'], td.gH img[title $= 'JPEG'], td.gH img[title $= 'TIF'], td.gH img[title $= 'TIFF'], td.gH img[title $= 'bmp'], td.gH img[title $= 'jpg'], td.gH img[title $= 'gif'], td.gH img[title $= 'png'], td.gH img[title $= 'BMP'], td.gH img[title $= 'JPG'], td.gH img[title $= 'GIF'], td.gH img[title $= 'PNG'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAwFBMVEX///8AiDwcokLy8eUBmTlCvP9Jvv96zf9zy/9syf+32ufz8+pDr0wAkjppvO2E0f9exP+L0v46rEpVwv9at+2f2f9Ov/+ExO3w7eInpkQyqkjH5vWAz/84uP8qqpF6we254faS1f+b2P88uf9RwP80t//u7N9kxv9Vv/vr6dve5uG43/ERnz5oxfh3yfYNl2CX1//i389Zw//e28wSoV7o5ddYvsQDiEm82N8cmkNOtnfl4tIJnDwVoWtKt5Y9tc6aIrEXAAAAAXRSTlMAQObYZgAAAKdJREFUeF5NzdWuAzEMBFAnWWZmLDNzL/z/XzWudtX6zUczGoBd69qFrKhTx48kESD8wGEkiUMIB23TLItvyHWWLDRN7SHUdTaZn5+3TQc5YwnC/rh+w8CN47q2LCsIZgi46tqy0s+WgH+/GonDEvDvAtgYw4Pf3wUDvIFgeFmWUlo5/n+1JeSKkKZ09XP6NU2TEPIGykEQ8EcwDA+N350fAcAGBrrGC6HBFvKj4FQ8AAAAAElFTkSuQmCC) !important; }";
			css += "table img[title $= 'ppt'], table img[title $= 'pps'], table img[title $= 'PPT'], table img[title $= 'PPS'], table img[title $= 'pptx'], table img[title $= 'ppsx'], table img[title $= 'PPTX'], table img[title $= 'pot'], table img[title $= 'PPSX'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important;background-position: top left !important;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEX////aWwf+gwD8ZQHEVQP/mxz0YwL/zY3eXAb/r0f/oiv+27H/05rsYQP/fAD/dQD/qDn/wXH/tVX/u2P/cAD0cALubgT+iQDoXwSxSgb/x3/pbQTbWwf/awDQaQLjXQXM1JhSAAAAAXRSTlMAQObYZgAAAIlJREFUeF5lykUCQjEMhOFJvU/dhfvfkqTQDWT3/Rn8X1lW/ujHIXaF/bWVUlV+XR/VNO2kzWsDvHg/JZjdbAHHsSr1iG9nag59r5Ric9Cufl0YR2Yyhy0QhiE7DQgxtsyPeUDoukmYzANCUdzCbIK1WjOzCbCOxQzJFwDXzvO8LGc6CZD/d0DlG4N+DR+Rmb4UAAAAAElFTkSuQmCC) !important;}";
			css += "table img[title $= 'mov'], table img[title $= 'MOV'], table img[title $= 'm4v'], table img[title $= 'mp4'], table img[title $= 'M4V'], table img[title $= 'MP4'], table img[title $= 'avi'], table img[title $= 'AVI'], table img[title $= 'wmv'], table img[title $= 'WMV'], table img[title $= 'amv'], table img[title $= 'AMV'], table img[title $= 'mpeg'], table img[title $= 'MPEG'], table img[title $= 'mkv'], table img[title $= 'MKV'], table img[title $= 'flv'], table img[title $= 'FLV'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important;background-position: top left !important;background-image: url(data:image/gif;base64,R0lGODlhEAAQAMQfAMS35mtMwlItt5N70lw5vEUdsVUwuGNCvnJTxFsnpFg0ukwmtVUgoa2b3aCL2IZszWdGwGA+vU8otntfyXdax0sktEgfsm9QxKiV27Gg3lk1ukghs2k4qUQbsbOi3////yH5BAEAAB8ALAAAAAAQABAAAAWk4AdkwwCcDkSdAPI5ntcMDxYPR9DE1wR7mMfE5hkQIDtPIsFpLplOBvRCmUwolEsAciAoDJJKIXBBmLXciFcg2XQggXg8TdAYBAtL5wDpcw9qdmwbBQURh4CHdXdhehsaBJGRGl9sFXoWEgYKnF93lnoFC58CpWwSCxuhCwIaC6+oCxUbhB0WrAoaFrS0FoUdBRuauQofvG4dybTDxR/Oz9DRHyEAOw==) !important;}";
		}
		if (response.o.attachC) {
			css += "table img[title $= 'xls'], table img[title $= 'XLS'], table img[title $= 'xlsx'], table img[title $= 'XLSX'] { width: 0px !important; height: 0px !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(" + response.o.ci_1 + ") !important; }";
			css += "table img[title $= 'mp3'], table img[title $= 'MP3'], table img[title $= 'wma'], table img[title $= 'WMA'], table img[title $= 'aac'], table img[title $= 'AAC'], table img[title $= 'wav'], table img[title $= 'WAV'], table img[title $= 'flac'], table img[title $= 'FLAC'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(" + response.o.ci_2 + ") !important; }";
			css += "table img[title $= 'txt'], table img[title $= 'doc'], table img[title $= 'DOC'], table img[title $= 'docx'], table img[title $= 'DOCX'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;  background-image: url(" + response.o.ci_3 + ") !important; }";
			css += "table img[title $= 'html'], table img[title $= 'HTML'], table img[title $= 'js'], table img[title $= 'xml'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;  background-image: url(" + response.o.ci_4 + ") !important; }";
			css += "table img[title $= 'zip'], table img[title $= 'ZIP'], table img[title $= 'rar'], table img[title $= 'RAR'], table img[title $= 'tgz'], table img[title $= 'TGZ'], table img[title $= 'tar'], table img[title $= 'TAR'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important;background-image: url(" + response.o.ci_5 + ") !important; }";
			css += "table img[title $= 'pdf'], table img[title $= 'PDF'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image: url(" + response.o.ci_6 + ") !important; }";
			css += "td.yf img[title $= 'tif'], td.yf img[title $= 'tiff'], td.yf img[title $= 'jpeg'], td.yf img[title $= 'JPEG'], td.yf img[title $= 'TIF'], td.yf img[title $= 'TIFF'], td.yf img[title $= 'bmp'], td.yf img[title $= 'jpg'], td.yf img[title $= 'gif'], td.yf img[title $= 'png'], td.yf img[title $= 'BMP'], td.yf img[title $= 'JPG'], td.yf img[title $= 'GIF'], td.yf img[title $= 'PNG'], td.gH img[title $= 'tif'], td.gH img[title $= 'tiff'], td.gH img[title $= 'jpeg'], td.gH img[title $= 'JPEG'], td.gH img[title $= 'TIF'], td.gH img[title $= 'TIFF'], td.gH img[title $= 'bmp'], td.gH img[title $= 'jpg'], td.gH img[title $= 'gif'], td.gH img[title $= 'png'], td.gH img[title $= 'BMP'], td.gH img[title $= 'JPG'], td.gH img[title $= 'GIF'], td.gH img[title $= 'PNG'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important; background-position: top left !important; background-image:url(" + response.o.ci_7 + ") !important; }";
			css += "table img[title $= 'ppt'], table img[title $= 'pps'], table img[title $= 'PPT'], table img[title $= 'PPS'], table img[title $= 'pptx'], table img[title $= 'ppsx'], table img[title $= 'PPTX'], table img[title $= 'pot'], table img[title $= 'PPSX'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important;background-position: top left !important;background-image: url(" + response.o.ci_8 + ") !important;}";
			css += "table img[title $= 'mov'], table img[title $= 'MOV'], table img[title $= 'm4v'], table img[title $= 'mp4'], table img[title $= 'M4V'], table img[title $= 'MP4'], table img[title $= 'avi'], table img[title $= 'AVI'], table img[title $= 'wmv'], table img[title $= 'WMV'], table img[title $= 'amv'], table img[title $= 'AMV'], table img[title $= 'mpeg'], table img[title $= 'MPEG'], table img[title $= 'mkv'], table img[title $= 'MKV'], table img[title $= 'flv'], table img[title $= 'FLV'] { width: 0 !important; height: 0 !important; padding: 16px 0 0 16px !important;background-position: top left !important;background-image: url(" + response.o.ci_9 + ") !important;}";
		}
		if (response.o.t_top)
			css += "div.VP5otc-pzeoBf.D.E { display: none !important; }\n";
		if (response.o.bottom)
			css += "div.VP5otc-U4m8q.D.E { display: none !important; }\n";
		if (response.o.t_check)
			css += "[class=\"VP5otc-HT6HAf J-J5-Ji\"]:nth-child(1) { display: none !important; }\n";
		if (response.o.t_arch)
			css += "[class=\"VP5otc-HT6HAf J-J5-Ji\"]:nth-child(2) { display: none !important; }\n";
		if (response.o.t_move) {
			if (response.o.pi)
				css += "[class=\"VP5otc-HT6HAf J-J5-Ji\"]:nth-child(4) { display: none !important; }\n";
			else css += "[class=\"VP5otc-HT6HAf J-J5-Ji\"]:nth-child(3) { display: none !important; }\n";
		}
		if (response.o.t_actions) {
			if (response.o.pi)
				css += "[class=\"VP5otc-HT6HAf J-J5-Ji\"]:nth-child(5) { display: none !important; }\n";
			else css += "[class=\"VP5otc-HT6HAf J-J5-Ji\"]:nth-child(4) { display: none !important; }\n";
		}
		if (response.o.t_refresh) {
			if (response.o.pi)
				css += "[class=\"J-J5-Ji\"]:nth-child(6) { display: none !important; }\n";
			else css += "[class=\"J-J5-Ji\"]:nth-child(5) { display: none !important; }\n";
		}
		if (response.o.zads)
			css += ".TC[colspan = '3'] { display: none !important; }\n";
		if (response.o.ads) {
			css += ".iY .Bu:last-child, .iY .Bu:last-child > .nH { height: 0px !important; overflow: hidden !important; width: 0px !important; }\n";
			css += ".iY .Bu:last-child .nH > .nH > .nH:first-child { position: absolute !important; right: 41px !important; top: 10px !important; }\n";
			css += ".hk { float: left !important; padding: 0 !important; }\n";
			css += ".hk span { margin: 0 5px !important; display: block !important; overflow: hidden !important; width: 20px !important; height: 20px !important; }\n";
		}
		if (response.o.bads)
			css += "div.nH.MC, div.z0DeRc { display: none !important; }\n";
	// NAVIGATION
		if (response.o.invites)
			css += "div.pY { display: none !important; } \n";
		if (response.o.top)
			css += "div.nH.CX.pp, div.nH.T4.pp { display: none !important; }\n";
		if (response.o.mail)
			css += "div.nH.CX.pp div:nth-child(1) { display: none !important; }\n";
		if (response.o.contacts)
			css += "div.nH.CX.pp div:nth-child(2) { display: none !important; }\n";
		if (response.o.tasks)
			css += "div.nH.T4.pp div { display: none !important; }\n";
		if (response.o.middle) {
			css += "div.nH.T4.pp + div.nH.pp[style] { display: none !important; }\n";
			css += "div.nH.CX.pp + div.nH.T4.pp { border-bottom: none !important; }\n";
		}
		if (response.o.compose)
			css += "div.z0 { display: none !important; }\n";
		if (response.o.spam) {
			css += "span#ds_spam b, div.TO a[href$='#spam'] { visibility: hidden; }\n";
			css += "span#ds_spam b:before, div.TO a[href$='#spam']:before { content: 'Spam'; visibility: visible; font-weight: 400; }\n";
			css += "div.TO.ol a[href$='#spam'] { visibility: visible; }\n";
			css += "div.TO.ol a[href$='#spam']:before { content: normal; }\n";
		}
		if (response.o.buzz) {
			css += "div.TO a[href$='#buzz'] { visibility: hidden; }\n";
			css += "div.TO a[href$='#buzz']:before { content: 'Buzz'; visibility: visible; }\n";
			css += "div.TO.ol a[href$='#buzz'] { visibility: visible; }\n";
			css += "div.TO.ol a[href$='#buzz']:before { content: normal; }\n";
		}
		if (response.o.icons)
			css += "img.Xo, img.pW, img.pH-CD, img.pV, div.u5 { display: none !important; }\n";
		if (response.o.more)
			css += "div.n6 { display: none !important; }\n";
	// CHAT
		if (response.o.chat)
			css += "div.nH.pp.T0 { display: none !important; } \n";
		if (response.o.c_search)
			css += "input.dI.dG { display: none !important; } \n";
		if (response.o.status)
			css += "table.cf.vH tr.vm { display: none !important; }\n";
	// FOOTER
		if (response.o.f_tips)
			css += "div.nH.l2.ov div:nth-child(3) { display: none !important; }\n";
		if (response.o.f_options)
			css += "div.nH.l2.ov div:nth-child(6) { display: none !important; }\n";
		if (response.o.f_legal)
			css += "div.nH.l2.ov div:nth-child(7) { display: none !important; }\n";
		if (response.o.f_s_classic)
			css += "div.md span.mj { display: none !important; }\n";
		if (response.o.f_s_label)
			css += "div.nH.l2.ov div:nth-child(4) td:nth-child(1) { display: none !important; }\n";
		if (response.o.f_s_graphic)
			css += "div.nH.l2.ov div:nth-child(4) td:nth-child(2) { display: none !important; }\n";
		if (response.o.f_s_verbose)
			css += "div.nH.l2.ov div:nth-child(4) td:nth-child(3) .mh { display: none !important; }\n";
		if (response.o.f_s_menu)
			css += "div.nH.l2.ov div:nth-child(4) td:nth-child(3) .mm { display: none !important; }\n";
		if (response.o.f_activity_move) {
			// Right side chat
			css += "table div.nH.l2.ov div:nth-child(5) { margin: -100px 0 0 7px !important; position: absolute !important; top: 0px !important; left: 0px !important;}";
			// Normal chat
			css += "div.nH.l2.ov div:nth-child(5) { margin: -7px 0 0 7px; position: absolute !important; top: 0px !important; left: 0px !important;}";
		}
		if (response.o.f_activity_hide)
			css += "div.nH.l2.ov div:nth-child(5) { display: none !important; }\n";

	//---- INJECT CSS ----//
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node);
	}
});